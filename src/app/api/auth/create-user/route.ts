// app/api/create-user/route.ts
import { verifySession } from "@/lib/auth/verifySession";
import { supabaseAdmin } from "@/lib/supabase/supabaseServer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const userAuth = await verifySession();

  if (!userAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { access_token } = userAuth;
  const supabase = supabaseAdmin;

  const { user_type } = await req.json();

  if (!user_type) {
    return NextResponse.json(
      { error: "user_type is required" },
      { status: 400 }
    );
  }

  // 1. Get the current user
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser(access_token);

  if (userError || !user) {
    return NextResponse.json(
      { error: "فشل في استرجاع بيانات المستخدم" },
      { status: 401 }
    );
  }

  const full_name =
    user.user_metadata.full_name || user.user_metadata.name || "";
  const email = user.email!;
  const avatar_url = user.user_metadata.avatar_url || null;
  const id = user.id;

  // 2. Insert into profiles
  const { error: insertProfileError, data: profileData } = await supabase
    .from("profiles")
    .insert({
      id,
      full_name,
      email,
      avatar_url,
      user_type,
    })
    .select();

  if (insertProfileError) {
    return NextResponse.json(
      { error: "فشل في إنشاء الملف الشخصي" },
      { status: 500 }
    );
  }

  // 3. If expert, insert into professionals
  if (user_type === "expert") {
    const { error: expertError } = await supabase.from("professionals").insert({
      id,
      user_id: id,
      name: full_name,
      avatar: avatar_url,
    });

    if (expertError) {
      return NextResponse.json(
        { error: "فشل في إضافة بيانات الخبير" },
        { status: 500 }
      );
    }
  }

  return NextResponse.json(
    { user: profileData, token: access_token },
    { status: 201 }
  );
}

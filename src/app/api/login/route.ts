import { createSupabaseServer } from "@/lib/supabase/supabaseServer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  const supabase = await createSupabaseServer();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error || !data.session || !data.user) {
    return NextResponse.json(
      { error: error?.message || "معلومات خاطئة" },
      { status: 401 }
    );
  }

  const {
    data: profile,
    error: profileError,
    status,
  } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", data.user.id)
    .single();

  if (profileError?.message === "No rows found" || !profile) {
    return NextResponse.json(
      {
        error: "حسابك غير مكتمل. من فضلك أكمل بيانات التسجيل.",
        needsCompletion: true,
      },
      { status: 403 }
    );
  }

  if (profileError) {
    return NextResponse.json({ error: profileError.message }, { status });
  }

  const res = NextResponse.json({
    user: profile,
    token: data.session.access_token,
  });

  res.cookies.set("token", data.session.access_token, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
  });

  return res;
}

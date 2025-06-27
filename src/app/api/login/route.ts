import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

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

  // Fetch profile data
  const {
    data: profile,
    error: profileError,
    status,
  } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", data.user.id)
    .single();

  if (profileError) {
    return NextResponse.json({ error: profileError.message }, { status });
  }
  if (profile.email_confirmed === false) {
    return NextResponse.json(
      { error: "يرجى تأكيد بريدك الإلكتروني" },
      { status: 403 }
    );
  }
  const res = NextResponse.json({
    user: profile,
    token: data.session.access_token,
  });

  res.cookies.set("token", data.session.access_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}

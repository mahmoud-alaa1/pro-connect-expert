// app/api/logout/route.ts
import { createSupabaseServer } from "@/lib/supabase/supabaseServer";
import { NextResponse } from "next/server";

export async function POST() {
  const supabase = await createSupabaseServer();

  await supabase.auth.signOut();

  const response = NextResponse.json({ success: true });
  response.cookies.set("token", "", {
    httpOnly: true,
    maxAge: 0,
    path: "/",
  });

  return response;
}

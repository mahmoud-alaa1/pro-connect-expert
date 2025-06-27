// app/api/logout/route.ts
import { createSupabaseServer } from "@/lib/supabase/supabaseServer";
import { cookies } from "next/headers";

export async function POST() {
  const supabase = await createSupabaseServer();

  await supabase.auth.signOut();

  (await cookies()).set("token", "", {
    httpOnly: true,
    maxAge: 0,
    path: "/",
  });

  return Response.json({ success: true });
}

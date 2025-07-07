import { cookies } from "next/headers";
import { createSupabaseServer } from "@/lib/supabase/supabaseServer";

export async function getUserFromCookie() {
  const supabase = await createSupabaseServer();
  const cookieStore = cookies();

  const token = (await cookieStore).get("token")?.value;
  if (!token) throw new Error("Unauthorized: No token found");

  const { data, error } = await supabase.auth.getUser(token);

  if (error || !data.user) {
    throw new Error("Unauthorized: Invalid token");
  }

  return data.user;
}

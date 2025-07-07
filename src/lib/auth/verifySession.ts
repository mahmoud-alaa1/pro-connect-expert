import { createSupabaseServer } from "@/lib/supabase/supabaseServer";

export async function verifySession() {
  const supabase = await createSupabaseServer();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) return null;

  return data.user;
}

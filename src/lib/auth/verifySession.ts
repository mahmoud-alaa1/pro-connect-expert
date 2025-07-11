import { createSupabaseServer } from "@/lib/supabase/supabaseServer";

export async function verifySession() {
  const supabase = await createSupabaseServer();

  const { data, error } = await supabase.auth.getSession();

  if (error || !data.session) return null;

  return { user: data.session.user, access_token: data.session.access_token };
}

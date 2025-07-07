import { supabaseAdmin } from "@/lib/supabase/supabaseServer";

export async function updateProfileAvatar(userId: string, avatarUrl: string) {
  const { error } = await supabaseAdmin
    .from("profiles")
    .update({ avatar_url: avatarUrl })
    .eq("id", userId);

  if (error) throw new Error(`DB update failed: ${error.message}`);
}

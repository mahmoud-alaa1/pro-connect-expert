import { supabaseAdmin } from "@/lib/supabase/supabaseServer";

export async function getPublicUrl(filePath: string) {
  const {
    data: { publicUrl },
  } = supabaseAdmin.storage.from("avatars").getPublicUrl(filePath);

  return publicUrl;
}

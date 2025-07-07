import { supabaseAdmin } from "@/lib/supabase/supabaseServer";

export async function uploadAvatar(userId: string, file: File) {
  const ext = file.name.split(".").pop();
  const fileName = `${userId}-${Date.now()}.${ext}`;
  const filePath = `avatars/${fileName}`;

  const { error } = await supabaseAdmin.storage
    .from("avatars")
    .upload(filePath, file, {
      upsert: true,
    });

  if (error) throw new Error(`Upload failed: ${error.message}`);
  return filePath;
}

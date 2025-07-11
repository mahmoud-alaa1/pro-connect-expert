"use server";

import { createSupabaseServer } from "@/lib/supabase/supabaseServer";

export async function createUserAction(user_type: "client" | "expert") {
  const supabase = await createSupabaseServer();

  // 1. جلب بيانات المستخدم من Supabase Auth
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    throw new Error("فشل في استرجاع بيانات المستخدم");
  }

  const full_name: string =
    user.user_metadata.full_name || user.user_metadata.name || "";
  const email = user.email!;
  const avatar_url: string | null = user.user_metadata.avatar_url || null;
  const id = user.id;

  // 2. إدراج المستخدم في جدول profiles
  const { error: insertProfileError } = await supabase.from("profiles").insert({
    id,
    full_name,
    email,
    avatar_url,
    user_type: user_type,
  });

  if (insertProfileError) {
    throw new Error("فشل في إنشاء الملف الشخصي");
  }

  // 3. لو المستخدم خبير، نضيفه في جدول professionals
  if (user_type === "expert") {
    const { error: expertError } = await supabase.from("professionals").insert({
      id,
      user_id: id,
      title: "",
      specialty: "",
      bio: "",
      hourly_rate: 0,
      name: full_name,
      avatar: avatar_url,
      verified: true,
      availability_status: true,
    });


    if (expertError) {
      throw new Error("فشل في إضافة بيانات الخبير");
    }
  }

  return { success: true };
}

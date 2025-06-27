"use server";

import { supabase } from "@/lib/supabase";

export async function verifyOtpAction({
  email,
  otp,
}: {
  email: string;
  otp: string;
}) {
  const { data: user } = await supabase
    .from("pending_users")
    .select("*")
    .eq("email", email)
    .eq("otp", otp)
    .gt("expires_at", new Date().toISOString())
    .single();

  if (!user) throw new Error("OTP غير صحيح أو منتهي");

  // 1. Create user in auth
  const { data: authData, error: authError } =
    await supabase.auth.admin.createUser({
      email: user.email,
      password: user.password,
      email_confirm: true,
    });


  if (authError || !authData?.user) {
    throw new Error("فشل في إنشاء حساب المستخدم");
  }

  const newUserId = authData.user.id; 

  // 2. Add to profiles
  const { error: profileError, data } = await supabase.from("profiles").insert({
    id: newUserId,
    email: user.email,
    full_name: user.full_name,
    user_type: user.user_type,
  });

  console.log("here ", profileError, data);

  if (profileError) throw new Error("فشل في إنشاء الملف الشخصي");

  // 3. Add to professionals if expert
  if (user.user_type === "expert") {
    const { error: expertError } = await supabase.from("professionals").insert({
      user_id: user.id,
      title: user.title,
      speciality: user.speciality,
      bio: user.bio,
      hourly_rate: user.hourly_rate,
    });

    if (expertError) throw new Error("فشل في إضافة بيانات الخبير");
  }

  // 4. احذف من pending_users
  await supabase.from("pending_users").delete().eq("email", email);

  return {
    id: user.id,
    email: user.email,
    user_type: user.user_type,
    full_name: user.full_name,
  };
}

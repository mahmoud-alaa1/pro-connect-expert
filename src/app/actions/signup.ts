"use server";

import { supabase } from "@/lib/supabase";
import { z } from "zod";
import { signupSchema } from "@/schemas/authSchema";
import { Resend } from "resend";
import { generateOTP } from "@/lib/utils";
import { nanoid } from "nanoid";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function signupAction(data: z.infer<typeof signupSchema>) {
  //  1. Generate OTP
  const otp = generateOTP();
  const expires_at = new Date(Date.now() + 60 * 60 * 1000); // 60 mins
  const token = nanoid();

  //  2. Store in pending_users
  const { error } = await supabase.from("pending_users").insert({
    ...data,
    otp,
    token,
    expires_at,
  });

  if (error) {
    throw new Error(error.message || "حدث خطأ أثناء حفظ المستخدم المعلق");
  }

  const confirmLink = `${process.env.NEXT_PUBLIC_BASE_URL}/confirm-email?token=${token}`;

  //  3. Send OTP via email
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "test@resend.dev",
    subject: "تأكيد بريدك الإلكتروني",
    html: `
    <div dir="rtl" style="font-family: Tahoma, sans-serif; line-height: 1.8;">
      <p>أهلاً بك 👋</p>
      <p>اضغط على الرابط التالي لتأكيد بريدك الإلكتروني:</p>
      <p><a href="${confirmLink}">${confirmLink}</a></p>
      <hr />
      <p>أو يمكنك إدخال رمز التحقق التالي:</p>
      <h2 style="color: #2b6cb0;">${otp}</h2>
      <p>الرابط والكود ينتهيان خلال 30 دقيقة.</p>
    </div>
  `,
  });
  return {
    message: "تم إرسال رمز التفعيل إلى بريدك الإلكتروني",
    email: data.email,
    expires_at: expires_at.toISOString(),
    otp: otp,
  };
}

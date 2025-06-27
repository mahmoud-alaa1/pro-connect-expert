"use server";

import { z } from "zod";
import { signupSchema } from "@/schemas/authSchema";
import { Resend } from "resend";
import { generateOTP } from "@/lib/utils";
import { nanoid } from "nanoid";
import { createSupabaseServer } from "@/lib/supabase/supabaseServer";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function signupAction(data: z.infer<typeof signupSchema>) {
  const supabase = await createSupabaseServer();

  //  1. Generate OTP
  const otp = generateOTP();
  const expires_at = new Date(Date.now() + 60 * 60 * 1000); // 60 mins
  const token = nanoid();

  //  2. Send OTP via email
  const { error: emailError } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "test@resend.dev",
    subject: "تأكيد بريدك الإلكتروني",
    html: `
    <div dir="rtl" style="background: #f4f6fb; min-height: 100vh; padding: 32px 0; font-family: Tahoma, Arial, sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 480px; margin: 0 auto; background: #fff; border-radius: 16px; box-shadow: 0 4px 24px rgba(44, 62, 80, 0.08); overflow: hidden;">
        <tr>
          <td style="padding: 32px 32px 16px 32px; text-align: right;">
            <h1 style="margin: 0 0 12px 0; font-size: 1.5rem; color: #2b6cb0; font-weight: 700;">أهلاً بك</h1>
       
            <p style="margin: 0 0 8px 0; color: #444; font-size: 1rem;">أو يمكنك إدخال رمز التحقق التالي:</p>
            <div style="display: inline-block; background: #f0f4fa; color: #2b6cb0; font-size: 2rem; font-weight: bold; letter-spacing: 8px; padding: 12px 32px; border-radius: 8px; margin-bottom: 16px;">${otp}</div>
            <p style="margin: 16px 0 0 0; color: #888; font-size: 0.95rem;">  الكود ينتهي خلال 30 دقيقة.</p>
          </td>
        </tr>
      </table>
      <p style="text-align: center; color: #b0b0b0; font-size: 0.85rem; margin-top: 32px;">© ${new Date().getFullYear()} Pro Connect. جميع الحقوق محفوظة.</p>
    </div>
    `,
  });

  if (emailError) {
    console.error("فشل إرسال الإيميل:", emailError);
    throw new Error("فشل في إرسال الإيميل. حاول مرة أخرى.");
  }

  //  3. Store in pending_users
  const { error } = await supabase.from("pending_users").insert({
    ...data,
    otp,
    token,
    expires_at,
  });

  if (error) {
    throw new Error(error.message || "حدث خطأ أثناء حفظ المستخدم المعلق");
  }

  return {
    message: "تم إرسال رمز التفعيل إلى بريدك الإلكتروني",
    email: data.email,
    expires_at: expires_at.toISOString(),
    otp: otp,
  };
}

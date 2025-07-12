import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "البريد الإلكتروني مطلوب",
    })
    .min(1, {
      message: "البريد الإلكتروني لا يمكن أن يكون فارغاً",
    })
    .email({
      message: "البريد الإلكتروني غير صالح",
    }),

  password: z
    .string({
      required_error: "كلمة المرور مطلوبة",
    })
    .min(6, {
      message: "كلمة المرور يجب أن تكون على الأقل 6 أحرف",
    }),
  rememberMe: z.boolean().optional(),
});
export const signupSchema = z.object({
  full_name: z.string({ required_error: "الاسم مطلوب" }).min(1, {
    message: "الاسم لا يمكن أن يكون فارغاً",
  }),
  email: z
    .string({ required_error: "البريد الإلكتروني مطلوب" })
    .email("البريد الإلكتروني غير صالح"),
  password: z.string({ required_error: "كلمة المرور مطلوبة" }),
  user_type: z.enum(["client", "expert"], {
    required_error: "يجب اختيار نوع الحساب",
  }),
});

export const verifyOTPSchema = z.object({
  otp: z
    .string({
      required_error: "رمز التحقق مطلوب",
    })
    .length(6, {
      message: "رمز التحقق يجب أن يكون 6 أرقام",
    }),
});

export type verifyOTPSchema = z.infer<typeof verifyOTPSchema>;

export type signupSchema = z.infer<typeof signupSchema>;

export type loginSchema = z.infer<typeof loginSchema>;

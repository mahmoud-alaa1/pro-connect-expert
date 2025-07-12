import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .min(1, {
      message: "Email cannot be empty",
    })
    .email({
      message: "Invalid email address",
    }),

  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters long",
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
      required_error: "OTP is required",
    })
    .length(6, {
      message: "OTP must be exactly 6 digits",
    }),
});

export type verifyOTPSchema = z.infer<typeof verifyOTPSchema>;

export type signupSchema = z.infer<typeof signupSchema>;

export type loginSchema = z.infer<typeof loginSchema>;

import { z } from "zod";
import { getStaticValidationMessages } from "@/lib/utils";

// Function to create schemas with locale-specific messages
export function createAuthSchemas(locale: string = 'en') {
  const messages = getStaticValidationMessages(locale);

  const loginSchema = z.object({
    email: z
      .string({
        required_error: messages.auth.email_required,
      })
      .min(1, {
        message: messages.auth.email_empty,
      })
      .email({
        message: messages.auth.email_invalid,
      }),

    password: z
      .string({
        required_error: messages.auth.password_required,
      })
      .min(6, {
        message: messages.auth.password_min_length,
      }),
    rememberMe: z.boolean().optional(),
  });

  const signupSchema = z.object({
    full_name: z.string({ 
      required_error: messages.auth.full_name_required 
    }).min(1, {
      message: messages.auth.full_name_empty,
    }),
    email: z
      .string({ 
        required_error: messages.auth.email_required 
      })
      .email(messages.auth.email_invalid),
    password: z.string({ 
      required_error: messages.auth.password_required 
    }).min(6, {
      message: messages.auth.password_min_length,
    }),
    user_type: z.enum(["client", "expert"], {
      required_error: messages.auth.user_type_required,
    }),
  });

  const verifyOTPSchema = z.object({
    otp: z
      .string({
        required_error: messages.auth.otp_required,
      })
      .length(6, {
        message: messages.auth.otp_length,
      }),
  });

  return {
    loginSchema,
    signupSchema,
    verifyOTPSchema
  };
}

// Default English schemas for backward compatibility
export const { loginSchema, signupSchema, verifyOTPSchema } = createAuthSchemas('en');

export type verifyOTPSchema = z.infer<typeof verifyOTPSchema>;
export type signupSchema = z.infer<typeof signupSchema>;
export type loginSchema = z.infer<typeof loginSchema>;
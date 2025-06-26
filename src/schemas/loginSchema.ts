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

  password: z.string({
    required_error: "Password is required",
  }),
  type: z.string(),
  rememberMe: z.boolean().optional(),
});

export type loginSchema = z.infer<typeof loginSchema>;

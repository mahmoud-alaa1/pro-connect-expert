import { z } from "zod";

export const bookingSchema = z.object({
  date: z.date().refine((date) => date > new Date(), {
    message: "Date must be in the future",
  }),
  time: z
    .string({
      required_error: "Time is required",
    })
    .min(1, "Time is required"),
  notes: z.string().optional(),
});

export type bookingSchema = z.infer<typeof bookingSchema>;

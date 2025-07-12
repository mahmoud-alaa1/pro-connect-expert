import { z } from "zod";

export const bookingSchema = z.object({
  date: z.date().refine((date) => date > new Date(), {
    message: "التاريخ يجب أن يكون في المستقبل",
  }),
  time: z
    .string({
      required_error: "الوقت مطلوب",
    })
    .min(1, "الوقت مطلوب"),
  notes: z.string().optional(),
});

export type bookingSchema = z.infer<typeof bookingSchema>;

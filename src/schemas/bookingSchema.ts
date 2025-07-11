import { z } from "zod";
import { getStaticValidationMessages } from "@/lib/utils";

export function createBookingSchema(locale: string = 'en') {
  const messages = getStaticValidationMessages(locale);

  return z.object({
    date: z.date().refine((date) => date > new Date(), {
      message: messages.booking.date_future,
    }),
    time: z
      .string({
        required_error: messages.booking.time_required,
      })
      .min(1, messages.booking.time_required),
    notes: z.string().optional(),
  });
}

// Default English schema for backward compatibility
export const bookingSchema = createBookingSchema('en');

export type bookingSchema = z.infer<typeof bookingSchema>;
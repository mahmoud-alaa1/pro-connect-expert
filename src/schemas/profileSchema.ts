import { z } from "zod";
import { currencyLiterals } from "@/types/tableTypes";
import { getStaticValidationMessages } from "@/lib/validationMessages";

export function createExpertProfileSchema(locale: string = 'en') {
  const messages = getStaticValidationMessages(locale);

  return z.object({
    title: z.string({
      required_error: messages.profile.title_required,
    }),
    specialty: z.string({
      required_error: messages.profile.specialty_required,
    }),
    bio: z
      .string({
        required_error: messages.profile.bio_required,
      })
      .max(500, {
        message: messages.profile.bio_max_length,
      })
      .min(10, {
        message: messages.profile.bio_min_length,
      }),
    languages: z.array(z.string().min(1), {
      required_error: messages.profile.languages_required,
    }),
    hourly_rate: z.coerce
      .number({
        required_error: messages.profile.hourly_rate_required,
      })
      .positive({
        message: messages.profile.hourly_rate_positive,
      }),
    currency: z.enum(currencyLiterals, {
      required_error: messages.profile.currency_required,
    }),
    availability: z.array(
      z.object({
        day: z.enum(
          [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          {
            required_error: messages.profile.day_required,
          }
        ),
        times: z.array(z.object({ from: z.string(), to: z.string() }), {
          required_error: messages.profile.time_slots_required,
        }),
      })
    ),
  });
}

// Default English schema for backward compatibility
export const expertProfileSchema = createExpertProfileSchema('en');

export type expertProfileSchema = z.infer<typeof expertProfileSchema>;
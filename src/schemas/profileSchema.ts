import { z } from "zod";
import { currencyLiterals } from "@/types/tableTypes";
export const expertProfileSchema = z.object({
  title: z.string({
    required_error: "Title is required",
  }),
  specialty: z.string({
    required_error: "Specialty is required",
  }),
  bio: z
    .string({
      required_error: "Bio is required",
    })
    .max(500, {
      message: "Bio must be at most 500 characters",
    })
    .min(10, {
      message: "Bio must be at least 10 characters",
    }),
  languages: z.array(z.string().min(1), {
    required_error: "At least one language is required",
  }),
  hourly_rate: z.coerce
    .number({
      required_error: "Hourly rate is required",
    })
    .positive(),
  currency: z.enum(currencyLiterals, {
    required_error: "Currency is required",
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
          required_error: "Day is required",
        }
      ),
      times: z.array(z.object({ from: z.string(), to: z.string() }), {
        required_error: "At least one time slot is required",
      }),
    })
  ),
});

export type expertProfileSchema = z.infer<typeof expertProfileSchema>;

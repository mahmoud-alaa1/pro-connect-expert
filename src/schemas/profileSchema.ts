import { z } from "zod";
import { currencyLiterals } from "@/types/tableTypes";

export const profileBasicInfoSchema = z.object({
  full_name: z
    .string({
      required_error: "الاسم مطلوب",
    })
    .max(20, {
      message: "الاسم يجب أن يكون 20 حرف كحد أقصى",
    })
    .min(1, {
      message: "الاسم لا يمكن أن يكون فارغاً",
    }),
});

export type profileBasicInfoSchema = z.infer<typeof profileBasicInfoSchema>;

export const expertProfileSchema = z.object({
  title: z.string({
    required_error: "Title is required",
  }),
  specialty: z.string({
    required_error: "Specialty is required",
  }),
  bio: z
    .string({
      required_error: "النبذة مطلوبة",
    })
    .max(500, {
      message: "النبذة يجب أن تكون 500 حرف كحد أقصى",
    })
    .min(10, {
      message: "النبذة يجب أن تكون 10 أحرف كحد أدنى",
    }),
  languages: z.array(z.string().min(1), {
    required_error: "مطلوب اختيار لغة واحدة على الأقل",
  }),
  hourly_rate: z.coerce
    .number({
      required_error: "معدل الساعة مطلوب",
    })
    .positive(),
  currency: z.enum(currencyLiterals, {
    required_error: "العملة مطلوبة",
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
        required_error: "مطلوب اختيار فترة زمنية واحدة على الأقل",
      }),
    })
  ),
});

export type expertProfileSchema = z.infer<typeof expertProfileSchema>;

import { z } from "zod";

export const searchProfessionalsSchema = z.object({
  minRating: z.string().optional(),
  maxHourlyRate: z.string().optional(),
  specialty: z.string().optional(),
  title: z.string().optional(),
});

export type searchProfessionalsSchema = z.infer<
  typeof searchProfessionalsSchema
>;

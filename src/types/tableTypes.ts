import { Database } from "@/lib/database.types";

export type TAvailability = Array<{
  day: string;
  times: Array<{ from: string; to: string }>;
}> | null;

export type TX = Database["public"]["Tables"]["professionals"]["Row"];

export type TE = Database["public"]["Tables"]["expert_availability"]["Row"];

export type TProfessional = TX & {
  expert_availability: TE[];
};

export type CurrencyType = Database["public"]["Enums"]["currency_type"];
export const currencyLiterals = [
  "SAR",
  "USD",
  "EUR",
  "AED",
] as const satisfies CurrencyType[];

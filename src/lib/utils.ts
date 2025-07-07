export const RTL_LOCALES = new Set(["ar", "he", "fa", "ur"]);

import { clsx, type ClassValue } from "clsx";
import { useLocale } from "next-intl";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
}

export function useIsRtl(): boolean {
  const locale = useLocale();
  return RTL_LOCALES.has(locale);
}


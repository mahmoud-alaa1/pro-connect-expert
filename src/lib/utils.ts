export const RTL_LOCALES = new Set(["ar", "he", "fa", "ur"]);

import { clsx, type ClassValue } from "clsx";
import { differenceInMinutes, parse } from "date-fns";
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

export function enable2Weeks(date: Date): boolean {
  const today = new Date();

  today.setHours(0, 0, 0, 0);
  const twoWeeksFromNow = new Date();
  twoWeeksFromNow.setDate(today.getDate() + 14);
  twoWeeksFromNow.setHours(23, 59, 59, 999);
  return date < today || date > twoWeeksFromNow;
}

export function calculateDuration(time: string) {
  {
    const [from, to] = time.split("-");
    const fromDate = parse(from, "HH:mm", new Date());
    const toDate = parse(to, "HH:mm", new Date());

    const totalMinutes = differenceInMinutes(toDate, fromDate);

    return totalMinutes;
  }
}

export function groupAvailability(availabilities?: IAvailability[] | null) {
  const map = new Map<
    IAvailability["day"],
    { day: IAvailability["day"]; times: { from: string; to: string }[] }
  >();

  availabilities?.forEach((slot) => {
    if (!map.has(slot.day)) {
      map.set(slot.day, { day: slot.day, times: [] });
    }
    map.get(slot.day)!.times.push({ from: slot.from_time, to: slot.to_time });
  });

  return Array.from(map.values());
}

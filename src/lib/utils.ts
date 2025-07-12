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
export function enable1Week(date: Date): boolean {
  const today = new Date();

  today.setHours(0, 0, 0, 0);
  const oneWeekFromNow = new Date();
  oneWeekFromNow.setDate(today.getDate() + 7);
  oneWeekFromNow.setHours(23, 59, 59, 999);
  return date < today || date > oneWeekFromNow;
}

export function calculateDuration(from: string, to: string) {
  {
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

export const getStatusColor = (status: string | null) => {
  switch (status) {
    case "confirmed":
      return "bg-green-50 text-green-700 border-green-200";
    case "pending":
      return "bg-yellow-50 text-yellow-700 border-yellow-200";
    case "completed":
      return "bg-blue-50 text-blue-700 border-blue-200";
    case "cancelled":
      return "bg-red-50 text-red-700 border-red-200";
    default:
      return "bg-gray-50 text-gray-700 border-gray-200";
  }
};

export const getPaymentStatusColor = (status: string | null) => {
  switch (status) {
    case "paid":
      return "bg-green-50 text-green-700 border-green-200";
    case "pending":
      return "bg-yellow-50 text-yellow-700 border-yellow-200";
    case "failed":
      return "bg-red-50 text-red-700 border-red-200";
    default:
      return "bg-gray-50 text-gray-700 border-gray-200";
  }
};

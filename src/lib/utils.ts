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


export const staticValidationMessages = {
  en: {
    auth: {
      email_required: "Email is required",
      email_empty: "Email cannot be empty",
      email_invalid: "Invalid email address",
      password_required: "Password is required",
      password_min_length: "Password must be at least 6 characters long",
      full_name_required: "Full name is required",
      full_name_empty: "Full name cannot be empty",
      user_type_required: "Account type must be selected",
      otp_required: "OTP is required",
      otp_length: "OTP must be exactly 6 digits",
    },
    profile: {
      title_required: "Title is required",
      specialty_required: "Specialty is required",
      bio_required: "Bio is required",
      bio_max_length: "Bio must be at most 500 characters",
      bio_min_length: "Bio must be at least 10 characters",
      languages_required: "At least one language is required",
      hourly_rate_required: "Hourly rate is required",
      hourly_rate_positive: "Hourly rate must be positive",
      currency_required: "Currency is required",
      day_required: "Day is required",
      time_slots_required: "At least one time slot is required",
    },
    booking: {
      date_future: "Date must be in the future",
      time_required: "Time is required",
    },
  },
  ar: {
    auth: {
      email_required: "البريد الإلكتروني مطلوب",
      email_empty: "البريد الإلكتروني لا يمكن أن يكون فارغاً",
      email_invalid: "البريد الإلكتروني غير صالح",
      password_required: "كلمة المرور مطلوبة",
      password_min_length: "كلمة المرور يجب أن تكون على الأقل 6 أحرف",
      full_name_required: "الاسم الكامل مطلوب",
      full_name_empty: "الاسم الكامل لا يمكن أن يكون فارغاً",
      user_type_required: "يجب اختيار نوع الحساب",
      otp_required: "رمز التحقق مطلوب",
      otp_length: "رمز التحقق يجب أن يكون 6 أرقام بالضبط",
    },
    profile: {
      title_required: "المسمى الوظيفي مطلوب",
      specialty_required: "التخصص مطلوب",
      bio_required: "النبذة التعريفية مطلوبة",
      bio_max_length: "النبذة التعريفية يجب أن تكون على الأكثر 500 حرف",
      bio_min_length: "النبذة التعريفية يجب أن تكون على الأقل 10 أحرف",
      languages_required: "مطلوب لغة واحدة على الأقل",
      hourly_rate_required: "السعر بالساعة مطلوب",
      hourly_rate_positive: "السعر بالساعة يجب أن يكون موجباً",
      currency_required: "العملة مطلوبة",
      day_required: "اليوم مطلوب",
      time_slots_required: "مطلوب فترة زمنية واحدة على الأقل",
    },
    booking: {
      date_future: "التاريخ يجب أن يكون في المستقبل",
      time_required: "الوقت مطلوب",
    },
  },
};

export function getStaticValidationMessages(locale: string = "en") {
  return (
    staticValidationMessages[locale as keyof typeof staticValidationMessages] ||
    staticValidationMessages.en
  );
}

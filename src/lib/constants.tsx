import { User } from "lucide-react";

export const getRadioRoles = (t: (key: string) => string) => [
  {
    label: t("fields.client"),
    value: "client",
    icon: <User className="h-4 w-4 text-blue-700" />,
  },
  {
    label: t("fields.expert"),
    value: "expert",
    icon: <User className="h-4 w-4 text-green-700" />,
  },
];

export const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const availableLanguages = [
  "English",
  "Arabic",
  "French",
  "Spanish",
  "German",
  "Chinese",
];

export const weekdays = [
  { value: "Monday", label: "Monday", short: "Mon" },
  { value: "Tuesday", label: "Tuesday", short: "Tue" },
  { value: "Wednesday", label: "Wednesday", short: "Wed" },
  { value: "Thursday", label: "Thursday", short: "Thu" },
  { value: "Friday", label: "Friday", short: "Fri" },
  { value: "Saturday", label: "Saturday", short: "Sat" },
  { value: "Sunday", label: "Sunday", short: "Sun" },
];

export const CURRENCIES = [
  { value: "USD", label: "USD" },
  { value: "EUR", label: "EUR" },
  { value: "EGP", label: "EGP" },
  { value: "SAR", label: "SAR" },
];

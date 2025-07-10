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

export const WEEKDAYS = [
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

export const getTranslatedLanguages = (t: (key: string) => string) => [
  { value: "English", label: t("Constants.languages.English") },
  { value: "Arabic", label: t("Constants.languages.Arabic") },
  { value: "French", label: t("Constants.languages.French") },
  { value: "Spanish", label: t("Constants.languages.Spanish") },
  { value: "German", label: t("Constants.languages.German") },
  { value: "Chinese", label: t("Constants.languages.Chinese") },
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

export const getTranslatedWeekdays = (t: (key: string) => string) => [
  {
    value: "Monday",
    label: t("Constants.weekdays.Monday"),
    short: t("Constants.weekdays_short.Monday"),
  },
  {
    value: "Tuesday",
    label: t("Constants.weekdays.Tuesday"),
    short: t("Constants.weekdays_short.Tuesday"),
  },
  {
    value: "Wednesday",
    label: t("Constants.weekdays.Wednesday"),
    short: t("Constants.weekdays_short.Wednesday"),
  },
  {
    value: "Thursday",
    label: t("Constants.weekdays.Thursday"),
    short: t("Constants.weekdays_short.Thursday"),
  },
  {
    value: "Friday",
    label: t("Constants.weekdays.Friday"),
    short: t("Constants.weekdays_short.Friday"),
  },
  {
    value: "Saturday",
    label: t("Constants.weekdays.Saturday"),
    short: t("Constants.weekdays_short.Saturday"),
  },
  {
    value: "Sunday",
    label: t("Constants.weekdays.Sunday"),
    short: t("Constants.weekdays_short.Sunday"),
  },
];

export const CURRENCIES = [
  { value: "USD", label: "USD" },
  { value: "EUR", label: "EUR" },
  { value: "EGP", label: "EGP" },
  { value: "SAR", label: "SAR" },
];

export const getTranslatedCurrencies = (t: (key: string) => string) => [
  { value: "USD", label: t("Constants.currencies.USD") },
  { value: "EUR", label: t("Constants.currencies.EUR") },
  { value: "EGP", label: t("Constants.currencies.EGP") },
  { value: "SAR", label: t("Constants.currencies.SAR") },
];

export const PROFESSIONALS_PER_PAGE = 6;

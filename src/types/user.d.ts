type CurrencyType = Database["public"]["Enums"]["currency_type"];
const currencyLiterals = [
  "SAR",
  "USD",
  "EUR",
  "AED",
] as const satisfies CurrencyType[];
interface IUser {
  avatar_url?: null | string;
  created_at: string;
  email: string;
  full_name: string;
  id: string;
  updated_at: string;
  user_type: "expert" | "client";
}

interface IExperience {
  title: string;
  company: string;
  duration: string;
  description: string;
}

interface IEducation {
  degree: string;
  institution: string;
  year: string;
}

interface IAvailability {
  created_at: string;
  day:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  expert_id: string;
  from_time: string;
  id: number;
  to_time: string;
}

interface IProfessional {
  id: string;
  user_id: string;
  name: string | null;
  avatar: string | null;
  title: string;
  specialty: string;
  bio: string;
  rating: number;
  reviewCount?: number;
  hourly_rate: number;
  currency: CurrencyType;
  verified: boolean;
  total_sessions: number | null;
  total_reviews: number;
  availability_status: boolean;
  expert_availability: IAvailability[] | null;
  years_experience: number | null;
  languages: string[];
  portfolio_urls: string[];
  certificates_urls: string[];
  certifications: string[] | null;
  experience: IExperience[] | null;
  education: IEducation[] | null;
  created_at: string;
}

interface IBookingSlot {
  date: string;
  time: string;
  available: boolean;
}

interface ITransaction {
  id: string;
  session_id: string;
  amount: number;
  currency: string;
  date: string;
  status: "completed" | "pending" | "failed";
  professional_name: string;
}


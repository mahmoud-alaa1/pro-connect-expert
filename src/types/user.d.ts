interface IUser {
  avatar_url?: null | string;
  created_at: string;
  email: string;
  full_name: string;
  id: string;
  updated_at: string;
  user_type: "expert" | "client";
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
  currency: string;
  verified: boolean;
  total_sessions: number | null;
  total_reviews: number;
  availability_status: boolean;
  availability:
    | {
        day: string;
        times: { from: string; to: string }[];
      }[]
    | null;
  years_experience: number | null;
  languages: string[];
  portfolio_urls: string[];
  certificates_urls: string[];
  certifications: string[] | null;
  experience:
    | {
        title: string;
        company: string;
        duration: string;
        description: string;
      }[]
    | null;
  education:
    | {
        degree: string;
        institution: string;
        year: string;
      }[]
    | null;
  created_at: string;
}

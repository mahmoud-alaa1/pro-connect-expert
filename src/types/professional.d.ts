
interface IProfessionalPreview {
  id: string;
  name: string | null;
  title: string;
  specialty: string;
  bio: string;
  total_reviews: number;
  total_sessions: number | null;
  availability_status: boolean;
  hourly_rate: number;
  languages: string[];
  currency: string;
  avatar: string | null;
  verified: boolean;
  rating: number;
  created_at: string;
}

interface IProfessionalFilters {
  specialty: string;
  minRating: string;
  maxRate: string;
  languages: string[];
  availability: string;
}
interface IProfessionalSearchParams {
  q?: string;
  specialty?: string;
  minRating?: string;
  maxRate?: string;
  languages?: string[];
  availability?: string;
}

interface IProfessionalSearchFilters {
  name?: string;
  minRating?: number;
  maxHourlyRate?: number;
  specialty?: string;
  availability?: boolean;
  title?: string;
}

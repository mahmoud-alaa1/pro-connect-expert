interface IPaginatedResponse<T> {
  data: T[];
  meta: {
    total: number;
    totalPages: number;
    page: number;
  };
}

interface AvailabilitySlot {
  id: string;
  from: string;
  to: string;
  isBooked: boolean;
}

type DayOfWeek =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";

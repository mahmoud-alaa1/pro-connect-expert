import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export interface AvailabilitySlot {
  id: string;
  from: string;
  to: string;
  isBooked: boolean;
}

export interface DayAvailability {
  day: string;
  times: AvailabilitySlot[];
}

export function useExpertAvailabilityWithDate({
  expertId: expertIdPassed,
  date,
}: {
  expertId?: string;
  date?: Date;
}) {
  const { id } = useParams();

  const expertId = expertIdPassed ?? (id as string);

  const day = date?.toISOString().split("T")[0];

  return useQuery<DayAvailability[]>({
    queryKey: ["availability", expertId, day],
    queryFn: async () => {
      const res = await fetch(
        `/api/professionals/${expertId}/availability-with-date?date=${day}`
      );
      if (!res.ok) throw new Error("Failed to fetch availability");
      return await res.json();
    },
    enabled: !!expertId && !!date,
  });
}

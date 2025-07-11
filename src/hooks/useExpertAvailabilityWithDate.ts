import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useHookTranslations } from "./useHookTranslations";

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
  const t = useHookTranslations();

  return useQuery<DayAvailability[]>({
    queryKey: ["availability", expertId, day],
    queryFn: async () => {
      const res = await fetch(
        `/api/professionals/${expertId}/availability-with-date?date=${day}`
      );
      if (!res.ok) throw new Error(t.availability.fetch_error);
      return await res.json();
    },
    enabled: !!expertId && !!date,
  });
}

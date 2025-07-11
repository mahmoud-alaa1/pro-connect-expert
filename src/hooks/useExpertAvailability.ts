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

export function useExpertAvailability(expertIdPassed?: string) {
  const { id } = useParams();

  const expertId = expertIdPassed || (id as string);


  return useQuery<DayAvailability[]>({
    queryKey: ["availability", expertId],
    queryFn: async () => {
      const res = await fetch(`/api/professionals/${expertId}/availability`);
      if (!res.ok) throw new Error("Failed to fetch availability");
      return res.json();
    },
  });
}

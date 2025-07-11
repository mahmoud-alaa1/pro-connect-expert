// hooks/useBookSession.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

interface BookSessionPayload {
  expert_id: string;
  client_id: string;
  date: string;
  time_id: string;
  notes?: string;
}

export function useBookSession() {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: BookSessionPayload) => {
      const res = await fetch("/api/sessions/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to book session");
      }

      return data.data;
    },
    onError: (error: Error) => {
      toast.error(`Booking failed: ${error.message}`);
      console.error("Booking error:", error);
    },
    onSuccess: (data, variables) => {
      toast.success("Session booked successfully!");

      queryclient.setQueryData<
        {
          day: string;
          times: { id: string; from: string; to: string; isBooked: boolean }[];
        }[]
      >(
        ["availability", variables.expert_id, variables.date.split("T")[0]],
        (oldData) => {
          if (!oldData) return oldData;

          return oldData.map((dayObj) => {
            if (dayObj.times.some((time) => time.id === variables.time_id)) {
              return {
                ...dayObj,
                times: dayObj.times.map((time) =>
                  time.id === variables.time_id
                    ? { ...time, isBooked: true }
                    : time
                ),
              };
            }
            return dayObj;
          });
        }
      );
    },
  });
}

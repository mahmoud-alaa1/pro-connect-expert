// hooks/useBookSession.ts
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

interface BookSessionPayload {
  expert_id: string;
  client_id: string;
  date: string;
  time: string; // Format: "HH:mm-HH:mm"
  notes?: string;
}

export function useBookSession() {
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
      console.log(data);

      return data.data;
    },
    onError: (error: Error) => {
      console.error("Booking session failed:", error);
      toast.error(`Booking failed: ${error.message}`);
    },
    onSuccess: (data) => {
      console.log("Session booked successfully:", data);
      toast.success("Session booked successfully!");
    },
  });
}

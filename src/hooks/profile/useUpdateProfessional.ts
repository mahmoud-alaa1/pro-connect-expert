// hooks/profile/useUpdateProfessional.ts
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

interface ProfessionalUpdateData {
  title?: string;
  specialty?: string;
  bio?: string;
  languages?: string[];
  hourly_rate?: number;
  currency?: string;
  availability?: Array<{
    day: string;
    times: Array<{ from: string; to: string }>;
  }>;
}

export function useUpdateProfessional() {
  return useMutation({
    mutationFn: async (updates: ProfessionalUpdateData) => {
      const res = await fetch("/api/professionals/profile", {
        method: "PATCH",
        body: JSON.stringify(updates),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to update profile");
      }
      return res.json();
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success("Profile updated successfully!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}

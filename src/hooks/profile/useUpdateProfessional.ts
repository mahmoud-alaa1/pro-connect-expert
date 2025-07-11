import { updateProfessionalProfile } from "@/services/client/profile";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useUpdateProfessional() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateProfessionalProfile,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["professional-profile"],
      });
      toast.success("Profile updated successfully!");
    },
    onError: (error) => {
      console.error("Update failed:", error);
      toast.error(error.message);
    },
  });
}

import { updateProfessionalProfile } from "@/services/client/profile";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useHookTranslations } from "../useHookTranslations";

export function useUpdateProfessional() {
  const queryClient = useQueryClient();
  const t = useHookTranslations();

  return useMutation({
    mutationFn: updateProfessionalProfile,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["professional-profile"],
      });
      toast.success(t.profile.update_success);
    },
    onError: (error) => {
      console.error("Update failed:", error);
      toast.error(error.message);
    },
  });
}

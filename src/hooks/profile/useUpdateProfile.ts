import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfile } from "@/services/client/profile";
import { toast } from "sonner";
import { useAuth } from "@/store/useAuthStore";
import { profileBasicInfoSchema } from "@/components/forms/profile/name/ProfileBasicInfoForm";

export function useUpdateProfile() {
  const user = useAuth((s) => s.user!);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: profileBasicInfoSchema) =>
      updateProfile({
        ...data,
        id: user.id,
      }),
    onSuccess: (data) => {
      console.log("Profile updated successfully:", data);
      queryClient.invalidateQueries({
        queryKey: ["profile"],
      });
      toast.success("تم تحديث البيانات بنجاح");
    },
    onError: (error) => {
      console.error("Error updating profile:", error);
      toast.error(error.message);
    },
  });
}

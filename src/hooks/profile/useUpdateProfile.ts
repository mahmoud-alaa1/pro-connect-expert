import { useMutation } from "@tanstack/react-query";
import { updateProfile } from "@/services/client/profile";
import { toast } from "sonner";
import { useAuth } from "@/store/useAuthStore";
import { profileBasicInfoSchema } from "@/components/forms/profile/name/ProfileBasicInfoForm";
import { useHookTranslations } from "../useHookTranslations";

export function useUpdateProfile() {
  const user = useAuth();
  const t = useHookTranslations();

  return useMutation({
    mutationFn: (data: profileBasicInfoSchema) =>
      updateProfile({
        ...data,
        id: user.user?.id || "",
      }),
    onSuccess: (data) => {
      user.updateUser({
        ...user.user,
        ...data,
      });
      toast.success(t.profile.update_success);
    },
    onError: (error) => {
      console.error("Error updating profile:", error);
      toast.error(error.message);
    },
  });
}

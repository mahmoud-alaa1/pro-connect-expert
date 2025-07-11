import { useMutation } from "@tanstack/react-query";
import { updateProfile } from "@/services/client/profile";
import { toast } from "sonner";
import { useAuth } from "@/store/useAuthStore";
import { profileBasicInfoSchema } from "@/components/forms/profile/name/ProfileBasicInfoForm";

export function useUpdateProfile() {
  const user = useAuth();
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
      toast.success("تم تحديث البيانات بنجاح");
    },
    onError: (error) => {
      console.error("Error updating profile:", error);
      toast.error(error.message);
    },
  });
}

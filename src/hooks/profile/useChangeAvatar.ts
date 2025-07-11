// hooks/useChangeAvatar.ts
import { useMutation } from "@tanstack/react-query";
import { changeAvatar } from "@/services/client/profile";
import { toast } from "sonner";
import { useAuth } from "@/store/useAuthStore";

export function useChangeAvatar() {
  const updateUser = useAuth((s) => s.updateUser);
  const user = useAuth((s) => s.user!);
  return useMutation({
    mutationFn: ({ file, userId }: { file: File; userId: string }) =>
      changeAvatar(file, userId),
    onError: (error: Error) => {
      console.error("Error changing avatar:", error.message);
      toast.error(`Failed to change avatar: ${error.message}`);
    },
    onSuccess: (data) => {
      updateUser({ ...user, avatar_url: data.avatar_url });
      toast.success("Avatar changed successfully!");
    },
  });
}

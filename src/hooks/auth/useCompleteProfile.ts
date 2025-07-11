import { useRouter } from "@/i18n/navigation";
import { createUser, setToken } from "@/services/client/login";
import { useAuth } from "@/store/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useCompleteProfile() {
  const router = useRouter();
  const login = useAuth((s) => s.login);
  return useMutation({
    mutationFn: async (user_type: string) => {
      return createUser(user_type);
    },
    onSuccess: (data) => {
      toast.success("تم إكمال الملف الشخصي بنجاح!");
      setToken(data.token);
      login(data);
      router.replace("/");
    },
    onError: (error) => {
      console.error("Error completing profile:", error);
      toast.error("فشل إكمال الملف الشخصي: " + error.message);
    },
  });
}

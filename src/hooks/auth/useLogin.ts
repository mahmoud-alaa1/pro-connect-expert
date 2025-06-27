import { useRouter } from "@/i18n/navigation";
import { loginService } from "@/services/client/login";
import { useAuth } from "@/store/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useLogin() {
  const login = useAuth((s) => s.login);
  const router = useRouter();
  return useMutation({
    mutationFn: loginService,
    onSuccess: (data) => {
      console.log(data);
      login(data);
      toast.success("تم تسجيل الدخول بنجاح!");
      router.push("/");
    },
    onError: (error) => {
      console.error("Login failed:", error);
      toast.error("فشل تسجيل الدخول: " + error.message);
    },
  });
}

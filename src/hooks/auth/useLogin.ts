import { loginService } from "@/services/client/login";
import { useAuth } from "@/store/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useLogin() {
  const login = useAuth((s) => s.login);

  return useMutation({
    mutationFn: loginService,
    onSuccess: (data) => {
      console.log(data);
      login(data);
    },
    onError: (error) => {
      console.error("Login failed:", error);
      toast.error("فشل تسجيل الدخول: " + error.message);
    },
  });
}

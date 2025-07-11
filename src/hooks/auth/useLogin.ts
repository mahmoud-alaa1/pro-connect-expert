import { useRouter } from "@/i18n/navigation";
import { loginService } from "@/services/client/login";
import { useAuth } from "@/store/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useHookTranslations } from "../useHookTranslations";

export function useLogin() {
  const login = useAuth((s) => s.login);
  const router = useRouter();
  const t = useHookTranslations();

  return useMutation({
    mutationFn: loginService,
    onSuccess: (data) => {
      login(data);
      toast.success(t.auth.login_success);
      router.push("/");
    },
    onError: (error) => {
      console.error("Login failed:", error);
      toast.error(`${t.auth.login_error}: ${error.message}`);
    },
  });
}

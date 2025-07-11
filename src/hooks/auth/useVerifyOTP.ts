import { verifyOtpAction } from "@/app/actions/verifyOtp";
import { useRouter } from "@/i18n/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useHookTranslations } from "../useHookTranslations";

export function useVerifyOTP() {
  const router = useRouter();
  const t = useHookTranslations();

  return useMutation({
    mutationFn: verifyOtpAction,
    onSuccess: (data) => {
      toast.success(t.auth.verify_otp_success);
      router.push("/login");
    },
    onError: (error) => {
      console.error("Error verifying OTP:", error);
      toast.error(error.message || t.auth.verify_otp_error);
    },
  });
}

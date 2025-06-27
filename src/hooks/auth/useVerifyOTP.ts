import { verifyOtpAction } from "@/app/actions/verifyOtp";
import { useRouter } from "@/i18n/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useVerifyOTP() {
  const router = useRouter();
  return useMutation({
    mutationFn: verifyOtpAction,
    onSuccess: (data) => {
      console.log(data);
      toast.success("تم التحقق من الكود بنجاح");
      router.push("/login");
    },
    onError: (error) => {
      console.error("Error verifying OTP:", error);
      toast.error(error.message || "فشل في التحقق من الكود");
    },
  });
}

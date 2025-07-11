"use client";

import { signupAction } from "@/app/actions/signup";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function useSignup() {
  const router = useRouter();
  return useMutation({
    mutationFn: signupAction,
    onSuccess: (data) => {

      toast.success("برجاء تأكيد بريدك الإلكتروني");
      router.push("/verify-otp");
    },
    onError: (error) => {
      console.error("Signup failed:", error);
      toast.error("فشل إنشاء الحساب: " + error.message);
    },
  });
}

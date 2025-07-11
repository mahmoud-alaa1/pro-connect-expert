"use client";

import { signupAction } from "@/app/actions/signup";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useHookTranslations } from "../useHookTranslations";

export function useSignup() {
  const router = useRouter();
  const t = useHookTranslations();

  return useMutation({
    mutationFn: signupAction,
    onSuccess: (data) => {
      toast.success(t.auth.signup_success);
      router.push("/verify-otp");
    },
    onError: (error) => {
      console.error("Signup failed:", error);
      toast.error(`${t.auth.signup_error}: ${error.message}`);
    },
  });
}

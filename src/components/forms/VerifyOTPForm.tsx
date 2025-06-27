"use client";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { verifyOTPSchema } from "@/schemas/authSchema";
import Spinner from "../Spinner";
import { useSearchParams } from "next/navigation";
import FormOTPInput from "../form-fields/FormOTPInput";
import { useVerifyOTP } from "@/hooks/auth/useVerifyOTP";

export default function VerifyOTPForm() {
  const { isPending, mutate } = useVerifyOTP();

  const searchParams = useSearchParams();

  const form = useForm<verifyOTPSchema>({
    resolver: zodResolver(verifyOTPSchema),
  });
  function onSubmit(values: verifyOTPSchema) {
    console.log(values);
    const email = searchParams.get("email");
    if (!email) {
      console.error("Email is required for OTP verification");
      return;
    }
    mutate({ email, otp: values.otp });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormOTPInput<verifyOTPSchema> control={form.control} name="otp" />

        <Button
          disabled={isPending}
          type="submit"
          className="w-full text-white bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 cursor-pointer transition-colors duration-300 font-semibold shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:hover:from-gray-400 disabled:hover:to-gray-400"
        >
          {isPending ? <Spinner /> : "اكد الكود"}
        </Button>
      </form>
    </Form>
  );
}

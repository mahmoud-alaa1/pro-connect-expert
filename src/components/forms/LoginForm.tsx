"use client";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { loginSchema } from "@/schemas/authSchema";
import FormInput from "../form-fields/FormInput";
import { Mail } from "lucide-react";
import FormPassword from "../form-fields/FormPassword";
import FormCheckbox from "../form-fields/FormCheckbox";
import { Link } from "@/i18n/navigation";
import { useLogin } from "@/hooks/auth/useLogin";
import Spinner from "../Spinner";

export default function LoginForm() {
  const { mutate, isPending } = useLogin();
  const form = useForm<loginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "test@test.com",
      password: "123456",
      rememberMe: true,
    },
  });
  function onSubmit(values: loginSchema) {
    mutate({
      email: values.email,
      password: values.password,
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormInput<loginSchema>
          control={form.control}
          name="email"
          placeholder={`example@example.com`}
          Icon={<Mail className="h-4 w-4" />}
          label={`البريد الإلكتروني`}
          autoComplete="email"
          dir="ltr"
        />
        <FormPassword<loginSchema>
          control={form.control}
          name="password"
          placeholder={`ادخل كلمة المرور`}
          label="كلمة المرور"
          dir="ltr"
        />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <FormCheckbox<loginSchema>
            label="تذكر"
            control={form.control}
            name="rememberMe"
          />
          <Button type="button" variant="link">
            <Link href={`/forgot-password`}>هل نسيت كلمة المرور؟</Link>
          </Button>
        </div>
        <Button
          disabled={isPending}
          type="submit"
          className="w-full text-white bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 cursor-pointer transition-colors duration-300 font-semibold shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:hover:from-gray-400 disabled:hover:to-gray-400"
        >
          {isPending ? <Spinner /> : "تسجيل الدخول"}
        </Button>
      </form>
    </Form>
  );
}

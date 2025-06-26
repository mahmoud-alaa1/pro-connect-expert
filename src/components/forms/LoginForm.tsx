"use client";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { loginSchema } from "@/schemas/loginSchema";
import FormInput from "../form-fields/FormInput";
import { Mail, User } from "lucide-react";
import FormPassword from "../form-fields/FormPassword";
import FormRadioGroup from "../form-fields/FormRadioGroup";
import FormCheckbox from "../form-fields/FormCheckbox";
import { Link } from "@/i18n/navigation";

export default function LoginForm() {
  const form = useForm<loginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      type: "client",
      rememberMe: true,
    },
  });
  function onSubmit(values: loginSchema) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
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
          dir="ltr"
          autoComplete="email"
        />
        <FormPassword<loginSchema>
          control={form.control}
          name="password"
          placeholder={`ادخل كلمة المرور`}
          label="كلمة المرور"
        />
        <FormRadioGroup<loginSchema>
          control={form.control}
          name="type"
          options={[
            {
              label: "عميل",
              value: "client",
              icon: <User className="h-4 w-4 text-blue-700" />,
            },
            {
              label: "خبير",
              value: "expert",
              icon: <User className="h-4 w-4 text-green-700" />,
            },
          ]}
          direction="horizontal"
        />
        <div className="flex justify-between flex-wrap gap-4">
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
          type="submit"
          className="w-full text-white bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 cursor-pointer transition-colors duration-300 font-semibold shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:hover:from-gray-400 disabled:hover:to-gray-400"
        >
          تسجيل الدخول
        </Button>
      </form>
    </Form>
  );
}

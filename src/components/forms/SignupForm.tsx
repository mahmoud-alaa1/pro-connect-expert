"use client";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { signupSchema } from "@/schemas/authSchema";
import FormInput from "../form-fields/FormInput";
import { Mail } from "lucide-react";
import FormPassword from "../form-fields/FormPassword";
import Spinner from "../Spinner";
import FormRadioGroup from "../form-fields/FormRadioGroup";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getRadioRoles } from "@/lib/constants";
import { useSignup } from "@/hooks/auth/useSignup";
import { useTranslations } from "next-intl";

export default function SignupForm() {
  const t = useTranslations("Signup.form");
  const tRoot = useTranslations("Signup");
  const { mutate, isPending } = useSignup();

  const searchParams = useSearchParams();

  const form = useForm<signupSchema>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      user_type: "client",
      full_name: "",
    },
  });
  function onSubmit(values: signupSchema) {
    console.log(values);
    mutate(values);
  }

  useEffect(() => {
    const type = searchParams.get("type");
    const role = type === "expert" ? "expert" : "client";

    form.setValue("user_type", role);
  }, [searchParams, form]);

  const radioOptions = getRadioRoles(t);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormInput<signupSchema>
          control={form.control}
          name="full_name"
          placeholder={t("fields.full_name_placeholder")}
          label={t("fields.full_name")}
          autoComplete="name"
        />
        <FormInput<signupSchema>
          control={form.control}
          name="email"
          placeholder={t("fields.email_placeholder")}
          Icon={<Mail className="h-4 w-4" />}
          label={t("fields.email")}
          autoComplete="email"
          type="email"
          dir="ltr"
        />
        <FormPassword<signupSchema>
          control={form.control}
          name="password"
          placeholder={t("fields.password_placeholder")}
          label={t("fields.password")}
          dir="ltr"
        />
        <div className="w-fit mx-auto">
          <FormRadioGroup<signupSchema>
            control={form.control}
            name="user_type"
            options={radioOptions}
            direction="horizontal"
          />
        </div>
        <Button
          disabled={isPending}
          type="submit"
          className="w-full text-white bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 cursor-pointer transition-colors duration-300 font-semibold shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:hover:from-gray-400 disabled:hover:to-gray-400"
        >
          {isPending ? <Spinner /> : t("submit")}
        </Button>
      </form>
    </Form>
  );
}

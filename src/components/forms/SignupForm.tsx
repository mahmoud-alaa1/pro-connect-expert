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
import { RadioRoles } from "@/lib/constants";
import FormTextArea from "../form-fields/FormTextArea";
import { useSignup } from "@/hooks/auth/useSignup";

export default function SignupForm() {
  const { isPending, mutate } = useSignup();

  const searchParams = useSearchParams();

  const form = useForm<signupSchema>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      title: "",
      speciality: "",
      user_type: "client",
      bio: "",
      hourly_rate: 0,
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

    if (role === "client") {
      form.resetField("title");
      form.resetField("speciality");
      form.resetField("bio");
      form.resetField("hourly_rate");
    }
  }, [searchParams, form]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormInput<signupSchema>
          control={form.control}
          name="full_name"
          placeholder="ادخل اسمك"
          label="الاسم الكامل"
          autoComplete="name"
        />
        <FormInput<signupSchema>
          control={form.control}
          name="email"
          placeholder={`example@example.com`}
          Icon={<Mail className="h-4 w-4" />}
          label={`البريد الإلكتروني`}
          dir="ltr"
          autoComplete="email"
          type="email"
        />
        <FormPassword<signupSchema>
          control={form.control}
          name="password"
          placeholder={`ادخل كلمة المرور`}
          label="كلمة المرور"
        />
        <div className="w-fit mx-auto">
          <FormRadioGroup<signupSchema>
            control={form.control}
            name="user_type"
            options={RadioRoles}
            direction="horizontal"
          />
        </div>
        {form.watch("user_type") === "expert" && (
          <>
            <FormInput<signupSchema>
              control={form.control}
              name="title"
              placeholder="مثال: مطور ويب"
              label="المسمى الوظيفي"
            />
            <FormInput<signupSchema>
              control={form.control}
              name="speciality"
              placeholder="مثال: مطور برمجيات, مصمم جرافيك ..."
              label="التخصص"
            />
            <FormTextArea<signupSchema>
              control={form.control}
              name="bio"
              placeholder="اكتب نبذة قصيرة عنك"
              label="نبذة شخصية"
            />
            <FormInput<signupSchema>
              control={form.control}
              name="hourly_rate"
              placeholder="ريال سعودي"
              label="السعر بالساعة"
            />
          </>
        )}

        <Button
          disabled={isPending}
          type="submit"
          className="w-full text-white bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 cursor-pointer transition-colors duration-300 font-semibold shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:hover:from-gray-400 disabled:hover:to-gray-400"
        >
          {isPending ? <Spinner /> : "إنشاء حساب"}
        </Button>
      </form>
    </Form>
  );
}

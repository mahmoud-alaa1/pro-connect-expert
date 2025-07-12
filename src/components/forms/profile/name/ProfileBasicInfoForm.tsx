"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormInput from "@/components/form-fields/FormInput";
import { useTranslations } from "next-intl";



import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useUpdateProfile } from "@/hooks/profile/useUpdateProfile";
import { useAuth } from "@/store/useAuthStore";
import { useEffect } from "react";

export default function ProfileBasicInfoForm() {
  const t = useTranslations("Settings.basic_form");
  const { mutate, isPending } = useUpdateProfile();
  const { user } = useAuth();
  const form = useForm<profileBasicInfoSchema>({
    resolver: zodResolver(profileBasicInfoSchema),
    defaultValues: {
      full_name: user?.full_name || "",
    },
  });

  function onSubmit(values: profileBasicInfoSchema) {
    mutate(values);
  }

  useEffect(() => {
    if (user?.full_name) {
      form.setValue("full_name", user.full_name);
    }
  }, [user, form]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mb-6">
        <FormInput<profileBasicInfoSchema>
          name="full_name"
          control={form.control}
          placeholder={t("full_name.placeholder")}
          label={t("full_name.label")}
        />
        <Button disabled={isPending} type="submit">
          {t("save")}
        </Button>
      </form>
    </Form>
  );
}

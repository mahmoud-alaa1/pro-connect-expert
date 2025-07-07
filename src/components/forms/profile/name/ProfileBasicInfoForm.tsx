"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormInput from "@/components/form-fields/FormInput";

const profileBasicInfoSchema = z.object({
  full_name: z.string().min(2).max(50),
});

export type profileBasicInfoSchema = z.infer<typeof profileBasicInfoSchema>;

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useUpdateProfile } from "@/hooks/profile/useUpdateProfile";
import { useAuth } from "@/store/useAuthStore";
import { useEffect } from "react";
export default function ProfileBasicInfoForm() {
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormInput<profileBasicInfoSchema>
          name="full_name"
          control={form.control}
          placeholder={`ادخل اسمك`}
          label="الاسم الكامل"
        />
        <Button disabled={isPending} type="submit">
          حفظ
        </Button>
      </form>
    </Form>
  );
}

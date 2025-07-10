"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useUpdateProfessional } from "@/hooks/profile/useUpdateProfessional";
import FormInput from "@/components/form-fields/FormInput";
import FormTextArea from "@/components/form-fields/FormTextArea";
import FormSelect from "@/components/form-fields/FormSelectWithOptions";
import { useTranslations } from "next-intl";

import { LanguagesSelect } from "./LanguagesSelect";
import { ExpertAvailabilityInput } from "./ExpertAvailabilityInputRefactored";
import { ExpertProfileFormSkeleton } from "./ExpertProfileFormSkeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { getTranslatedCurrencies } from "@/lib/constants";
import useGetProfessionalProfile from "@/hooks/profile/useGetProfessionalProfile";
import { expertProfileSchema } from "@/schemas/profileSchema";
import { groupAvailability } from "@/lib/utils";

export default function ExpertBasicProfileForm() {
  const t = useTranslations("Settings.expert_form");
  const tLoading = useTranslations("Settings.loading");
  const tConstants = useTranslations();
  const currencies = getTranslatedCurrencies(tConstants);

  const form = useForm<expertProfileSchema>({
    resolver: zodResolver(expertProfileSchema),
    defaultValues: {
      title: "",
      specialty: "",
      bio: "",
      languages: [],
      hourly_rate: 0,
      currency: "SAR",
      availability: [],
    },
  });

  const {
    data,
    error,
    isPending: isGettingProfileData,
  } = useGetProfessionalProfile();

  const { mutate, isPending } = useUpdateProfessional();

  useEffect(() => {
    if (!data) {
      return;
    }
    console.log(data);

    const availability = groupAvailability(data.expert_availability || []);

    const resetData = {
      title: data.title || "",
      specialty: data.specialty || "",
      bio: data.bio || "",
      languages: data.languages || [],
      hourly_rate: data.hourly_rate || 0,
      currency: data.currency || "SAR",
      availability: availability || [],
    };
    form.reset(resetData);
  }, [data, form]);

  function onSubmit(values: expertProfileSchema) {
    mutate(values);
  }

  // Handle loading state
  if (isGettingProfileData) {
    return <ExpertProfileFormSkeleton />;
  }

  // Handle error state
  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>{tLoading("error_loading")}</AlertDescription>
      </Alert>
    );
  }

  console.log(form.watch());

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput<expertProfileSchema>
            control={form.control}
            name="title"
            placeholder={t("title.placeholder")}
            label={t("title.label")}
          />
          <FormInput<expertProfileSchema>
            control={form.control}
            name="specialty"
            placeholder={t("specialty.placeholder")}
            label={t("specialty.label")}
          />
        </div>

        <FormTextArea<expertProfileSchema>
          control={form.control}
          name="bio"
          placeholder={t("bio.placeholder")}
          label={t("bio.label")}
        />

        <div className="grid sm:grid-cols-2 gap-4">
          <FormInput<expertProfileSchema>
            control={form.control}
            name="hourly_rate"
            placeholder={t("hourly_rate.placeholder")}
            label={t("hourly_rate.label")}
            type="number"
          />
          <FormSelect<expertProfileSchema>
            control={form.control}
            name="currency"
            options={currencies}
            label={t("currency.label")}
            placeholder={t("currency.placeholder")}
          />
        </div>

        <FormField
          control={form.control}
          name="languages"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("languages.label")}</FormLabel>
              <LanguagesSelect
                selected={field.value || []}
                onChange={(langs) => field.onChange(langs)}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="availability"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("availability.label")}</FormLabel>
              <ExpertAvailabilityInput
                value={field.value || []}
                onChange={field.onChange}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={isPending} type="submit" className="w-full">
          {isPending ? t("buttons.saving") : t("buttons.save_changes")}
        </Button>
      </form>
    </Form>
  );
}

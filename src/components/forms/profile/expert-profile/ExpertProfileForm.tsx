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

import { LanguagesSelect } from "./LanguagesSelect";
import { ExpertAvailabilityInput } from "./ExpertAvailabilityInputRefactored";
import { ExpertProfileFormSkeleton } from "./ExpertProfileFormSkeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { CURRENCIES } from "@/lib/constants";
import useGetProfessionalProfile from "@/hooks/profile/useGetProfessionalProfile";
import { expertProfileSchema } from "@/schemas/profileSchema";

export default function ExpertBasicProfileForm() {
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

    const resetData = {
      title: data.title || "",
      specialty: data.specialty || "",
      bio: data.bio || "",
      languages: data.languages || [],
      hourly_rate: data.hourly_rate || 0,
      currency: data.currency || "SAR",
      availability: data.availability || [],
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
        <AlertDescription>
          Failed to load profile data. Please try again later.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput<expertProfileSchema>
            control={form.control}
            name="title"
            placeholder="e.g., Marketing Consultant"
            label="Title"
          />
          <FormInput<expertProfileSchema>
            control={form.control}
            name="specialty"
            placeholder="e.g., Digital Marketing"
            label="Specialty"
          />
        </div>

        <FormTextArea<expertProfileSchema>
          control={form.control}
          name="bio"
          placeholder="Write a short bio..."
          label="Bio"
        />

        <div className="grid grid-cols-2 gap-4">
          <FormInput<expertProfileSchema>
            control={form.control}
            name="hourly_rate"
            placeholder="e.g., 150"
            label="Hourly Rate"
            type="number"
          />
          <FormSelect<expertProfileSchema>
            control={form.control}
            name="currency"
            options={CURRENCIES}
            label="Currency"
            placeholder="Select a currency"
          />
        </div>

        <FormField
          control={form.control}
          name="languages"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Languages</FormLabel>
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
              <FormLabel>Availability</FormLabel>
              <ExpertAvailabilityInput
                value={field.value || []}
                onChange={field.onChange}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={isPending} type="submit" className="w-full">
          {isPending ? "Saving..." : "Save Changes"}
        </Button>
      </form>
    </Form>
  );
}

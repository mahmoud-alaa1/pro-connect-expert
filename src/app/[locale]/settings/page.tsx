"use client";

import ExpertBasicProfileForm from "@/components/forms/profile/expert-profile/ExpertProfileForm";
import ProfileBasicInfoForm from "@/components/forms/profile/name/ProfileBasicInfoForm";
import { ProfileImageForm } from "@/components/forms/profile/ProfileAvatar/ProfileImageForm";
import { useTranslations } from "next-intl";

export default function SettingsPage() {
  const t = useTranslations("Settings");

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          {t("page_title")}
        </h2>
      </div>

      {/* Profile Photo */}
      <ProfileImageForm />

      {/* Basic Information */}
      <div className="flex items-center gap-4 mb-4">
        <p className="text-muted-foreground whitespace-nowrap">
          {t("sections.basic_info")}
        </p>
        <div className="h-px bg-border flex-1" />
      </div>

      <ProfileBasicInfoForm />

      <div className="flex items-center gap-4 mb-4">
        <p className="text-muted-foreground whitespace-nowrap">
          {t("sections.expert_info")}
        </p>
        <div className="h-px bg-border flex-1" />
      </div>
      <ExpertBasicProfileForm />

      <div className="flex justify-end">
        <button
          disabled={false}
          className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 disabled:opacity-50 transition-colors flex items-center">
          {t("buttons.save_changes")}
        </button>
      </div>
    </div>
  );
}

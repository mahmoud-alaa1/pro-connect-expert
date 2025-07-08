"use client";

import { useTranslations } from "next-intl";

export default function SettingsHeader() {
  const t = useTranslations("Settings.layout");

  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900">{t("title")}</h1>
      <p className="text-gray-600 mt-2">{t("description")}</p>
    </div>
  );
}

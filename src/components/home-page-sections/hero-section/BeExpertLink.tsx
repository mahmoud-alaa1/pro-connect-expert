"use client";

import { Link } from "@/i18n/navigation";
import { useAuth } from "@/store/useAuthStore";
import { useTranslations } from "next-intl";

export default function BeExpertLink() {
  const t = useTranslations("HeroSection");
  const auth = useAuth((state) => state.user);
  return (
    !auth && (
      <Link
        href="/signup?type=expert"
        className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold border-2 border-blue-600 text-blue-600 hover:bg-primary-50 transition-all transform hover:scale-105 shadow-lg">
        {t("buttons.become_expert")}
      </Link>
    )
  );
}

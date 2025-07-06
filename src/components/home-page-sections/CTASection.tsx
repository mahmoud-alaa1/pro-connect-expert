"use client";
import { Link } from "@/i18n/navigation";
import { useAuth } from "@/store/useAuthStore";
import { useTranslations } from "next-intl";

export default function CTASection() {
  const t = useTranslations("CTASection");
  const user = useAuth((state) => state.user);
  return (
    !user && (
      <section className=" pb-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            {t("title")}
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            {t("description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all border-2 transform hover:scale-105 shadow-lg">
              {t("buttons.get_started_client")}
            </Link>
            <Link
              href="/signup?type=expert"
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold border-2 border-white  hover:text-primary-600 transition-all transform hover:scale-105">
              {t("buttons.join_as_expert")}
            </Link>
          </div>
        </div>
      </section>
    )
  );
}

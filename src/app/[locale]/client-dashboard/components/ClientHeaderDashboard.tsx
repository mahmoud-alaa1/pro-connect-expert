import { useTranslations } from "next-intl";

export default function ClientHeaderDashboard() {
  const t = useTranslations("ClientDashboard");
  
  return (
    <div className="mb-8 animate-slide-up ">
      <h1 className="text-4xl font-bold text-gray-900 mb-5">{t("title")}</h1>
      <p className="text-gray-600 text-lg">
        {t("description")}
      </p>
    </div>
  );
}
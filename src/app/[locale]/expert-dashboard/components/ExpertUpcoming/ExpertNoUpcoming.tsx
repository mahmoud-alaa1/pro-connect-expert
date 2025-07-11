import { Calendar } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ExpertNoUpcoming() {
  const t = useTranslations("ExpertDashboard.sessions.no_upcoming");
  
  return (
    <div className="text-center py-16">
      <div className="animate-bounce">
        <Calendar className="mx-auto h-16 w-16 text-blue-400 mb-6" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {t("title")}
      </h3>
      <p className="text-gray-600 mb-6">
        {t("description")}
      </p>
    </div>
  );
}
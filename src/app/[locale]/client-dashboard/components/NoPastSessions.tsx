import { Clock } from "lucide-react";
import { useTranslations } from "next-intl";

export default function NoPastSessions() {
  const t = useTranslations("ClientDashboard.empty_states.no_past");
  
  return (
    <div className="text-center py-16">
      <Clock className="mx-auto h-16 w-16 text-gray-400 mb-6" />
      <h3 className="text-xl font-bold text-gray-900 mb-3">{t("title")}</h3>
      <p className="text-gray-600">{t("description")}</p>
    </div>
  );
}
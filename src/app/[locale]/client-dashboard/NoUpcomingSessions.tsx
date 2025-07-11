import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { Calendar } from "lucide-react";
import { useTranslations } from "next-intl";

export default function NoUpcomingSessions() {
  const t = useTranslations("ClientDashboard.empty_states.no_upcoming");
  
  return (
    <div className="text-center py-16">
      <Calendar className="mx-auto h-16 w-16 text-gray-400 mb-6" />
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {t("title")}
      </h3>
      <p className="text-gray-600 mb-6">
        {t("description")}
      </p>
      <Button>
        <Link href="/professionals">{t("action")}</Link>
      </Button>
    </div>
  );
}
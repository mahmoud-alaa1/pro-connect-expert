import { MessageSquare } from "lucide-react";
import { useTranslations } from "next-intl";

export default function SessionFeedback() {
  const t = useTranslations("ClientDashboard.session_card");
  
  return (
    <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-100">
      <p className="text-sm text-green-800">
        <MessageSquare className="w-4 h-4 inline mr-2" />&nbsp;
        {t("no_feedback")}
      </p>
    </div>
  );
}
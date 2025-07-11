import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { useTranslations } from "next-intl";

export default function PastSessionsActions() {
  const t = useTranslations("ClientDashboard.session_card");

  return (
    <div className="flex gap-2">
      <Button variant="outline" size="sm" className="flex-1">
        <MessageSquare className="w-4 h-4 mr-2" />
        {t("leave_review")}
      </Button>
    </div>
  );
}

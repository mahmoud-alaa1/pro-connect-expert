import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";
import React from "react";
import { useTranslations } from "next-intl";

export default function UpcomingSessionsActions() {
  const t = useTranslations("ClientDashboard.session_card");
  
  return (
    <div className="flex gap-2">
      <Button size="sm" className="flex-1">
        <Video className="w-4 h-4 mr-2" />
        {t("join_session")}
      </Button>
      <Button variant="outline" size="sm" className="flex-1">
        {t("cancel")}
      </Button>
    </div>
  );
}
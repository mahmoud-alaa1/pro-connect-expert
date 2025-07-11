import { MessageSquare } from "lucide-react";
import { useTranslations } from "next-intl";

export default function SessionNotes({
  session,
}: {
  session: ISessionResponse;
}) {
  const t = useTranslations("ClientDashboard.session_card");
  
  return (
    <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
      <p className="text-sm text-start text-blue-800">
        <MessageSquare className="w-4 h-4 inline mr-2" />&nbsp;
        {session.notes || t("no_notes")}
      </p>
    </div>
  );
}
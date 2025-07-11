import { Clock, DollarSign, Video } from "lucide-react";
import { useTranslations } from "next-intl";

export default function SessionDetails({
  session,
}: {
  session: ISessionResponse;
}) {
  const t = useTranslations("ClientDashboard.session_card");
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
      <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
        <Clock className="w-4 h-4 text-blue-500" />
        <span className="font-medium">
          {session.expert_availability.duration} min
        </span>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
        <DollarSign className="w-4 h-4 text-green-500" />
        <span className="font-medium">
          $
          {(
            (session.professional.hourly_rate *
              session.expert_availability.duration) /
            60
          ).toFixed(2)}{" "}
          {session.professional.currency}
        </span>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
        <Video className="w-4 h-4 text-purple-500" />
        <span className="font-medium">{t("zoom_ready")}</span>
      </div>
    </div>
  );
}
import { Card, CardContent } from "@/components/ui/card";
import UpcomingSessionsActions from "./UpcomingSessionsActions";
import SessionNotes from "./SessionNotes";
import SessionFeedback from "./SessionFeedback";
import SessionDetails from "./SessionDetails";
import Image from "next/image";
import { useIsRtl } from "@/lib/utils";
import SessionStatus from "../session-status/SessionStatus";
import { useLocale } from "next-intl";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import PastSessionsActions from "./PastSessionsActions";

export default function SessionCard({
  session,
  type,
  userType = "client",
}: {
  session: ISessionResponse;
  type: "upcoming" | "past";
  userType: "expert" | "client";
}) {
  const isRtl = useIsRtl();
  const locale = useLocale();
  const avatar =
    userType === "expert"
      ? session.professional.profile.avatar_url
      : session.client.avatar_url;

  const name =
    userType === "expert"
      ? session.professional.profile.full_name
      : session.client.full_name;

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="animate-slide-up">
      <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
        <CardContent className="p-6 bg-gradient-to-br ">
          <div className="flex items-start flex-wrap gap-3 justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="relative size-14 sm:size-20">
                <Image
                  src={avatar || "default-user.webp"}
                  alt={"User Name"}
                  fill
                  className="rounded-full"
                />
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
                {userType === "expert" && (
                  <h4 className="text-sm text-gray-600">
                    {session.professional.title}
                  </h4>
                )}
                <div className="flex flex-col gap-2 mt-1">
                  <span className="text-sm font-medium text-blue-600">
                    {format(session.date, "dd MMMM yyyy", {
                      locale: locale === "ar" ? ar : undefined,
                    })}
                  </span>
                  <span className="text-sm font-medium text-blue-600">
                    {session.expert_availability.to_time} -
                    {session.expert_availability.from_time}
                  </span>
                </div>
              </div>
            </div>
            <SessionStatus session={session} />
          </div>

          {/* Session Details */}
          <SessionDetails session={session} />

          {/* Notes */}
          <SessionNotes session={session} />

          {/* Feedback */}
          <SessionFeedback />

          {/* Actions */}
          {type === "upcoming" ? (
            <UpcomingSessionsActions />
          ) : (
            <PastSessionsActions />
          )}
        </CardContent>
      </Card>
    </div>
  );
}

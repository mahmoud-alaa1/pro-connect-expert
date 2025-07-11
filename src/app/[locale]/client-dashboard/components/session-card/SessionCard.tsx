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

export default function SessionCard({
  session,
}: {
  session: ISessionResponse;
}) {
  const isRtl = useIsRtl();
  console.log("here", isRtl);
  const locale = useLocale();
  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="animate-slide-up">
      <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
        <CardContent className="p-6 bg-gradient-to-br ">
          <div className="flex items-start flex-wrap gap-3 justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="relative size-14 sm:size-20">
                <Image
                  src={
                    session.professional.profile.avatar_url ||
                    "default-user.png"
                  }
                  alt={session.professional.profile.full_name}
                  layout="fill"
                  className="rounded-full"
                />
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  {session.professional.profile.full_name}
                </h3>
                <p className="text-sm text-gray-600">
                  {session.professional.title}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm font-medium text-blue-600">
                    {format(session.date, "dd MMMM yyyy", {
                      locale: locale === "ar" ? ar : undefined,
                    })}
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
          <UpcomingSessionsActions />
        </CardContent>
      </Card>
    </div>
  );
}

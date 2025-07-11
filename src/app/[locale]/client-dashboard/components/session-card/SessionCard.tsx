import { Card, CardContent } from "@/components/ui/card";
import UpcomingSessionsActions from "./UpcomingSessionsActions";
import { CircleDollarSign } from "lucide-react";
import SessionNotes from "./SessionNotes";
import SessionFeedback from "./SessionFeedback";
import { Badge } from "@/components/ui/badge";
import SessionDetails from "./SessionDetails";
import Image from "next/image";
import { getPaymentStatusColor, getStatusColor } from "@/lib/utils";
import { getStatusIcon } from "@/lib/constants";

export default function SessionCard({
  session,
}: {
  session: ISessionResponse;
}) {
  return (
    <div className="animate-slide-up">
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
                    {new Date(session.date).toDateString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <Badge className={getStatusColor(session.status)}>
                {getStatusIcon(session.status)}
                &nbsp;
                {session.status}
              </Badge>

              <Badge className={getPaymentStatusColor(session.payment_status)}>
                <CircleDollarSign className="size-4" />
                &nbsp;
                {session.payment_status}
              </Badge>
            </div>
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

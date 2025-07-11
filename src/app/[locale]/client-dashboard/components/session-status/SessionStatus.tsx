import { Badge } from "@/components/ui/badge";
import { getStatusIcon } from "@/lib/constants";
import { getPaymentStatusColor, getStatusColor } from "@/lib/utils";
import { CircleDollarSign } from "lucide-react";
import { useTranslations } from "next-intl";

export default function SessionStatus({
  session,
}: {
  session: ISessionResponse;
}) {
  const t = useTranslations("Common");
  return (
    <div className="flex flex-col items-end gap-2">
      <Badge className={getStatusColor(session.status)}>
        {getStatusIcon(session.status)}
        &nbsp;
        {t(session.status)}
      </Badge>

      <Badge className={getPaymentStatusColor(session.payment_status)}>
        <CircleDollarSign className="size-4" />
        &nbsp;
        {t(session.payment_status)}
      </Badge>
    </div>
  );
}

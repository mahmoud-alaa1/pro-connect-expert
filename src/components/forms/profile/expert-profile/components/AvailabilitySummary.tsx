import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

type Props = {
  totalHours: number;
  dayCount: number;
};

export function AvailabilitySummary({ totalHours, dayCount }: Props) {
  const t = useTranslations("Settings.expert_form.availability.summary");

  if (dayCount === 0) return null;

  return (
    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
      <div className="flex items-center justify-between">
        <span className="text-sm text-blue-800">
          {t("total_hours")}:{" "}
          <strong>
            {totalHours.toFixed(2)} {t("per_week")}
          </strong>
        </span>
        <Badge variant="secondary">
          {dayCount}{" "}
          {dayCount === 1 ? t("days_scheduled") : t("days_scheduled_plural")}
        </Badge>
      </div>
    </div>
  );
}

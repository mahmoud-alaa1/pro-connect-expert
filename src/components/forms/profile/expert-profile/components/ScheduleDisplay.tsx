import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DaySchedule } from "./DaySchedule";
import { getTranslatedWeekdays } from "@/lib/constants";
import { Availability } from "../hooks/useAvailabilityManager";
import { useTranslations } from "next-intl";

type Props = {
  availability: Availability[];
  formatTime: (time: string) => string;
  onRemoveSlot: (day: string, index: number) => void;
};

export function ScheduleDisplay({
  availability,
  formatTime,
  onRemoveSlot,
}: Props) {
  const t = useTranslations("Settings.expert_form.availability");
  const tConstants = useTranslations();
  const weekdays = getTranslatedWeekdays(tConstants);

  if (availability.length === 0) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{t("schedule_title")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {weekdays.map((weekday) => {
            const daySchedule = availability.find(
              (d) => d.day === weekday.value
            );

            return (
              <DaySchedule
                key={weekday.value}
                weekday={weekday}
                daySchedule={daySchedule}
                formatTime={formatTime}
                onRemoveSlot={onRemoveSlot}
              />
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

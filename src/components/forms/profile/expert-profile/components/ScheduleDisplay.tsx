import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DaySchedule } from "./DaySchedule";
import { weekdays } from "@/lib/constants";
import { Availability } from "../hooks/useAvailabilityManager";

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
  if (availability.length === 0) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Your Schedule</CardTitle>
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

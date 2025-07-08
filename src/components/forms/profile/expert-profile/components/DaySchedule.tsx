import { TimeSlot } from "./TimeSlot";
import { Availability } from "../hooks/useAvailabilityManager";
import TodayBadge from "./TodayBadge";

type WeekdayType = {
  value: string;
  label: string;
  short: string;
};

type Props = {
  weekday: WeekdayType;
  daySchedule?: Availability;
  formatTime: (time: string) => string;
  onRemoveSlot: (day: string, index: number) => void;
};

export function DaySchedule({
  weekday,
  daySchedule,
  formatTime,
  onRemoveSlot,
}: Props) {
  return (
    <div
      className={`p-4 rounded-lg border-2 transition-all ${
        daySchedule
          ? "border-blue-200 bg-blue-50"
          : "border-gray-200 bg-gray-50"
      }`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <h4 className="font-semibold text-gray-900">{weekday.label}</h4>
          <TodayBadge todayName={weekday.value} />
        </div>
        <span className="text-xs text-gray-500">{weekday.short}</span>
      </div>

      {daySchedule ? (
        <div className="flex flex-wrap gap-2">
          {daySchedule.times.map((slot, i) => (
            <TimeSlot
              key={i}
              slot={slot}
              index={i}
              dayValue={weekday.value}
              formatTime={formatTime}
              onRemove={onRemoveSlot}
            />
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-500 italic">No availability set</p>
      )}
    </div>
  );
}

import { Trash2 } from "lucide-react";
import { TimeRange } from "../hooks/useAvailabilityManager";

type Props = {
  slot: TimeRange;
  index: number;
  dayValue: string;
  formatTime: (time: string) => string;
  onRemove: (day: string, index: number) => void;
};

export function TimeSlot({
  slot,
  index,
  dayValue,
  formatTime,
  onRemove,
}: Props) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-white border border-blue-200 rounded-lg shadow-sm">
      <span className="text-sm font-medium text-blue-900">
        {formatTime(slot.from)} - {formatTime(slot.to)}
      </span>
      <button
        type="button"
        onClick={() => onRemove(dayValue, index)}
        className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors">
        <Trash2 className="h-3 w-3" />
      </button>
    </div>
  );
}

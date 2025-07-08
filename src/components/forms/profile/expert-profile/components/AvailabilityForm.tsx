import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Plus, Clock } from "lucide-react";
import { weekdays } from "@/lib/constants";

type Props = {
  day: string;
  from: string;
  to: string;
  onDayChange: (day: string) => void;
  onFromChange: (from: string) => void;
  onToChange: (to: string) => void;
  onAddSlot: () => void;
};

export function AvailabilityForm({
  day,
  from,
  to,
  onDayChange,
  onFromChange,
  onToChange,
  onAddSlot,
}: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg ">
      <div className="space-y-2">
        <label
          htmlFor="day-select"
          className="text-sm font-medium text-gray-700">
          Day
        </label>
        <Select value={day} onValueChange={onDayChange}>
          <SelectTrigger id="day-select">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {weekdays.map((d) => (
              <SelectItem key={d.value} value={d.value}>
                {d.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="from-time"
          className="text-sm font-medium text-gray-700">
          From
        </label>
        <div className="relative">
          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="from-time"
            type="time"
            value={from}
            onChange={(e) => onFromChange(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="to-time" className="text-sm font-medium text-gray-700">
          To
        </label>
        <div className="relative">
          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="to-time"
            type="time"
            value={to}
            onChange={(e) => onToChange(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="flex items-end">
        <Button
          type="button"
          onClick={onAddSlot}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Add Slot
        </Button>
      </div>
    </div>
  );
}

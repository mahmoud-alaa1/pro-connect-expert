import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { getTranslatedWeekdays } from "@/lib/constants";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("Settings.expert_form.availability.form");
  const tConstants = useTranslations();
  const weekdays = getTranslatedWeekdays(tConstants);

  return (
    <>
      <div className="p-4 bg-gray-50 rounded-lg ">
        <div className="flex items-center gap-3 mb-4">
          <div className="space-y-2 flex flex-col">
            <label
              htmlFor="day-select"
              className="text-sm font-medium text-gray-700">
              {t("day")}
            </label>
            <Select value={day} onValueChange={onDayChange}>
              <SelectTrigger className="mb-0!" id="day-select">
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

          <div className="flex flex-wrap items-center gap-3">
            <div className="space-y-2 flex flex-col gap-2">
              <label
                htmlFor="from-time"
                className="text-sm font-medium text-gray-700">
                {t("from")}
              </label>
              <Input
                id="from-time"
                type="time"
                value={from}
                onChange={(e) => onFromChange(e.target.value)}
                className="w-fit"
              />
            </div>

            <div className="space-y-2 flex flex-col gap-2">
              <label
                htmlFor="to-time"
                className="text-sm font-medium text-gray-700">
                {t("to")}
              </label>
              <Input
                id="to-time"
                type="time"
                value={to}
                onChange={(e) => onToChange(e.target.value)}
                className="w-fit"
              />
            </div>
          </div>
        </div>
        <Button
          type="button"
          onClick={onAddSlot}
          className=" bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="h-4 w-4 mr-2" />
          {t("add_slot")}
        </Button>
      </div>
    </>
  );
}

import { Badge } from "@/components/ui/badge";

type Props = {
  totalHours: number;
  dayCount: number;
};

export function AvailabilitySummary({ totalHours, dayCount }: Props) {
  if (dayCount === 0) return null;

  return (
    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
      <div className="flex items-center justify-between">
        <span className="text-sm text-blue-800">
          Total weekly hours: <strong>{totalHours.toFixed(2)} hours</strong>
        </span>
        <Badge variant="secondary">
          {dayCount} day{dayCount !== 1 ? "s" : ""} scheduled
        </Badge>
      </div>
    </div>
  );
}

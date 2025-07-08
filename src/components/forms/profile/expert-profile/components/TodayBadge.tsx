import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

export default function TodayBadge({ todayName }: { todayName: string }) {
  const today = new Date();
  const currentDayName = format(today, "EEEE");
  const isCurrentDay = currentDayName === todayName;
  if (!isCurrentDay) return null;
  return (
    <Badge
      variant="default"
      className="text-xs bg-green-500 hover:bg-green-600">
      Today
    </Badge>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function StatCard({
  icon: Icon,
  label,
  value,
  color,
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  color: string;
  trend?: string;
}) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 relative">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-5`}
      />

      <CardContent className={cn(`p-6`)}>
        <div className="space-y-2">
          <div>
            <p className="text-sm font-medium text-gray-600">{label}</p>
          </div>
          <div className="flex items-center space-x-4">
            <div
              className={`size-10 ${color} bg-gradient-to-br rounded-xl flex items-center justify-center`}>
              <Icon className="size-6 text-white" />
            </div>
            <p className="text-lg font-bold text-gray-900 mt-1">{value}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

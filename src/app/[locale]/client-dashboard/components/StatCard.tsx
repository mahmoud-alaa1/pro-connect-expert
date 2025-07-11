import { Card, CardContent } from "@/components/ui/card";

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
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="space-y-2">
          <div>
            <p className="text-sm font-medium text-gray-600">{label}</p>
          </div>
          <div className="flex items-center space-x-4">
            <div
              className={`size-10 ${color} rounded-xl flex items-center justify-center`}>
              <Icon className="size-6 text-white" />
            </div>
            <p className="text-lg font-bold text-gray-900 mt-1">{value}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

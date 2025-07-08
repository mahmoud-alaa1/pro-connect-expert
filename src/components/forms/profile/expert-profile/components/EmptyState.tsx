import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export function EmptyState() {
  return (
    <Card className="border-dashed border-2 border-gray-300">
      <CardContent className="text-center py-8">
        <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          No availability set yet
        </h3>
        <p className="text-gray-500">
          Start by adding your first time slot above
        </p>
      </CardContent>
    </Card>
  );
}

import { Button } from "@/components/ui/button";
import { MessageSquare, Star } from "lucide-react";

export default function PastSessionsActions() {
  return (
    <div className="flex gap-2">
      <Button variant="outline" size="sm" className="flex-1">
        <Star className="w-4 h-4 mr-2" />
        Rate Session
      </Button>
      <Button variant="outline" size="sm" className="flex-1">
        <MessageSquare className="w-4 h-4 mr-2" />
        Leave Review
      </Button>
    </div>
  );
}

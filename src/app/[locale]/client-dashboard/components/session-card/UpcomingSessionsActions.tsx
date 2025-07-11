import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";
import React from "react";

export default function UpcomingSessionsActions() {
  return (
    <div className="flex gap-2">
      <Button size="sm" className="flex-1">
        <Video className="w-4 h-4 mr-2" />
        Join Session
      </Button>
      {/* <Button variant="outline" size="sm" className="flex-1">
        Reschedule
      </Button> */}
      <Button variant="outline" size="sm" className="flex-1">
        Cancel
      </Button>
    </div>
  );
}

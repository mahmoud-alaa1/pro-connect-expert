import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { Calendar } from "lucide-react";

export default function NoUpcomingSessions() {
  return (
    <div className="text-center py-16">
      <Calendar className="mx-auto h-16 w-16 text-gray-400 mb-6" />
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        No upcoming sessions
      </h3>
      <p className="text-gray-600 mb-6">
        Book a session with a professional to get started
      </p>
      <Button>
        <Link href="/professionals">Find Professionals</Link>
      </Button>
    </div>
  );
}

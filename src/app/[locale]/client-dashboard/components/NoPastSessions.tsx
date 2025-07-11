import { Clock } from "lucide-react";

export default function NoPastSessions() {
  return (
    <div className="text-center py-16">
      <Clock className="mx-auto h-16 w-16 text-gray-400 mb-6" />
      <h3 className="text-xl font-bold text-gray-900 mb-3">No past sessions</h3>
      <p className="text-gray-600">Your completed sessions will appear here</p>
    </div>
  );
}

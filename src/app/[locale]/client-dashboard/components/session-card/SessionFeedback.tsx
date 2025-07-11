import { MessageSquare } from "lucide-react";

export default function SessionFeedback() {
  return (
    <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-100">
      <p className="text-sm text-green-800">
        <MessageSquare className="w-4 h-4 inline mr-2" />
        {"No feedback available"}
      </p>
    </div>
  );
}

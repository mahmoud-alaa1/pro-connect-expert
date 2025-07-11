import { MessageSquare } from "lucide-react";

export default function SessionNotes({
  session,
}: {
  session: ISessionResponse;
}) {
  return (
    <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
      <p className="text-sm text-start text-blue-800">
        <MessageSquare className="w-4 h-4 inline mr-2" />
        {session.notes || "No notes available"}
      </p>
    </div>
  );
}

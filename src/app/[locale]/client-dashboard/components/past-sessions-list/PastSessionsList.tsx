import useGetSession from "@/hooks/sessions/useGetSession";
import SessionCard from "../session-card/SessionCard";
import NoPastSessions from "../NoPastSessions";

export default function PastSessionsList() {
  const { data: pastSessions } = useGetSession("past");

  if (pastSessions && pastSessions.length === 0) {
    return <NoPastSessions />;
  }

  return (
    <div className="space-y-4">
      {pastSessions?.map((session) => (
        <SessionCard
          type="past"
          userType="expert"
          key={session.id}
          session={session}
        />
      ))}
    </div>
  );
}

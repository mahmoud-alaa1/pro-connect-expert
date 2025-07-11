import useGetSession from "@/hooks/sessions/useGetSession";
import SessionCard from "../session-card/SessionCard";
import NoPastSessions from "../NoPastSessions";

export default function PastSessionsList() {
  const { data: pastSessions } = useGetSession("past");
  console.log("Past Sessions:", pastSessions);

  if (pastSessions && pastSessions.length === 0) {
    return <NoPastSessions />;
  }

  return (
    <div>
      {pastSessions?.map((session) => (
        <SessionCard key={session.id} session={session} />
      ))}
    </div>
  );
}

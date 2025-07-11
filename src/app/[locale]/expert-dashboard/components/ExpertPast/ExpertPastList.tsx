import useGetSession from "@/hooks/sessions/useGetSession";
import NoPastSessions from "@/app/[locale]/client-dashboard/components/NoPastSessions";
import SessionCard from "@/app/[locale]/client-dashboard/components/session-card/SessionCard";

export default function ExpertPastList() {
  const { data: pastSessions } = useGetSession("past");

  if (pastSessions && pastSessions.length === 0) {
    return <NoPastSessions />;
  }

  return (
    <div>
      {pastSessions?.map((session) => (
        <SessionCard
          type="past"
          userType="client"
          key={session.id}
          session={session}
        />
      ))}
    </div>
  );
}

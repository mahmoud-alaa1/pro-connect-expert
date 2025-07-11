import useGetSession from "@/hooks/sessions/useGetSession";
import ExpertNoUpcoming from "./ExpertNoUpcoming";
import SessionCard from "@/app/[locale]/client-dashboard/components/session-card/SessionCard";

export default function ExpertUpcomingList() {
  const { data: upcomingSessions } = useGetSession("upcoming");

  if (upcomingSessions && upcomingSessions.length === 0) {
    return <ExpertNoUpcoming />;
  }

  return (
    <div>
      {upcomingSessions?.map((session) => (
        <SessionCard
          userType="client"
          type="upcoming"
          key={session.id}
          session={session}
        />
      ))}
    </div>
  );
}

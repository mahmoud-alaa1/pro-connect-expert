import useGetSession from "@/hooks/sessions/useGetSession";
import SessionCard from "../session-card/SessionCard";
import NoUpcomingSessions from "../../NoUpcomingSessions";

export default function UpcomingSessionsList() {
  const { data: upcomingSessions } = useGetSession("upcoming");

  if (upcomingSessions && upcomingSessions.length === 0) {
    return <NoUpcomingSessions />;
  }

  return (
    <div>
      {upcomingSessions?.map((session) => (
        <SessionCard
          type="upcoming"
          userType="expert"
          key={session.id}
          session={session}
        />
      ))}
    </div>
  );
}

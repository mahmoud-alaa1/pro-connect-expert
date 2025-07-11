"use client";
import { Award, Calendar, DollarSign } from "lucide-react";
import StatCard from "./StatCard";
import useGetSession from "@/hooks/sessions/useGetSession";

export default function ClientStats() {
  const { data: upcomingSessions } = useGetSession("upcoming");
  const { data: pastSessions } = useGetSession("past");
  return (
    <div className="lg:flex grid sm:grid-cols-3 lg:flex-col gap-6 animate-slide-up">
      <StatCard
        icon={Calendar}
        label="Total Sessions"
        value={(upcomingSessions?.length || 0) + (pastSessions?.length || 0)}
        color="bg-gradient-to-br from-blue-500 to-blue-600"
        trend="+2 this month"
      />
      <StatCard
        icon={DollarSign}
        label="Total Investment"
        value={`$${0}`}
        color="bg-gradient-to-br from-green-500 to-green-600"
        trend="+15% vs last month"
      />
      <StatCard
        icon={Award}
        label="Avg Session Rating"
        value={0}
        color="bg-gradient-to-br from-purple-500 to-purple-600"
        trend="Excellent feedback"
      />
    </div>
  );
}

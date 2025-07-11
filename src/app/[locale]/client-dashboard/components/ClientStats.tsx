"use client";
import { Award, Calendar, DollarSign } from "lucide-react";
import StatCard from "./StatCard";
import useGetSession from "@/hooks/sessions/useGetSession";
import { useTranslations } from "next-intl";

export default function ClientStats() {
  const { data: upcomingSessions } = useGetSession("upcoming");
  const { data: pastSessions } = useGetSession("past");
  const t = useTranslations("ClientDashboard.stats");
  
  return (
    <div className="lg:flex grid sm:grid-cols-3 lg:flex-col gap-6 animate-slide-up">
      <StatCard
        icon={Calendar}
        label={t("total_sessions")}
        value={(upcomingSessions?.length || 0) + (pastSessions?.length || 0)}
        color="bg-gradient-to-br from-blue-500 to-blue-600"
        trend={t("trend_sessions")}
      />
      <StatCard
        icon={DollarSign}
        label={t("total_investment")}
        value={`$${0}`}
        color="bg-gradient-to-br from-green-500 to-green-600"
        trend={t("trend_investment")}
      />
      <StatCard
        icon={Award}
        label={t("avg_rating")}
        value={0}
        color="bg-gradient-to-br from-purple-500 to-purple-600"
        trend={t("trend_rating")}
      />
    </div>
  );
}
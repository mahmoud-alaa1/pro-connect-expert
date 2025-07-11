"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useGetSession from "@/hooks/sessions/useGetSession";
import { useTranslations } from "next-intl";
import { Skeleton } from "@/components/ui/skeleton";

import PastSessionsList from "../../client-dashboard/components/past-sessions-list/PastSessionsList";
import { Calendar, Medal } from "lucide-react";
import ExpertUpcomingList from "./ExpertUpcoming/ExpertUpcomingList";

export default function ExpertSessionsTabs() {
  const { data: upcomingSessions, isPending: isLoadingUpcoming } =
    useGetSession("upcoming");
  const { data: pastSessions, isPending: isLoadingPast } =
    useGetSession("past");
  const t = useTranslations("ExpertDashboard.sessions.tabs");

  return (
    <Tabs defaultValue="upcoming">
      <TabsList className="bg-white/70 backdrop-blur-sm border border-blue-100 shadow-lg ">
        <TabsTrigger
          value="upcoming"
          className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white">
          <Calendar />
          <span>
            {t("upcoming")} ({upcomingSessions?.length || 0})
          </span>
        </TabsTrigger>
        <TabsTrigger
          value="past"
          className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white">
          <Medal />
          <span>
            {t("past")} ({pastSessions?.length || 0})
          </span>
        </TabsTrigger>
      </TabsList>
      {isLoadingPast || isLoadingUpcoming ? (
        <div className="space-y-4 bg-white/70  border border-blue-100 shadow-lg p-4 rounded-lg">
          {Array.from({ length: 2 }).map((_, i) => (
            <Skeleton key={i} className="h-48 animate-fade-in rounded-lg" />
          ))}
        </div>
      ) : (
        <>
          <TabsContent value="upcoming" className="animate-fade-in-scale">
            <ExpertUpcomingList />
          </TabsContent>
          <TabsContent value="past" className="animate-fade-in-scale">
            <PastSessionsList />
          </TabsContent>
        </>
      )}
    </Tabs>
  );
}

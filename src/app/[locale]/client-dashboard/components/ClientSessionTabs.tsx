"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useGetSession from "@/hooks/sessions/useGetSession";
import UpcomingSessionsList from "./upcoming-sessions-list/UpcomingSessionsList";
import PastSessionsList from "./past-sessions-list/PastSessionsList";
import { useTranslations } from "next-intl";
import { Skeleton } from "@/components/ui/skeleton";

export default function ClientSessionTabs() {
  const { data: upcomingSessions, isPending: isLoadingUpcoming } =
    useGetSession("upcoming");
  const { data: pastSessions, isPending: isLoadingPast } =
    useGetSession("past");
  const t = useTranslations("ClientDashboard.tabs");

  return (
    <Tabs defaultValue="upcoming" className="w-full">
      <TabsList className="grid w-full grid-cols-2 lg:w-96 bg-gray-100 p-1 rounded-xl">
        <TabsTrigger value="upcoming">
          <span>
            {t("upcoming")} ({upcomingSessions?.length || 0})
          </span>
        </TabsTrigger>
        <TabsTrigger value="past">
          <span>
            {t("past")} ({pastSessions?.length || 0})
          </span>
        </TabsTrigger>
      </TabsList>
      {isLoadingPast || isLoadingUpcoming ? (
        <div className="space-y-4">
          {Array.from({ length: 2 }).map((_, i) => (
            <Skeleton key={i} className="h-48 animate-fade-in rounded-lg" />
          ))}
        </div>
      ) : (
        <>
          <TabsContent value="upcoming" className="animate-fade-in-scale">
            <UpcomingSessionsList />
          </TabsContent>
          <TabsContent value="past" className="animate-fade-in-scale">
            <PastSessionsList />
          </TabsContent>
        </>
      )}
    </Tabs>
  );
}

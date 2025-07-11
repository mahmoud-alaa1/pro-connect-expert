import { Clock, DollarSign, Star, Users } from "lucide-react";
import StatCard from "../../client-dashboard/components/StatCard";
import { useTranslations } from "next-intl";

export default function ExpertStats() {
  const t = useTranslations("ExpertDashboard.stats");
  
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      <StatCard
        icon={DollarSign}
        label={t("total_earnings")}
        value={`$${5.36}`}
        color="from-emerald-500 to-green-600"
      />
      <StatCard
        icon={Users}
        label={t("total_sessions")}
        value={5}
        color="from-blue-500 to-blue-600"
      />
      <StatCard
        icon={Clock}
        label={t("pending_earnings")}
        value={`$${5.03}`}
        color="from-amber-500 to-orange-600"
      />
      <StatCard
        icon={Star}
        label={t("average_rating")}
        value="4.9"
        color="from-purple-500 to-purple-600"
      />
    </div>
  );
}
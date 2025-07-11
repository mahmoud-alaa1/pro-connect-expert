"use client";

import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/store/useAuthStore";
import { Zap } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ExpertStats from "./ExpertStats";

export default function ExpertDashboardHeader() {
  const user = useAuth((state) => state.user);
  const t = useTranslations("ExpertDashboard");

  return (
    <div className="mb-4 animate-slide-up bg-white shadow-lg border- p-5 rounded-lg">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600  to-blue-700 bg-clip-text text-transparent mb-2">
            {t("title")}
          </h1>
          <p className="text-gray-600 text-lg">{t("description")}</p>
        </div>
        <div className="flex items-center gap-4">
          <Badge className="bg-gradient-to-r from-emerald-500 to-green-500 text-white border-0 px-4 py-2">
            <Zap className="w-4 h-4 mr-1" />
            {t("badge.active")}
          </Badge>
          <div className="relative size-25">
            <Image
              src={user?.avatar_url || "/default-user.png"}
              alt="Profile"
              className="rounded-full border-4 border-white shadow-sm"
              fill
            />
          </div>
        </div>
      </div>
      <ExpertStats />
    </div>
  );
}

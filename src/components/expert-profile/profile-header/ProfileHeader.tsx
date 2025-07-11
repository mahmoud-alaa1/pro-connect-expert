import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

import ActionButtons from "./ActionButtons";
import {
  Captions,
  CheckCircle,
  Clock,
  MessageCircle,
  Star,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TProfessional } from "@/types/tableTypes";
import Image from "next/image";

export function ProfileHeader({
  professional,
}: {
  professional: TProfessional;
}) {
  const t = useTranslations("expert_profile.header");

  return (
    <Card className="bg-white/70 backdrop-blur-xl border shadow-2xl shadow-blue-500/10 overflow-hidden relative ">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-indigo-600/5"></div>

      <CardContent className="relative p-8 lg:p-12">
        <div className="flex flex-col items-center lg:flex-row gap-8">
          <div className="relative">
            <div className="relative size-32 lg:size-40   shadow-2xl shadow-blue-500/20 rounded-full ">
              <Image
                src={professional?.avatar_url || "/default-user.png"}
                alt={professional?.name || "Professional"}
                fill
                className="rounded-full ring-white ring-4"
                
              />
            </div>
            {/* Status indicator */}
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
          <div className="flex-1 w-full space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                {professional?.name}
              </h1>
              {professional?.verified && (
                <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 shadow-lg w-fit">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {t("verified_pro")}
                </Badge>
              )}
            </div>

            <h2 className="text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {professional?.title}
            </h2>

            <p className="text-lg text-gray-600 font-medium flex items-center gap-2">
              <Captions className="w-5 h-5 text-blue-500" />
              {professional?.specialty}
            </p>

            <div className="grid sm:grid-cols-3 w-full  gap-4">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-4 rounded-2xl border border-yellow-200/50">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-bold text-xl text-gray-900">
                    {professional?.rating}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  {professional?.total_reviews}
                  {t("reviews")}
                </p>
              </div>

              {/* Experience */}

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-2xl border border-blue-200/50">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span className="font-bold text-xl text-gray-900">
                    {professional?.years_experience}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{t("years_exp")}</p>
              </div>

              {/* Sessions */}

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-2xl border border-green-200/50">
                <div className="flex items-center gap-2 mb-1">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                  <span className="font-bold text-xl text-gray-900">
                    {professional?.total_sessions ?? 0}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{t("sessions")}</p>
              </div>
            </div>
            <ActionButtons professional={professional} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

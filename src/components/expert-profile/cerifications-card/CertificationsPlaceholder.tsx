import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Target, Zap } from "lucide-react";
import React from "react";
import { useTranslations } from "next-intl";

export default function CertificationsPlaceholder() {
  const t = useTranslations("expert_profile.certifications");

  return (
    <Card className="bg-white/70 backdrop-blur-xl border-0 shadow-xl shadow-blue-500/10 overflow-hidden relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <CardHeader className="relative">
        <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
            <Award className="w-5 h-5 text-white" />
          </div>
          {t("title")}
        </CardTitle>
      </CardHeader>

      <CardContent className="relative animate-fade-in">
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Target className="w-8 h-8 text-yellow-500" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            {t("placeholder.skill_focused")}
          </h3>
          <p className="text-gray-600 mb-4 text-sm">
            {t("placeholder.description")}
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-full border border-yellow-200/50">
            <Zap className="w-3 h-3 text-yellow-600" />
            <span className="text-xs font-medium text-yellow-700">
              {t("placeholder.experience_driven")}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

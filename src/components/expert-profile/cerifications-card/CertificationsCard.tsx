import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TProfessional } from "@/types/tableTypes";
import { Award, CheckCircle, Star } from "lucide-react";
import CertificationsPlaceholder from "./CertificationsPlaceholder";
import { useTranslations } from "next-intl";

export default function CertificationsCard({
  professional,
}: {
  professional?: TProfessional;
}) {
  const t = useTranslations("expert_profile.certifications");
  const certifications = professional?.certifications || [];

  if (!certifications || certifications.length === 0) {
    return <CertificationsPlaceholder />;
  }
  return (
    <Card className="bg-white/70 backdrop-blur-xl border-0 shadow-xl shadow-blue-500/10 overflow-hidden relative group">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <CardHeader className="relative">
        <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
            <Award className="w-5 h-5 text-white" />
          </div>
          {t("title")}
        </CardTitle>
      </CardHeader>

      <CardContent className="relative">
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <div key={index} className="animate-slide-right">
              <Badge
                variant="outline"
                className="w-full justify-start p-4 h-auto bg-gradient-to-r from-white to-yellow-50/50 border-yellow-200/50 hover:from-yellow-50 hover:to-orange-50 hover:border-yellow-300/50 transition-all duration-300 transform hover:scale-[1.02] shadow-sm hover:shadow-md">
                <div className="flex items-center gap-3 w-full">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <span className="text-sm font-medium text-gray-800 block">
                      {cert}
                    </span>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                </div>
              </Badge>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200/50 animate-slide-up">
          <div className="flex items-center gap-2 text-yellow-700">
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">
              {t("count", {
                count: certifications.length,
                plural: certifications.length !== 1 ? "s" : "",
              })}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

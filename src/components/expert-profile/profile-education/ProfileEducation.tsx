import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TProfessional } from "@/types/tableTypes";
import { Calendar, GraduationCap, School } from "lucide-react";
import ProfileEducationPlaceholder from "./ProfileEducationPlaceholder";
import { useTranslations } from "next-intl";

export default function ProfileEducation({
  professional,
}: {
  professional: TProfessional;
}) {
  const t = useTranslations("expert_profile.education");
  const education = professional.education as IEducation[] | null;

  if (!education || education.length === 0) {
    return <ProfileEducationPlaceholder />;
  }

  return (
    <Card className="bg-white/70 backdrop-blur-xl border-0 shadow-xl shadow-blue-500/10 overflow-hidden relative group">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <CardHeader className="relative">
        <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          {t("title")}
        </CardTitle>
      </CardHeader>

      <CardContent className="relative">
        <div className="space-y-6">
          {education.map((edu: IEducation, index: number) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-emerald-50/50 p-6 rounded-2xl border border-emerald-100/50 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-emerald-600">
                    <School className="w-4 h-4" />
                    <span className="font-semibold">{edu.institution}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{edu.year}</span>
                </div>
              </div>

              {/* Decorative element */}
              <div className="mt-4 h-1 w-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"></div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

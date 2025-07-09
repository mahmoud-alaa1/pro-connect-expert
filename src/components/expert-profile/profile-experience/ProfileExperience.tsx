import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TProfessional } from "@/types/tableTypes";
import { Briefcase, Building, Calendar } from "lucide-react";
import ProfileExperiencePlaceHolder from "./ProfileExperiencePlaceHolder";

export default function ProfileExperience({
  professional,
}: {
  professional: TProfessional;
}) {
  const experience = professional.experience as IExperience[] | null;

  if (!experience || experience.length === 0) {
    return <ProfileExperiencePlaceHolder />;
  }

  return (
    <Card className="bg-white/70 backdrop-blur-xl border-0 shadow-xl shadow-blue-500/10 overflow-hidden relative group">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <CardHeader className="relative">
        <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
            <Briefcase className="w-5 h-5 text-white" />
          </div>
          Experience
        </CardTitle>
      </CardHeader>

      <CardContent className="relative">
        <div className="space-y-8">
          {experience?.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 to-transparent"></div>

              {/* Timeline dot */}
              <div className="absolute left-4 top-4 w-4 h-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full shadow-lg border-2 border-white"></div>

              <div className="pl-12 pb-6">
                <div className="bg-gradient-to-br from-white to-blue-50/50 p-6 rounded-2xl border border-blue-100/50 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 mb-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-blue-600">
                        <Building className="w-4 h-4" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Decorative element */}
                  <div className="mt-4 h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

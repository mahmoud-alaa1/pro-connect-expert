import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TProfessional } from "@/types/tableTypes";
export default function LanguageCard({
  professional,
}: {
  professional: TProfessional;
}) {
  const languages = professional?.languages || [];
  const displayLanguages = languages && languages.length > 0 ? languages : [];
  const isPlaceholder = !languages || languages.length === 0;

  return (
    <Card className="bg-white/70 backdrop-blur-xl border-0 shadow-xl shadow-blue-500/10 overflow-hidden relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <CardHeader className="relative">
        <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
            <Globe className="w-5 h-5 text-white" />
          </div>
          Languages
        </CardTitle>
      </CardHeader>

      <CardContent className="relative">
        <div className="flex flex-wrap gap-3">
          {displayLanguages.map((language: string, index: number) => (
            <div key={index}>
              <Badge
                variant="secondary"
                className={`px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 ${
                  isPlaceholder
                    ? "bg-gradient-to-r from-gray-50 to-gray-100 text-gray-600 hover:from-gray-100 hover:to-gray-200 border border-gray-200/50"
                    : "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 hover:from-blue-100 hover:to-indigo-100 border border-blue-200/50"
                }`}>
                {language}
              </Badge>
            </div>
          ))}
        </div>

        {/* Language count indicator */}
        <div className="mt-4 text-sm text-gray-600 flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full ${
              isPlaceholder ? "bg-gray-400" : "bg-blue-500"
            }`}></div>
          <span>
            {isPlaceholder
              ? "Primary language: English"
              : `${displayLanguages.length} language${
                  displayLanguages.length !== 1 ? "s" : ""
                } spoken`}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

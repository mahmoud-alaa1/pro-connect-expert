import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Plus, Sparkles } from "lucide-react";

export default function ProfileExperiencePlaceHolder() {
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
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-10 h-10 text-purple-500" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Building Experience
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            This professional is currently building their experience portfolio.
            Check back soon for updates!
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-full border border-purple-200/50">
            <Plus className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">
              Experience coming soon
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

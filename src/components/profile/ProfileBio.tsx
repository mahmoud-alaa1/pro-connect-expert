import { motion } from "framer-motion";
import { User, Quote } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProfileBioProps {
  bio: string;
}

export function ProfileBio({ bio }: ProfileBioProps) {
  // Handle empty or missing bio
  const displayBio =
    bio && bio.trim()
      ? bio
      : "This professional is passionate about their craft and dedicated to delivering exceptional results. They bring creativity, expertise, and a commitment to excellence to every project.";
  const isPlaceholder = !bio || !bio.trim();

  return (
    <Card className="bg-white/70 backdrop-blur-xl border-0 shadow-xl shadow-blue-500/5 overflow-hidden relative group">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/3 via-transparent to-indigo-600/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <CardHeader className="relative">
        <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
            <User className="w-5 h-5 text-white" />
          </div>
          About Me
        </CardTitle>
      </CardHeader>

      <CardContent className="relative">
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}>
          {/* Quote decoration */}
          <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
            <Quote className="w-4 h-4 text-blue-600" />
          </div>
          &nbsp;
          <p
            className={`leading-relaxed text-lg pl-6 relative ${
              isPlaceholder ? "text-gray-600 italic" : "text-gray-700"
            }`}>
            {displayBio}
          </p>
          {isPlaceholder && (
            <div className="mt-4 pl-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full border border-blue-200/50">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-xs font-medium text-blue-600">
                  Bio coming soon
                </span>
              </div>
            </div>
          )}
          {/* Decorative line */}
          <div className="mt-6 h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
        </motion.div>
      </CardContent>
    </Card>
  );
}

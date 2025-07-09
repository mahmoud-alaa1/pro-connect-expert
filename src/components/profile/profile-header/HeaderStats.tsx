import React from "react";
import { motion } from "framer-motion";
import { Clock, MessageCircle, Star } from "lucide-react";
import useGetProfessionalProfile from "@/hooks/profile/useGetProfessionalProfile";
export default function HeaderStats() {
  const { data: professional } = useGetProfessionalProfile();

  return (
    <motion.div
      className="grid grid-cols-3 w-full  gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}>
      {/* Rating */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-4 rounded-2xl border border-yellow-200/50">
        <div className="flex items-center gap-2 mb-1">
          <Star className="w-5 h-5 text-yellow-500 fill-current" />
          <span className="font-bold text-xl text-gray-900">
            {professional?.rating}
          </span>
        </div>
        <p className="text-sm text-gray-600">
          {professional?.reviewCount || professional?.total_reviews} reviews
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
        <p className="text-sm text-gray-600">years exp.</p>
      </div>

      {/* Sessions */}

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-2xl border border-green-200/50">
        <div className="flex items-center gap-2 mb-1">
          <MessageCircle className="w-5 h-5 text-green-500" />
          <span className="font-bold text-xl text-gray-900">
            {professional?.total_sessions ?? 0}
          </span>
        </div>
        <p className="text-sm text-gray-600">sessions</p>
      </div>
    </motion.div>
  );
}

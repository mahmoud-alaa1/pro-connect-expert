import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useGetProfessionalProfile from "@/hooks/profile/useGetProfessionalProfile";
import { DollarSign, TrendingUp, Zap } from "lucide-react";
import { motion } from "framer-motion";
export default function HourlyRate() {
  const { data: professional } = useGetProfessionalProfile();

  return (
    <Card className="bg-white/70 backdrop-blur-xl border-0 shadow-xl shadow-green-500/10 overflow-hidden relative group">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <CardHeader className="relative">
        <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
            <DollarSign className="w-5 h-5 text-white" />
          </div>
          Hourly Rate
        </CardTitle>
      </CardHeader>

      <CardContent className="relative">
        <motion.div
          className="flex items-baseline gap-2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}>
          <span className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            {professional?.hourly_rate} {professional?.currency}
          </span>
          <span className="text-lg font-medium text-gray-600">/hour</span>
          <div className="ml-auto flex items-center gap-1 text-green-600">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">Competitive</span>
          </div>
        </motion.div>

        {/* Value indicators */}
        <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Zap className="w-4 h-4 text-yellow-500" />
            <span>Quick Response</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Available Now</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

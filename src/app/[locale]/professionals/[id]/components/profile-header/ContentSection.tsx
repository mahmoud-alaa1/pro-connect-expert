import { Badge } from "@/components/ui/badge";
import useGetProfessionalProfile from "@/hooks/profile/useGetProfessionalProfile";
import { motion } from "framer-motion";
import { Captions, Shield } from "lucide-react";

export default function ContentSection() {
  const { data: professional } = useGetProfessionalProfile();
  return (
    <motion.div
      className="space-y-3"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
          {professional?.name}
        </h1>
        {professional?.verified && (
          <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 shadow-lg w-fit">
            <Shield className="w-3 h-3 mr-1" />
            Verified Pro
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
    </motion.div>
  );
}

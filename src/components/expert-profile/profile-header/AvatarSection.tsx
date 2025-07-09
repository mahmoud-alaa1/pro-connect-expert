import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useGetProfessionalProfile from "@/hooks/profile/useGetProfessionalProfile";
import { motion } from "framer-motion";

export default function AvatarSection() {
  const { data: professional } = useGetProfessionalProfile();

  return (
    <motion.div
      className="relative "
      initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}>
      <div className="relative">
        <Avatar className="size-32 lg:size-40 ring-4 ring-white shadow-2xl shadow-blue-500/20">
          <AvatarImage
            src={professional?.avatar || "/default-user.png"}
            alt={professional?.name || "Professional"}
          />
          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-2xl lg:text-3xl font-bold">
            {professional?.name || "Professional"}
          </AvatarFallback>
        </Avatar>

        {/* Status indicator */}
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </motion.div>
  );
}

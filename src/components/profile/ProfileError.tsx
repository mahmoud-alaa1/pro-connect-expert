import { motion } from "framer-motion";
import { ShieldX } from "lucide-react";
export default function ProfileError({ error }: { error: Error }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-blue-50 to-indigo-50 flex items-center justify-center">
      <motion.div
        className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}>
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <ShieldX className="size-8" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Error Loading Profile
        </h2>
        <p className="text-gray-600">{error.message}</p>
      </motion.div>
    </div>
  );
}

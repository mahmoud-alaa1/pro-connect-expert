import { Search } from "lucide-react";
import { motion } from "framer-motion";
export default function NoProfessionalsFound() {
  return (
    <motion.div
      className="text-center py-16"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}>
      <motion.div
        className="text-gray-400 mb-6"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}>
        <Search size={64} className="mx-auto" />
      </motion.div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        No professionals found
      </h3>
      <p className="text-gray-600 text-lg mb-6">
        Try adjusting your search criteria or filters
      </p>
    </motion.div>
  );
}

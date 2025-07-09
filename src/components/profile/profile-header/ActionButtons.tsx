import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
export default function ActionButtons() {
  return (
    <motion.div
      className="flex flex-col sm:flex-row gap-4 pt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.6 }}>
      <Button className="p-8 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300">
        Book Session
      </Button>

      <Button
        variant="outline"
        className="p-8 text-lg  backdrop-blur-sm text-gray-700 font-semibold rounded-2xl border border-gray-200  hover:shadow-lg transform hover:scale-105 transition-all hover:border-blue-600 duration-300">
        Send Message
      </Button>
    </motion.div>
  );
}

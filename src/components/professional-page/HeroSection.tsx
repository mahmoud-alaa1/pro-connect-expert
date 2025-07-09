import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
export default function HeroSection() {
  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}>
      <motion.div
        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring" }}>
        <Sparkles size={16} />
        Find Your Perfect Professional Match
      </motion.div>
      <h1 className="text-5xl font-bold  mb-4  ">
        Connect with{" "}
        <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-800 bg-clip-text text-transparent">
          Top Experts
        </span>
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Discover professionals who can help you achieve your goals with
        personalized one-on-one sessions
      </p>
    </motion.div>
  );
}

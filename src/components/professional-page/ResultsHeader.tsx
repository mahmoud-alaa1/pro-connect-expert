import useGetProfessionals from "@/hooks/professionals/useGetProfessionals";
import { motion } from "framer-motion";

export default function ResultsHeader() {
  const { data } = useGetProfessionals();
  const professionals = data?.pages.flatMap((page) => page.data) || [];

  return (
    <motion.div
      className="flex items-center justify-between mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}>
      <div>
        <p className="text-gray-600 text-lg">
          <span className="font-bold text-blue-600">
            {professionals?.length || 0}
          </span>
          &nbsp; professionals found
        </p>
        <p className="text-sm text-gray-500 mt-1">Ready to help you succeed</p>
      </div>
    </motion.div>
  );
}

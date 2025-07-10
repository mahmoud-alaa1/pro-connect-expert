import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function NoProfessionalsFound() {
  const t = useTranslations("professionals_search.no_results");

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
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{t("title")}</h3>
      <p className="text-gray-600 text-lg mb-6">{t("description")}</p>
    </motion.div>
  );
}

import { Search } from "lucide-react";
import { useTranslations } from "next-intl";

export default function NoProfessionalsFound() {
  const t = useTranslations("professionals_search.no_results");

  return (
    <div className="text-center py-16 animate-slide-up">
      <div className="text-gray-400 mb-6 animate-bounce">
        <Search size={64} className="mx-auto" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{t("title")}</h3>
      <p className="text-gray-600 text-lg mb-6">{t("description")}</p>
    </div>
  );
}

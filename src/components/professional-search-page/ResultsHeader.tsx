import useGetProfessionals from "@/hooks/professionals/useGetProfessionals";
import { useTranslations } from "next-intl";

export default function ResultsHeader() {
  const { data } = useGetProfessionals();
  const professionals = data?.pages.flatMap((page) => page.data) || [];
  const t = useTranslations("professionals_search.results");

  return (
    <div className="flex items-center justify-between mb-8 animate-fade-in">
      <div>
        <p className="text-gray-600 text-lg">
          <span className="font-bold text-blue-600">
            {professionals?.length || 0}
          </span>
          &nbsp; {t("professionals_found")}
        </p>
        <p className="text-sm text-gray-500 mt-1">{t("subtitle")}</p>
      </div>
    </div>
  );
}

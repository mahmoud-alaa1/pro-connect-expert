import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function EarningsSummary() {
  const t = useTranslations("ExpertDashboard.earnings_summary");
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900">{t("title")}</h3>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">{t("this_week")}</span>
            <span className="text-lg font-semibold text-gray-900">
              $875
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">{t("this_month")}</span>
            <span className="text-lg font-semibold text-gray-900">
              $3,420
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">{t("available_balance")}</span>
            <span className="text-lg font-semibold text-indigo-600">
              $2,150
            </span>
          </div>
          <Button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
            {t("withdraw_request")}
          </Button>
        </div>
      </div>
    </div>
  );
}
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { Eye, Settings } from "lucide-react";
import { useTranslations } from "next-intl";

export default function QuickActions() {
  const t = useTranslations("ExpertDashboard.quick_actions");
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 ">
      <div className="p-6 border-b border-gray-100 bg-gradient-to-br">
        <h3 className="text-lg font-semibold text-indigo-600">
          {t("title")}
        </h3>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          <Button className="flex items-center justify-between w-full p-5 bg-blue-50 text-blue-700  rounded-lg hover:bg-gray-100 transition-colors">
            <Link href="/settings" className="flex items-center">
              <Settings className="size-5 mr-3" />
              &nbsp; {t("update_profile")}
            </Link>
          </Button>
          <Button className="flex items-center justify-between w-full p-5 bg-blue-50 text-blue-700 rounded-lg hover:bg-gray-100 transition-colors">
            <Link href="/profile" className="flex items-center">
              <Eye className="size-5 mr-3" />
              &nbsp;{t("view_profile")}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
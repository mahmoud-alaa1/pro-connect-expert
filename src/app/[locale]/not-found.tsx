import { Home, Search, Sparkles } from "lucide-react";
import { Link } from "@/i18n/navigation";
import BackButton from "@/components/BackButton";
import { useTranslations, useLocale } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound");
  const locale = useLocale();
  const isRtl = locale === "ar";
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center">
        {/* Animated 404 */}

        <div className="relative mb-8">
          <div className="text-8xl flex gap-4 justify-center items-center sm:text-9xl font-bold text-blue-100 select-none">
            404
            <Sparkles className="w-12 h-12 sm:w-16 sm:h-16 " />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              {t("title")}
            </h1>
            <p className="text-gray-600 text-lg leading-10">
              {t("description")}
            </p>
          </div>

          {/* Action Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${
              isRtl ? "sm:flex-row-reverse" : ""
            }`}>
            <Link
              href="/"
              className={`inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                isRtl ? "flex-row-reverse" : ""
              }`}>
              <Home className={`w-5 h-5 ${isRtl ? "ml-2" : "mr-2"}`} />
              {t("buttons.go_home")}
            </Link>

            <Link
              href="/experts"
              className={`inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                isRtl ? "flex-row-reverse" : ""
              }`}>
              <Search className={`w-5 h-5 ${isRtl ? "ml-2" : "mr-2"}`} />
              {t("buttons.browse_experts")}
            </Link>
          </div>

          {/* Back Button */}
          <BackButton />
        </div>

        {/* Decorative Elements */}
        <div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-300 rounded-full animate-bounce"
          style={{ animationDelay: "0s" }}></div>
        <div
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce"
          style={{ animationDelay: "0.5s" }}></div>
        <div
          className="absolute bottom-1/4 left-1/6 w-2 h-2 bg-blue-200 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}></div>
        <div
          className="absolute bottom-1/3 right-1/6 w-1 h-1 bg-blue-500 rounded-full animate-bounce"
          style={{ animationDelay: "1.5s" }}></div>
      </div>
    </div>
  );
}

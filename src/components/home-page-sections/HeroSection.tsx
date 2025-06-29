import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import BackgroundDecoration from "./BackgroundDecoration";
import VideoPlayer from "./VideoPlayer";

export default function HeroSection() {
  const t = useTranslations("HeroSection");

  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-teal-50 py-20 lg:py-32 ">
      <div className="max-w-7xl relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl  sm:text-5xl lg:text-6xl flex flex-col gap-5 font-bold text-gray-900 mb-6 animate-fade-in">
            <span>{t("title.line1")}</span>
            <span className="text-blue-500 ">{t("title.line2")}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up">
            {t("description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link
              href="/professionals"
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg"
            >
              {t("buttons.find_expert")}
            </Link>
            <Link
              href="/signup?type=expert"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold border-2 border-primary-600 hover:bg-primary-50 transition-all transform hover:scale-105 shadow-lg"
            >
              {t("buttons.become_expert")}
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <VideoPlayer />
      </div>
      <BackgroundDecoration />
    </section>
  );
}

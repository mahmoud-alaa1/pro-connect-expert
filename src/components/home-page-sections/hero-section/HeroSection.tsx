import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import BackgroundDecoration from "../BackgroundDecoration";
import VideoPlayer from "../VideoPlayer";
import BeExpertLink from "./BeExpertLink";

export default function HeroSection() {
  const t = useTranslations("HeroSection");

  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-teal-50 py-20 lg:py-32 ">
      <div className="max-w-7xl relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl  sm:text-5xl lg:text-6xl   gap-5 font-bold text-gray-900 mb-6 animate-fade-in">
            <span>{t("title.line1")}</span>
            &nbsp;
            <span className="text-blue-500 ">{t("title.line2")}</span>
          </h1>
          <p className="text-xl leading-10 text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up">
            {t("description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link
              href="/professionals"
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg">
              {t("buttons.find_expert")}
            </Link>
            <BeExpertLink />
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

"use client";

import { useState } from "react";
import { PlayCircle, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const t = useTranslations("VideoPlayer");

  const videoId = "bNKdz5keGYI";
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="max-w-5xl mx-auto my-20 px-4">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-teal-500/10 px-4 py-2 rounded-full mb-4">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">
            {t("header.badge")}
          </span>
        </div>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t("header.description")}
        </p>
      </div>

      <div className="relative group">
        {/* Background glow effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-teal-500/20 to-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-800/50 backdrop-blur-sm">
          <div className="aspect-video relative">
            {isPlaying ? (
              <iframe
                className="w-full h-full"
                src={`${embedUrl}?autoplay=1&rel=0&modestbranding=1`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={t("video.title")}
              />
            ) : (
              <div className="w-full h-full relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-teal-600 to-primary-700">
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  ></div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-ping"></div>
                <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-white/10 rounded-full animate-bounce"></div>

                {/* Content overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center z-10">
                    {/* Play button */}
                    <Button
                      onClick={() => setIsPlaying(true)}
                      className="group/btn relative   size-24 rounded-full bg-white/10 backdrop-blur-sm border border-white/20  transition-all duration-300 transform hover:scale-110  mb-8"
                    >
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-teal-500 opacity-0 :opacity-100 transition-opacity duration-300"></div>
                      <PlayCircle className="h-12 w-12 text-white relative z-10  transition-transform duration-300" />
                      شغل
                    </Button>

                    {/* Text content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                        {t("video.overlay.title")}
                      </h3>
                      <p className="text-lg md:text-xl text-white/90 max-w-lg mx-auto leading-relaxed">
                        {t("video.overlay.description")}
                      </p>

                      {/* Duration indicator */}
                      <div className="flex items-center justify-center gap-2 text-white/70 text-sm">
                        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                        <span>{t("video.overlay.duration")}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

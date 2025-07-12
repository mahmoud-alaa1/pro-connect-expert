"use client";

import { useState } from "react";
import { PlayCircle, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const t = useTranslations("VideoPlayer");

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

      <div className="relative ">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl   ">
          <div className="aspect-video relative">
            {isPlaying ? (
              <video
                className="w-full h-full rounded-3xl"
                src="https://mgnwlfxlmpmwrefhqsfi.supabase.co/storage/v1/object/public/videos/intro.mp4"
                autoPlay
                controls
                playsInline
              />
            ) : (
              <div className="relative h-full ">
                {/* Liquid Glass Effect */}

                {/* Placeholder Image */}
                <div className="absolute inset-0">
                  <Image
                    src="/video-placeholder.webp"
                    alt="Video Placeholder"
                    className="rounded-3xl"
                    fill
                  />
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center ">
                  <div className="text-center">
                    <Button
                      onClick={() => setIsPlaying(true)}
                      className="relative size-24 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 transition-all duration-300 transform hover:scale-110 hover:bg-white/10 mb-8">
                      <PlayCircle className="size-4 text-white" />
                      {t("video.play")}
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

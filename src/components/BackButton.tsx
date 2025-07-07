"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";

export default function BackButton() {
  const router = useRouter();
  const t = useTranslations("Common");

  return (
    <Button variant={"ghost"} onClick={() => router.back()}>
      <ArrowLeft className="w-4 h-4 mr-2" />
      <span>{t("go_back")}</span>
    </Button>
  );
}

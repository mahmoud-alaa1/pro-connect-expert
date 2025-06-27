"use client";

import { Button } from "./ui/button";
import Image from "next/image";
import { googleAuth } from "@/services/client/login";
import { useTranslations } from "next-intl";

export default function GoogleAuthButton() {
  const t = useTranslations();
  return (
    <Button
      variant="outline"
      className="flex w-full items-center gap-2 cursor-pointer"
      onClick={googleAuth}
    >
      <span>{t("Common.sign_with_google")}</span>
      <Image src="/google.svg" alt="Google" width={20} height={20} />
    </Button>
  );
}

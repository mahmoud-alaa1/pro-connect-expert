"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import { Button } from "./ui/button";

import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const nextLocale = locale === "ar" ? "en" : "ar";

  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  const switchLang = () => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  };

  return (
    <Button
      onClick={switchLang}
      disabled={isPending}
      variant="outline"
    >
      <Globe />
      {locale === "ar" ? "English" : "العربية"}
    </Button>
  );
}

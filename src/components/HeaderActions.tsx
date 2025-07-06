"use client";

import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";
import UserMenu from "./UserMenu";

export default function HeaderActions() {
  const t = useTranslations("Common");

  return (
    <>
      <LanguageSwitcher />
      <UserMenu />
      <Button variant="link">
        <Link href="/professionals">{t("search_professionals")}</Link>
      </Button>
    </>
  );
}

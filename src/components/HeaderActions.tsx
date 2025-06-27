"use client";

import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { Button } from "./ui/button";
import LogoutButton from "./LogoutButton";
import { useAuth } from "@/store/useAuthStore";
import { useTranslations } from "next-intl";

export default function HeaderActions() {
  const t = useTranslations("Common");
  const user = useAuth((s) => s.user);

  return (
    <>
      <LanguageSwitcher />
      {user ? (
        <>
          <LogoutButton />
          <span className="px-4">{user.full_name}</span>
        </>
      ) : (
        <>
          <Button variant="outline">
            <Link href="/login">{t("login")}</Link>
          </Button>
        </>
      )}
      <Button variant="link">
        <Link href="/professionals">{t("search_professionals")}</Link>
      </Button>
    </>
  );
}

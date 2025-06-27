"use client";

import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { Button } from "./ui/button";
import LogoutButton from "./LogoutButton";
import { useAuth } from "@/store/useAuthStore";

export default function HeaderActions() {
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
            <Link href="/login">تسجيل الدخول</Link>
          </Button>
        </>
      )}
      <Button variant="link">
        <Link href="/professionals">البحث عن محترفين</Link>
      </Button>
    </>
  );
}

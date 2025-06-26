import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { Button } from "./ui/button";

export default function HeaderActions() {
  return (
    <>
      <LanguageSwitcher />
      <Button variant="outline">
        <Link href="/login">تسجيل الدخول</Link>
      </Button>
      <Button variant="link">
        <Link href="/professionals">البحث عن محترفين</Link>
      </Button>
    </>
  );
}

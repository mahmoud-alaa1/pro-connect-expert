import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import SideNav from "./SideNav";
import HeaderActions from "./HeaderActions";

export default function Header() {
  const t = useTranslations("Logo");
  return (
    <header>
      <nav className="p-3 border-b-2  shadow-md bg-[#fdfdfd] flex items-center justify-between">
        <div className="font-bold">
          <Link href="/">
            <span className="text-blue-700">{t("pro")}</span>
            <span>{t("connect")}</span>
          </Link>
        </div>
        <div className="sm:hidden">
          <SideNav />
        </div>
        <div className=" items-center gap-4 hidden sm:flex">
          <HeaderActions />
        </div>
      </nav>
    </header>
  );
}

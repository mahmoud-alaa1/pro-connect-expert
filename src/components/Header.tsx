import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import SideNav from "./SideNav";
import HeaderActions from "./HeaderActions";
import Image from "next/image";

export default function Header() {
  const t = useTranslations("Logo");
  return (
    <header>
      <nav className="p-3   border-b-2  shadow-md bg-[#fdfdfd] flex items-center justify-between">
        <div className="font-bold">
          <Link className="flex  items-center gap-2" href="/">
            <Image
              src={"/Logo.png"}
              alt="platform logo"
              width={40}
              height={40}
            />
            <div className="text-lg">
              <span className="text-blue-700">{t("pro")}</span>
              <span>{t("connect")}</span>
            </div>
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

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import HeaderActions from "./HeaderActions";
import { useLocale, useTranslations } from "next-intl";

export default function SideNav() {
  const locale = useLocale();
  const t = useTranslations("Common");
  const side = locale === "ar" ? "right" : "left";

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={side} className="pt-5!">
        <SheetHeader>
          <SheetTitle className="sr-only">{t("side_nav_menu")}</SheetTitle>
          <div className="flex flex-col gap-4">
            <HeaderActions />
          </div>
          <SheetDescription className="sr-only">
            {t("side_nav_description")}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

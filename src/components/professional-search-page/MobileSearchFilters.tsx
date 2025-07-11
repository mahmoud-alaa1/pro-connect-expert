import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import SearchFilters from "./SearchFilters";
import { useTranslations } from "next-intl";

export default function MobileSearchFilters() {
  const t = useTranslations("professionals_search.filters");

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <Menu className="h-6 w-6 " />
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="pt-10">
        <SheetHeader>
          <SheetTitle>{t("mobile_title")}</SheetTitle>
          <SearchFilters />
          <SheetDescription className="sr-only">
            {t("mobile_description")}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

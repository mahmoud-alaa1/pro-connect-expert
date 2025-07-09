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
export default function MobileSearchFilters() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <Menu className="h-6 w-6 " />
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Search Filters</SheetTitle>
          <SearchFilters />
          <SheetDescription className="sr-only">
            Use the filters below to refine your search results.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

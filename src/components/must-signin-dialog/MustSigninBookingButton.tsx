import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import MustSigninDialogContent from "./MustSigninDialogContent";
import { useTranslations } from "next-intl";
export default function MustSigninBookingButton() {
  const t = useTranslations("booking");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="p-8 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300">
          {t("button")}
        </Button>
      </DialogTrigger>
      <MustSigninDialogContent />
    </Dialog>
  );
}

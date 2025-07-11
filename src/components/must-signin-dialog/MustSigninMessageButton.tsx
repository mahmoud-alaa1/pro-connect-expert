import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import MustSigninDialogContent from "./MustSigninDialogContent";
import { useTranslations } from "next-intl";
export default function MustSigninMessageButton() {
  const t = useTranslations("expert_profile.actions");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="p-8 text-lg  backdrop-blur-sm text-gray-700 font-semibold rounded-2xl border border-gray-200  hover:shadow-lg transform hover:scale-105 transition-all hover:border-blue-600 duration-300">
          {t("send_message")}
        </Button>
      </DialogTrigger>
      <MustSigninDialogContent />
    </Dialog>
  );
}

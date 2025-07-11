"use client";

import BookButton from "@/components/book-professional/BookingButton";
import MustSigninDialog from "@/components/must-signin-dialog/MustSigninDialog";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useAuth } from "@/store/useAuthStore";
import { TProfessional } from "@/types/tableTypes";
import { useTranslations } from "next-intl";

export default function ActionButtons({
  professional,
}: {
  professional: TProfessional;
}) {
  const t = useTranslations("expert_profile.actions");

  const user = useAuth((state) => state.user);

  if (!user) {
    return <MustSigninDialog />;
  }

  if (user?.user_type === "expert") {
    return user.id === professional.user_id ? (
      <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up">
        <Button
          variant="outline"
          className="p-8 text-lg  backdrop-blur-sm text-gray-700 font-semibold rounded-2xl border border-gray-200  hover:shadow-lg transform hover:scale-105 transition-all hover:border-blue-600 duration-300">
          <Link href={"/settings"}>{t("edit_profile")}</Link>
        </Button>
      </div>
    ) : null;
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up">
      <BookButton professional={professional} />

      <Button
        variant="outline"
        className="p-8 text-lg  backdrop-blur-sm text-gray-700 font-semibold rounded-2xl border border-gray-200  hover:shadow-lg transform hover:scale-105 transition-all hover:border-blue-600 duration-300">
        {t("send_message")}
      </Button>
    </div>
  );
}

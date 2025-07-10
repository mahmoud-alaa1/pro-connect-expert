import { Link } from "@/i18n/navigation";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

export default function ViewProfileButton({ id }: { id: string }) {
  const t = useTranslations("professionals_search.professional_card");

  return (
    <Button
      className="bg-gradient-to-r shadow-lg rounded-full  from-indigo-500 to-blue-600 hover:scale-105 "
      variant="default">
      <Link href={`/professionals/${id}`}>{t("view_profile")}</Link>
    </Button>
  );
}

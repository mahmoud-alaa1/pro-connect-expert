import { useTranslations } from "next-intl";

export default function SiteName() {
  const t = useTranslations("Logo");

  return (
    <div className="text-lg">
      <span className="text-blue-700">{t("pro")}</span>
      <span>{t("connect")}</span>
    </div>
  );
}

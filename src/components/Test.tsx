import { useTranslations } from "next-intl";
export default function Test() {
  const t = useTranslations("Login");
  return (
    <div>
      <div className="mx-auto">
        <p>{t("heading")}</p>
        <span>{t("subheading")}</span>
      </div>
    </div>
  );
}

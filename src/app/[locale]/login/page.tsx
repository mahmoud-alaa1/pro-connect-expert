import LoginCard from "@/components/auth-cards/LoginCard";

import { getTranslations } from "next-intl/server";

export default async function page() {
  const t = await getTranslations("Login");
  return (
    <div className="p-4">
      <div className="mx-auto max-w-md mt-5 ">
        <div className="text-center">
          <p className="text-3xl mb-2 font-bold">{t("heading")}</p>
          <span>{t("subheading")}</span>
        </div>
        <LoginCard />
      </div>
    </div>
  );
}

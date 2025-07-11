"use client";

import { Link } from "@/i18n/navigation";
import LoginForm from "../forms/LoginForm";
import GoogleAuthButton from "../GoogleAuthButton";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

export default function LoginCard() {
  const t = useTranslations("Login");

  return (
    <div className="shaow-md w-full bg-white p-6 mt-3 rounded-lg border-2 space-y-4">
      <div className="mb-4 flex flex-col gap-2">
        <p className="text-lg  font-bold">{t("form.submit")}</p>
        <span>{t("subheading")}</span>
      </div>
      <LoginForm />
      <div className="flex items-center gap-4 ">
        <div className="h-px bg-gray-300 flex-grow"></div>
        <span className="text-gray-500 whitespace-nowrap">
          {t("or_continue_with")}
        </span>
        <div className="h-px bg-gray-300 flex-grow"></div>
      </div>
      <GoogleAuthButton />

      <div className="flex items-center gap-4 ">
        <div className="h-px bg-gray-300 flex-grow"></div>
        <span className="text-gray-500 whitespace-nowrap">
          {t("no_account")}
        </span>
        <div className="h-px bg-gray-300 flex-grow"></div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Link href="/signup?type=client">
          <Button className="flex w-full cursor-pointer items-center  gap-2 bg-blue-600 text-white hover:bg-blue-700">
            {t("join_client")}
          </Button>
        </Link>
        <Link href="/signup?type=expert">
          <Button className="flex w-full cursor-pointer items-center  gap-2 bg-green-600 text-white hover:bg-green-700">
            {t("join_expert")}
          </Button>
        </Link>
      </div>
    </div>
  );
}

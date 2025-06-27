import SignupForm from "@/components/forms/SignupForm";
import GoogleAuthButton from "@/components/GoogleAuthButton";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function page() {
  const t = await getTranslations("Signup");
  return (
    <div className="p-4">
      <div className="mx-auto max-w-md mt-5 ">
        <div className="text-center">
          <p className="text-3xl mb-2 font-bold">{t("heading")}</p>
          <span>{t("subheading")}</span>
        </div>
        <div className="shaow-md bg-white p-6 mt-3 rounded-lg border-2 space-y-4">
          <div className="mb-4 flex flex-col gap-2">
            <p className="text-lg  font-bold">{t("form.title")}</p>
            <span>{t("form.subtitle")}</span>
          </div>
          <SignupForm />
          <div className="flex items-center gap-4 ">
            <div className="h-px bg-gray-300 flex-grow"></div>
            <span className="text-gray-500 whitespace-nowrap">
              {t("google.divider")}
            </span>
            <div className="h-px bg-gray-300 flex-grow"></div>
          </div>
          <GoogleAuthButton />
          <div className=" flex gap-2 items-center justify-center">
            <span className="text-sm">{t("loginLink.text")}</span>
            <Link href="/login">
              <Button
                variant="link"
                className="underline cursor-pointer text-blue-700 p-0!"
              >
                {t("loginLink.cta")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

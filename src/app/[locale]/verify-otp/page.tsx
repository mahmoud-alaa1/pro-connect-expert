import VerifyOTPForm from "@/components/forms/VerifyOTPForm";
import { getTranslations } from "next-intl/server";

export default async function page() {
  const t = await getTranslations("VerifyOTP");
  return (
    <div className="p-4">
      <div className="mx-auto max-w-md mt-5 ">
        <div className="text-center">
          <p className="text-3xl mb-5 font-bold">{t("heading")}</p>
        </div>
        <div className="shaow-md bg-white p-6 mt-3 rounded-lg border-2 space-y-4">
          <div className="mb-4 flex flex-col gap-2 text-center">
            <p className="text-lg text-center  font-bold">{t("code_label")}</p>
          </div>
          <VerifyOTPForm />
        </div>
      </div>
    </div>
  );
}

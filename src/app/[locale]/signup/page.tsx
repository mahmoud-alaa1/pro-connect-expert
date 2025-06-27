import SignupForm from "@/components/forms/SignupForm";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function page() {
  return (
    <div className="p-4">
      <div className="mx-auto max-w-md mt-5 ">
        <div className="text-center">
          <p className="text-3xl mb-2 font-bold">إنشاء حساب</p>
          <span>انضم إلى بروكونكت</span>
        </div>
        <div className="shaow-md bg-white p-6 mt-3 rounded-lg border-2 space-y-4">
          <div className="mb-4 flex flex-col gap-2">
            <p className="text-lg  font-bold">إنشاء حساب</p>
            <span>املأ التفاصيل لإنشاء حسابك</span>
          </div>
          <SignupForm />
          <div className="flex items-center gap-4 ">
            <div className="h-px bg-gray-300 flex-grow"></div>
            <span className="text-gray-500 whitespace-nowrap">أو تابع مع</span>
            <div className="h-px bg-gray-300 flex-grow"></div>
          </div>
          <Button
            variant="outline"
            className="flex w-full items-center gap-2 cursor-pointer"
          >
            <Image src="/google.svg" alt="Google" width={20} height={20} />
            <span>تابع مع جوجل</span>
          </Button>
          <div className=" flex gap-2 items-center justify-center">
            <span className="text-sm">لديك حساب بالفعل؟</span>
            <Link href="/login">
              <Button
                variant="link"
                className="underline cursor-pointer text-blue-700 p-0!"
              >
                سجل الدخول من هنا
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

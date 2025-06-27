import LoginForm from "@/components/forms/LoginForm";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function page() {
  return (
    <div className="p-4">
      <div className="mx-auto max-w-md mt-5 ">
        <div className="text-center">
          <p className="text-3xl mb-2 font-bold">مرحبا بعودتك</p>
          <span>سجل الدخول إلى حساب بروكونكت</span>
        </div>
        <div className="shaow-md bg-white p-6 mt-3 rounded-lg border-2 space-y-4">
          <div className="mb-4 flex flex-col gap-2">
            <p className="text-lg  font-bold">تسجيل الدخول</p>
            <span>أدخل بياناتك للوصول إلى حسابك</span>
          </div>
          <LoginForm />
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
          <div className="flex items-center gap-4 ">
            <div className="h-px bg-gray-300 flex-grow"></div>
            <span className="text-gray-500 whitespace-nowrap">
              ليس لديك حساب؟
            </span>
            <div className="h-px bg-gray-300 flex-grow"></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/signup?type=client">
              <Button className="flex w-full cursor-pointer items-center  gap-2 bg-blue-600 text-white hover:bg-blue-700">
                انضم كعميل
              </Button>
            </Link>

            <Link href="/signup?type=expert">
              <Button className="flex w-full cursor-pointer items-center  gap-2 bg-green-600 text-white hover:bg-green-700">
                انضم كخبير
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

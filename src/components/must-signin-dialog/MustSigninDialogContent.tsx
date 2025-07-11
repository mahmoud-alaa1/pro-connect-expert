import LoginCard from "../auth-cards/LoginCard";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

export default function MustSigninDialogContent() {
  return (
    <DialogContent className="p-0! block w-[clamp(350px,900vw,600px)]! max-h-[90dvh]  sm:w-[500px] overflow-auto">
      <DialogHeader className="p-6 pt-8 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-100 rounded-[inherit] ">
        <DialogTitle className="text-xl text-center font-semibold text-gray-800">
          تسجيل الدخول مطلوب
        </DialogTitle>
        <DialogDescription className="text-gray-600 sr-only">
          يجب عليك تسجيل الدخول كعميل لحجز موعد مع هذا المحترف.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className="p-6 pt-4">
        <LoginCard />
      </DialogFooter>
    </DialogContent>
  );
}

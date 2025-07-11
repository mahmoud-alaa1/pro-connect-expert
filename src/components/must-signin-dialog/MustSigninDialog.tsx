import MustSigninBookingButton from "./MustSigninBookingButton";
import MustSigninMessageButton from "./MustSigninMessageButton";

export default function MustSigninDialog() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up">
      <MustSigninBookingButton />
      <MustSigninMessageButton />
    </div>
  );
}

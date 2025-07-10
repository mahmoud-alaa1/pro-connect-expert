import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import BookingHeader from "./BookingHeader";
import BookingForm from "./BookingForm";

export default function BookingButton({
  professional,
}: {
  professional: IProfessional;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="p-8 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300">
          Book Session
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0! block w-[clamp(350px,900vw,600px)]! max-h-[90dvh]  sm:w-[500px] overflow-auto">
        <DialogHeader className="p-6 pt-8 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-100 rounded-[inherit] ">
          <DialogTitle className="text-xl font-semibold text-gray-800 sr-only">
            Book a Session
          </DialogTitle>
          <DialogDescription className="text-gray-600 sr-only">
            Schedule a session with {professional.name}.
          </DialogDescription>

          {/* Dialog Header */}
          <BookingHeader professional={professional} />
        </DialogHeader>

        {/* Form */}
        <BookingForm professional={professional} />
      </DialogContent>
    </Dialog>
  );
}

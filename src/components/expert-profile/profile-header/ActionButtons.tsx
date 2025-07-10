"use client";

import BookButton from "@/components/book-professional/BookingButton";
import { Button } from "@/components/ui/button";
import { TProfessional } from "@/types/tableTypes";
export default function ActionButtons({
  professional,
}: {
  professional: TProfessional;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up">
      <BookButton professional={professional} />

      <Button
        variant="outline"
        className="p-8 text-lg  backdrop-blur-sm text-gray-700 font-semibold rounded-2xl border border-gray-200  hover:shadow-lg transform hover:scale-105 transition-all hover:border-blue-600 duration-300">
        Send Message
      </Button>
    </div>
  );
}

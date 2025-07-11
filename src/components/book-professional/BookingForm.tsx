"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormDatePicker from "../form-fields/FormDatePicker";
import { bookingSchema } from "@/schemas/bookingSchema";
import FormTextArea from "../form-fields/FormTextArea";
import { calculateDuration, enable2Weeks } from "@/lib/utils";
import { WEEKDAYS } from "@/lib/constants";
import { CheckCircle, DollarSign } from "lucide-react";
import { useBookSession } from "@/hooks/sessions/useBookSession";
import { useAuth } from "@/store/useAuthStore";
import Spinner from "../Spinner";
import { TProfessional } from "@/types/tableTypes";
import { useTranslations } from "next-intl";
import { useExpertAvailability } from "@/hooks/useExpertAvailability";
import TimeSlots from "./TimeSlots";

export default function BookingForm({
  professional,
}: {
  professional: TProfessional;
}) {
  const { data, isPending: isGettingAvailability } = useExpertAvailability();

  const t = useTranslations("booking.form");

  const form = useForm<bookingSchema>({
    resolver: zodResolver(bookingSchema),
  });
  const id = useAuth((state) => state.user?.id);
  const { mutate, isPending } = useBookSession();

  if (isGettingAvailability || !data) {
    return (
      <div className="h-40 bg-gradient-to-b from-gray-50 to-white-100 flex items-center justify-center rounded-lg shadow-sm">
        <Spinner size={80} />
      </div>
    );
  }

  const selectedDate = form.watch("date");
  const weekday = selectedDate ? WEEKDAYS[selectedDate.getUTCDay()] : undefined;
  const timesForDay = data?.find((t) => t.day === weekday)?.times ?? [];

  const selectedTimeId = form.watch("time");

  const selectedSlot = timesForDay.find((slot) => slot.id === selectedTimeId);

  const duration = selectedSlot
    ? calculateDuration(selectedSlot.from, selectedSlot.to)
    : 0;
  const totalAmount = (duration * (professional?.hourly_rate ?? 0)) / 60;

  function onSubmit(values: bookingSchema) {

    mutate({
      expert_id: professional.id,
      client_id: id!,
      date: values.date.toISOString().split("T")[0],
      time_id: values.time,
      notes: values.notes,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="p-6 bg-white rounded-b-lg space-y-5">
          <FormDatePicker<bookingSchema>
            control={form.control}
            name="date"
            label={t("date_label")}
            placeholder={t("date_placeholder")}
            disabledFn={(date) => {
              const dayName = WEEKDAYS[date.getUTCDay()];
              const availableDays = data?.map((t) => t.day);

              return enable2Weeks(date) || !availableDays?.includes(dayName);
            }}
            className="w-full mb-0"
          />
          <TimeSlots />
          <FormTextArea<bookingSchema>
            control={form.control}
            name="notes"
            label={t("notes_label")}
            placeholder={t("notes_placeholder")}
          />
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-indigo-100 border-t border-gray-100 p-8 animate-fade-in-scale">
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-900">
              {t("session_summary")}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 bg-white rounded-2xl shadow-sm hover:scale-[101%]">
              <div className="text-sm text-gray-600 font-medium mb-1">
                {t("duration")}
              </div>
              <div className="text-xl font-bold text-gray-900">
                {duration} {t("min")}
              </div>
            </div>

            <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
              <div className="text-sm text-gray-600 font-medium mb-1">
                {t("rate")}
              </div>
              <div className="text-xl font-bold text-gray-900">
                {professional.hourly_rate}&nbsp;
                {professional.currency} / {t("hr")}
              </div>
            </div>

            <div className="text-center p-4 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl shadow-lg">
              <div className="text-sm text-blue-100 font-medium mb-1">
                {t("total")}
              </div>
              <div className="text-xl font-bold">{totalAmount.toFixed(2)}</div>
              <div>{professional.currency}</div>
            </div>
          </div>

          <Button
            disabled={isPending}
            className="flex-1 h-14 text-base font-semibold rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-purple-700 shadow-lg  w-full transition  hover:scale-105">
            {isPending ? (
              <Spinner />
            ) : (
              <>
                {t("confirm_booking")}
                <CheckCircle className="ml-2 size-5" />
              </>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}

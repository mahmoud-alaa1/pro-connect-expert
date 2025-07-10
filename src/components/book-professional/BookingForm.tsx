"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import FormDatePicker from "../form-fields/FormDatePicker";
import { bookingSchema } from "@/schemas/bookingSchema";
import FormTextArea from "../form-fields/FormTextArea";
import {
  calculateDuration,
  cn,
  enable2Weeks,
  groupAvailability,
} from "@/lib/utils";
import { WEEKDAYS } from "@/lib/constants";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { CheckCircle, Clock, DollarSign } from "lucide-react";
import { useBookSession } from "@/hooks/sessions/useBookSession";
import { useAuth } from "@/store/useAuthStore";
import Spinner from "../Spinner";
export default function BookingForm({
  professional,
}: {
  professional: IProfessional;
}) {
  const availableTimes = groupAvailability(professional.expert_availability);

  const form = useForm<bookingSchema>({
    resolver: zodResolver(bookingSchema),
  });
  const id = useAuth((state) => state.user?.id);
  const { mutate, isPending } = useBookSession();
  const selectedDate = form.watch("date");
  const weekday = selectedDate ? WEEKDAYS[selectedDate.getUTCDay()] : undefined;
  const timesForDay =
    availableTimes?.find((t) => t.day === weekday)?.times ?? [];

  const duration = form.watch("time")
    ? calculateDuration(form.watch("time"))
    : 0;
  const totalAmount = (duration * (professional?.hourly_rate ?? 0)) / 60;

  function onSubmit(values: bookingSchema) {
    console.log(values);

    console.log(new Date(values.date).toISOString());

    mutate({
      expert_id: professional.id,
      client_id: id!,
      date: values.date.toISOString(),
      time: values.time,
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
            label="Date"
            placeholder="Select a date"
            disabledFn={(date) => {
              const dayName = WEEKDAYS[date.getUTCDay()];
              const availableDays = availableTimes?.map((t) => t.day);

              return enable2Weeks(date) || !availableDays?.includes(dayName);
            }}
            className="w-full mb-0"
          />
          {selectedDate && (
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Clock className="size-4" />
                    <span>Available times on {weekday}</span>
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="grid grid-cols-2 md:grid-cols-3  gap-4">
                      {timesForDay.length > 0 ? (
                        timesForDay.map((slot, idx) => {
                          const value = `${slot.from}-${slot.to}`;
                          return (
                            <FormItem key={idx}>
                              <FormControl>
                                <RadioGroupItem
                                  value={value}
                                  id={`slot-${idx}`}
                                  className="hidden"
                                />
                              </FormControl>
                              <FormLabel
                                className={cn(
                                  "cursor-pointer border p-4 flex justify-center rounded-lg hover:bg-blue-50 hover:border-blue-500 transition",
                                  field.value === value &&
                                    "bg-blue-100 border-blue-600 text-blue-700"
                                )}
                                htmlFor={`slot-${idx}`}>
                                {slot.from} - {slot.to}
                              </FormLabel>
                            </FormItem>
                          );
                        })
                      ) : (
                        <p className="text-muted-foreground">
                          No times available.
                        </p>
                      )}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormTextArea<bookingSchema>
            control={form.control}
            name="notes"
            label="Notes"
            placeholder="Any additional notes or requests"
          />
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-indigo-100 border-t border-gray-100 p-8 animate-fade-in-scale">
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-900">Session Summary</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 bg-white rounded-2xl shadow-sm hover:scale-[101%]">
              <div className="text-sm text-gray-600 font-medium mb-1">
                Duration
              </div>
              <div className="text-xl font-bold text-gray-900">
                {duration} min
              </div>
            </div>

            <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
              <div className="text-sm text-gray-600 font-medium mb-1">Rate</div>
              <div className="text-xl font-bold text-gray-900">
                {professional.hourly_rate}&nbsp;
                {professional.currency} / hr
              </div>
            </div>

            <div className="text-center p-4 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl shadow-lg">
              <div className="text-sm text-blue-100 font-medium mb-1">
                Total
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
                Confirm Booking
                <CheckCircle className="ml-2 size-5" />
              </>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}

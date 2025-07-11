import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Clock } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { WEEKDAYS } from "@/lib/constants";
import { useTranslations } from "next-intl";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { cn } from "@/lib/utils";
import { useExpertAvailabilityWithDate } from "@/hooks/useExpertAvailabilityWithDate";
import Spinner from "../Spinner";

export default function TimeSlots() {
  const form = useFormContext();
  const t = useTranslations("booking.form");
  const selectedDate = form.watch("date");
  const { data: availabilityData, isFetching } = useExpertAvailabilityWithDate({
    date: selectedDate,
  });

  const weekday = selectedDate ? WEEKDAYS[selectedDate.getUTCDay()] : undefined;
  const timesForDay =
    availabilityData?.find((t) => t.day === weekday)?.times ?? [];


  if (isFetching) {
    return (
      <div className="h-40 bg-gradient-to-b from-gray-50 to-white-100 flex items-center justify-center rounded-lg shadow-sm">
        <Spinner size={80} />
      </div>
    );
  }
  return (
    selectedDate && (
      <FormField
        control={form.control}
        name="time"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              <Clock className="size-4" />
              <span>{t("time_label", { weekday: weekday || "" })}</span>
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className="grid grid-cols-2 md:grid-cols-3  gap-4">
                {timesForDay.length > 0 ? (
                  timesForDay.map((slot, idx) => {
                    return (
                      <FormItem key={idx}>
                        <FormControl>
                          <RadioGroupItem
                            value={slot.id}
                            id={`slot-${idx}`}
                            className="hidden"
                            disabled={slot.isBooked}
                          />
                        </FormControl>
                        <FormLabel
                          className={cn(
                            "cursor-pointer border p-4 flex justify-center rounded-lg hover:bg-blue-50 hover:border-blue-500 transition",
                            field.value === slot.id &&
                              "bg-blue-100 border-blue-600 text-blue-700",
                            slot.isBooked && "opacity-50 cursor-not-allowed"
                          )}
                          htmlFor={`slot-${idx}`}>
                          {slot.from} - {slot.to}
                        </FormLabel>
                      </FormItem>
                    );
                  })
                ) : (
                  <p className="text-muted-foreground">
                    {t("no_times_available")}
                  </p>
                )}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    )
  );
}

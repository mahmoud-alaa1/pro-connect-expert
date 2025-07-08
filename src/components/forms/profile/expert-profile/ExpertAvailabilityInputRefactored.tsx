"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import {
  useAvailabilityManager,
  Availability,
} from "./hooks/useAvailabilityManager";
import { AvailabilityForm } from "./components/AvailabilityForm";
import { ErrorMessage } from "./components/ErrorMessage";
import { AvailabilitySummary } from "./components/AvailabilitySummary";
import { ScheduleDisplay } from "./components/ScheduleDisplay";
import { EmptyState } from "./components/EmptyState";
import { useTranslations } from "next-intl";

type Props = {
  value: Availability[];
  onChange: (val: Availability[]) => void;
};

export function ExpertAvailabilityInput({ value, onChange }: Props) {
  const t = useTranslations("Settings.expert_form.availability");

  const {
    day,
    from,
    to,
    error,
    setDay,
    setFrom,
    setTo,
    addTimeSlot,
    removeSlot,
    getTotalHours,
    formatTime,
  } = useAvailabilityManager(value, onChange, t);

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Calendar className="h-5 w-5" />
            {t("title")}
          </CardTitle>
          <p className="text-sm text-gray-600">{t("description")}</p>
        </CardHeader>
        <CardContent>
          <AvailabilityForm
            day={day}
            from={from}
            to={to}
            onDayChange={setDay}
            onFromChange={setFrom}
            onToChange={setTo}
            onAddSlot={addTimeSlot}
          />

          <ErrorMessage error={error} />

          <AvailabilitySummary
            totalHours={getTotalHours()}
            dayCount={value.length}
          />
        </CardContent>
      </Card>

      <ScheduleDisplay
        availability={value}
        formatTime={formatTime}
        onRemoveSlot={removeSlot}
      />

      {value.length === 0 && <EmptyState />}
    </div>
  );
}

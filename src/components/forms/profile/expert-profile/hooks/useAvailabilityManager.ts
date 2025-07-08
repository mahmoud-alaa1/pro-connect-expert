import { useState, useEffect } from "react";

export type TimeRange = { from: string; to: string };
export type Availability = {
  day: string;
  times: TimeRange[];
};

export const useAvailabilityManager = (
  value: Availability[],
  onChange: (val: Availability[]) => void
) => {
  const [day, setDay] = useState("Monday");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Clear error when inputs change
  useEffect(() => {
    if (error && (from || to)) {
      setError(null);
    }
  }, [from, to, error]);

  const validateTimeSlot = (from: string, to: string): string | null => {
    if (!from || !to) {
      return "Please select both start and end times";
    }

    if (from >= to) {
      return "Start time must be before end time";
    }

    return null;
  };

  const checkForOverlap = (
    times: TimeRange[],
    newRange: TimeRange
  ): boolean => {
    return times.some(
      (slot) => !(newRange.to <= slot.from || newRange.from >= slot.to)
    );
  };

  const addTimeSlot = () => {
    setError(null);

    const validationError = validateTimeSlot(from, to);
    if (validationError) {
      setError(validationError);
      return;
    }

    const updated = [...value];
    const dayIndex = updated.findIndex((d) => d.day === day);
    const newRange = { from, to };

    if (dayIndex !== -1) {
      const existing = updated[dayIndex].times;

      if (checkForOverlap(existing, newRange)) {
        setError("Time slot overlaps with existing schedule!");
        return;
      }

      existing.push(newRange);
      existing.sort((a, b) => a.from.localeCompare(b.from));
    } else {
      updated.push({ day, times: [newRange] });
    }

    onChange(updated);
    setFrom("");
    setTo("");
  };

  const removeSlot = (day: string, index: number) => {
    const updated = [...value];
    const target = updated.find((d) => d.day === day);
    if (!target) return;

    target.times.splice(index, 1);
    if (target.times.length === 0) {
      onChange(updated.filter((d) => d.day !== day));
    } else {
      onChange(updated);
    }
  };

  const getTotalHours = (): number => {
    return value.reduce((total, day) => {
      return (
        total +
        day.times.reduce((dayTotal, slot) => {
          const fromTime = new Date(`2000-01-01T${slot.from}`);
          const toTime = new Date(`2000-01-01T${slot.to}`);
          const hours =
            (toTime.getTime() - fromTime.getTime()) / (1000 * 60 * 60);
          return dayTotal + hours;
        }, 0)
      );
    }, 0);
  };

  const formatTime = (time: string): string => {
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  return {
    // State
    day,
    from,
    to,
    error,
    // Actions
    setDay,
    setFrom,
    setTo,
    addTimeSlot,
    removeSlot,
    // Computed values
    getTotalHours,
    formatTime,
  };
};

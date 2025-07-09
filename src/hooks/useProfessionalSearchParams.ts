"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

// Types for expected filter params
export interface ProfessionalSearchFilters {
  name?: string;
  minRating?: number;
  maxHourlyRate?: number;
  language?: string;
  specialty?: string;
  currency?: string;
  verified?: boolean;
}

export function useProfessionalSearchParams(): ProfessionalSearchFilters {
  const searchParams = useSearchParams();

  const filters = useMemo<ProfessionalSearchFilters>(() => {
    const getNumber = (key: string): number | undefined => {
      const value = searchParams.get(key);
      return value !== null && !isNaN(Number(value))
        ? Number(value)
        : undefined;
    };

    const getBoolean = (key: string): boolean | undefined => {
      const value = searchParams.get(key);
      return value === "true" ? true : value === "false" ? false : undefined;
    };

    return {
      name: searchParams.get("name") || undefined,
      minRating: getNumber("minRating"),
      maxHourlyRate: getNumber("maxHourlyRate"),
      language: searchParams.get("language") || undefined,
      specialty: searchParams.get("specialty") || undefined,
      currency: searchParams.get("currency") || undefined,
      verified: getBoolean("verified"),
    };
  }, [searchParams]);

  return filters as ProfessionalSearchFilters;
}

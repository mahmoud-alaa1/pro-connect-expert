"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormInput from "../form-fields/FormInput";
import { searchProfessionalsSchema } from "@/schemas/searchProfessionalsSchema";
import { z } from "zod";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";

type SearchProfessionalsSchema = z.infer<typeof searchProfessionalsSchema>;

export default function SearchFilters() {
  const router = useRouter();
  const pathname = usePathname();

  const form = useForm<SearchProfessionalsSchema>({
    resolver: zodResolver(searchProfessionalsSchema),
    defaultValues: {
      minRating: "",
      maxHourlyRate: "",
      specialty: "",
    },
  });

  const watchAllFields = form.watch();
  const debouncedValues = useDebouncedValue(watchAllFields, 500);

  useEffect(() => {
    const currentParams = new URLSearchParams(window.location.search);
    const newParams = new URLSearchParams();

    Object.entries(debouncedValues).forEach(([key, value]) => {
      if (value) {
        newParams.set(key, value.toString());
      }
    });

    if (currentParams.toString() !== newParams.toString()) {
      router.replace(`${pathname}?${newParams.toString()}`);
    }
  }, [debouncedValues, pathname, router]);

  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-6">
      <h3>Filters</h3>
      <Form {...form}>
        <form className="space-y-8">
          <FormInput
            control={form.control}
            name="minRating"
            label="Min Rating"
            placeholder="Minimum rating"
            className="rounded-2xl h-12 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            max="5.0"
            min="0"
            type="number"
          />
          <FormInput
            control={form.control}
            name="maxHourlyRate"
            label="Max Hourly Rate"
            placeholder="Enter maximum hourly rate"
            className="rounded-2xl h-12 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            max="1000.0"
            min="0"
            type="number"
            inputMode="decimal"
          />
          <FormInput
            control={form.control}
            name="title"
            label="Title"
            placeholder="EX: Software Engineer"
            className="rounded-2xl h-12 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            type="text"
          />
          <FormInput
            control={form.control}
            name="specialty"
            label="Specialty"
            placeholder="EX: Frontend Development"
            className="rounded-2xl h-12 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            type="text"
          />

          <Button
            type="button"
            className="w-full"
            onClick={() => {
              form.reset();
              router.replace(pathname); // Remove all query params
            }}>
            Clear Filters
          </Button>
        </form>
      </Form>
    </div>
  );
}

"use client";

import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Control, FieldValues, Path } from "react-hook-form";
import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";

interface FormInputProps<TFormValues extends FieldValues>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "name" | "defaultValue"> {
  control: Control<TFormValues>;
  name: Path<TFormValues>;
  label?: string;
  description?: string;
  Icon?: React.ReactNode;
  labelClassName?: string;
  defaultValue?: string;
  dir?: "ltr" | "rtl";
}

export default function FormInput<TFormValues extends FieldValues>({
  control,
  label,
  name,
  Icon,
  description,
  className,
  labelClassName,
  dir,
  ...inputProps
}: FormInputProps<TFormValues>) {
  const locale = useLocale();
  let isRtl = ["ar", "he", "fa", "ur"].includes(locale);
  if (dir) {
    isRtl = dir === "rtl";
  }

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel htmlFor={name} className={cn("mb-1", labelClassName)}>
              {label}
            </FormLabel>
          )}
          <FormControl>
            <div className="relative h-fit">
              {Icon && (
                <div
                  dir={dir ?? "ltr"}
                  className={cn(
                    "absolute inset-y-0 flex items-center justify-center text-gray-400",
                    isRtl ? "start-2.5 " : "end-2.5 "
                  )}>
                  {Icon}
                </div>
              )}
              <Input
                dir={isRtl ? "rtl" : "ltr"}
                id={name}
                {...field}
                {...inputProps}
                className={cn(Icon && "pe-8", className)}
              />
            </div>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Control, FieldValues, Path } from "react-hook-form";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface FormSelectProps<TFormValues extends FieldValues> {
  control: Control<TFormValues>;
  name: Path<TFormValues>;
  label?: string;
  description?: string;
  labelClassName?: string;
  placeholder?: string;
  options: { label: string; value: string }[];
  className?: string;
  disabled?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  dir?: "ltr" | "rtl";
}

export default function FormSelect<TFormValues extends FieldValues>({
  control,
  label,
  name,
  description,
  placeholder,
  options,
  className,
  labelClassName,
  disabled,
  required,
  dir = "ltr",
  ...props
}: FormSelectProps<TFormValues>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            {label && (
              <FormLabel htmlFor={name} className={cn("mb-1", labelClassName)}>
                {label}
              </FormLabel>
            )}
            <FormControl>
              <Select
                onValueChange={(value) => {
                  if (value) field.onChange(value);
                }}
                value={field.value}
                disabled={disabled}
                required={required}
                {...props}>
                <SelectTrigger
                  id={name}
                  dir={dir}
                  className={cn("w-full", className)}>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent
                  dir={dir}
                  className="max-h-[200px] overflow-y-auto">
                  {options.map((option) => (
                    <SelectItem
                      key={String(option.value)}
                      value={String(option.value)}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}

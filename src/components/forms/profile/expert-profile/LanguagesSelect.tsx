// components/form-fields/LanguagesSelect.tsx

"use client";

import { X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { getTranslatedLanguages } from "@/lib/constants";
import { useTranslations } from "next-intl";

type Props = {
  selected: string[];
  onChange: (languages: string[]) => void;
};

export function LanguagesSelect({ selected, onChange }: Props) {
  const t = useTranslations("Settings.expert_form.languages");
  const tConstants = useTranslations();
  const availableLanguages = getTranslatedLanguages(tConstants);

  const availableOptions = availableLanguages.filter(
    (opt) => !selected.includes(opt.value)
  );

  const handleSelect = (value: string) => {
    if (!selected.includes(value)) {
      onChange([...selected, value]);
    }
  };

  const handleRemove = (lang: string) => {
    onChange(selected.filter((l) => l !== lang));
  };

  return (
    <div className="space-y-4">
      <Select onValueChange={handleSelect}>
        <SelectTrigger>
          <SelectValue placeholder={t("add_language")} />
        </SelectTrigger>
        <SelectContent>
          {availableOptions.map((lang) => (
            <SelectItem key={lang.value} value={lang.value}>
              {lang.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="flex flex-wrap gap-2">
        {selected.map((langValue) => {
          // Find the translated label for display
          const langObj = availableLanguages.find((l) => l.value === langValue);
          const displayLabel = langObj?.label || langValue;

          return (
            <Badge key={langValue} className="flex items-center gap-1">
              {displayLabel}
              <button
                type="button"
                onClick={() => handleRemove(langValue)}
                className="hover:text-red-600">
                <X size={12} />
              </button>
            </Badge>
          );
        })}
      </div>
    </div>
  );
}

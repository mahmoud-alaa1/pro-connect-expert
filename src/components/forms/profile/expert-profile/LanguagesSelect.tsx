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
import { availableLanguages } from "@/lib/constants";

type Props = {
  selected: string[];
  onChange: (languages: string[]) => void;
};

export function LanguagesSelect({ selected, onChange }: Props) {
  const availableOptions = availableLanguages.filter(
    (opt) => !selected.includes(opt)
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
        <SelectTrigger>Add Language</SelectTrigger>
        <SelectContent>
          {availableOptions.map((lang) => (
            <SelectItem key={lang} value={lang}>
              {lang}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="flex flex-wrap gap-2">
        {selected.map((lang) => (
          <Badge key={lang} className="flex items-center gap-1">
            {lang}
            <button
              type="button"
              onClick={() => handleRemove(lang)}
              className="hover:text-red-600">
              <X size={12} />
            </button>
          </Badge>
        ))}
      </div>
    </div>
  );
}

// components/search/SearchInput.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils"; // Optional utility for classNames
import { Label } from "@radix-ui/react-label";

interface SearchInputProps {
  searchKey: string;
  placeholder?: string;
  className?: string;
}

export default function SearchInput({
  searchKey,
  placeholder,
  className,
}: SearchInputProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialValue = searchParams.get(searchKey) || "";
  const [input, setInput] = useState(initialValue);
  const debounced = useDebouncedValue(input, 500);

  useEffect(() => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    if (debounced) {
      params.set(searchKey, debounced);
    } else {
      params.delete(searchKey);
    }
    router.replace(`?${params.toString()}`);
  }, [debounced, router, searchKey]);

  return (
    <div className={cn("relative", className)}>
      <Search
        strokeWidth={3}
        className="absolute end-3 top-1/2 text-blue-600  -translate-y-1/2  size-8"
      />
      <Label htmlFor={searchKey} className="sr-only">
        Search
      </Label>
      <Input
        placeholder={placeholder || "Search..."}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="pe-12 h-14 text-lg bg-white/70  border-2 border-blue-200 focus:border-blue-500!"
        id={searchKey}
        autoComplete={searchKey}
      />
    </div>
  );
}

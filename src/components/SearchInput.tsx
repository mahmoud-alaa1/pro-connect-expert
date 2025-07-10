"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";

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

  const [input, setInput] = useState(() => {
    const url = new URL(window.location.href);
    return url.searchParams.get(searchKey) || "";
  });

  const debounced = useDebouncedValue(input, 500);

  useEffect(() => {
    const url = new URL(window.location.href);
    const searchParams = url.searchParams;

    if (debounced) {
      searchParams.set(searchKey, debounced);
    } else {
      searchParams.delete(searchKey);
    }

    const newSearch = searchParams.toString();
    const currentSearch = window.location.search.replace(/^\?/, "");

    if (newSearch !== currentSearch) {
      router.replace(`${url.pathname}?${newSearch}`, { scroll: false });
    }
  }, [debounced, router, searchKey]);

  return (
    <div className={cn("relative", className)}>
      <Search
        strokeWidth={3}
        className="absolute end-3 top-1/2 text-blue-600 -translate-y-1/2 size-8"
      />
      <Label htmlFor={searchKey} className="sr-only">
        Search
      </Label>
      <Input
        placeholder={placeholder || "Search..."}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="pe-12 h-14 text-lg bg-white/70 border-2 border-blue-200 focus:border-blue-500!"
        id={searchKey}
        autoComplete={searchKey}
      />
    </div>
  );
}

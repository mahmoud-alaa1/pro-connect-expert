import { LoaderCircle } from "lucide-react";
import React from "react";

export default function Spinner({ size = 24 }: { size?: number }) {
  return (
    <LoaderCircle
      strokeWidth={2}
      width={size}
      height={size}
      className="animate-spin"
    />
  );
}

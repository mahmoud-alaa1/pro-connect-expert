import React from "react";
import { Star } from "lucide-react";

interface RatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  className?: string;
}

export default function Rating({
  rating,
  maxRating = 5,
  size = "md",
  showValue = true,
  className = "",
}: RatingProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const stars = Array.from({ length: maxRating }, (_, index) => {
    const starValue = index + 1;
    const filled = starValue <= rating;
    const partial = starValue - 1 < rating && rating < starValue;

    return (
      <Star
        key={index}
        className={`${sizeClasses[size]} ${
          filled
            ? "fill-yellow-400 text-yellow-400"
            : partial
            ? "fill-yellow-200 text-yellow-400"
            : "text-gray-300"
        }`}
      />
    );
  });

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="flex">{stars}</div>
      {showValue && (
        <span className="text-sm text-gray-600 ml-1">{rating.toFixed(1)}</span>
      )}
    </div>
  );
}

import { motion } from "framer-motion";
import { DollarSign, Globe, TrendingUp, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import HourlyRate from "./hourly-rate/HourlyRate";
import LanguageCard from "./language-card/LanguageCard";

interface ProfileLanguagesRateProps {
  languages: string[];
  hourlyRate: number;
  currency: string;
}

export function ProfileLanguagesRate({
  languages,
  hourlyRate,
  currency,
}: ProfileLanguagesRateProps) {
  // Handle empty languages array
 

  return (
    <div className="space-y-6">
      {/* Hourly Rate Card */}
      <HourlyRate />
      {/* Languages Card */}
      <LanguageCard />
    </div>
  );
}

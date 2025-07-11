import { translatedWeekday } from "@/lib/constants";
import { useTranslations } from "next-intl";

interface TranslatedWeekDayProps extends React.HTMLAttributes<HTMLDivElement> {
  day: string;
}

export default function TranslatedWeekDay({
  day,
  ...props
}: TranslatedWeekDayProps) {
  const t = useTranslations();
  const weekdays = translatedWeekday(day, t);

  return <div {...props}>{weekdays}</div>;
}

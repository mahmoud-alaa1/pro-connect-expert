import { NextIntlClientProvider } from "next-intl";

export default function InternationalizationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NextIntlClientProvider>{children}</NextIntlClientProvider>;
}

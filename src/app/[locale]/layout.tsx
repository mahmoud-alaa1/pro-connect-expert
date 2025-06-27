// app/[locale]/layout.tsx
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Alexandria } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/Header";
import Provider from "@/providers/Provider";
import { Toaster } from "sonner";

const alexandria = Alexandria({
  variable: "--font-alexandria",
  subsets: ["latin"],
  display: "auto",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale;

  let messages;
  try {
    messages = await getMessages({ locale });
  } catch {
    notFound();
  }

  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body className={alexandria.variable}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Provider>
            <Header />
            <main>{children}</main>
            <Toaster position="top-center" />
          </Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

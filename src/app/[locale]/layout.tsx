// app/[locale]/layout.tsx
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Alexandria } from "next/font/google";
import "@/styles/index.css";
import Header from "@/components/Header";
import Provider from "@/providers/Provider";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";
import { routing } from "@/i18n/routing";

const alexandria = Alexandria({
  variable: "--font-alexandria",
  subsets: ["latin"],
  display: "auto",
});

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  const messages = await getMessages({ locale });

  return {
    title: messages.Home.title,
    description: messages.Home.description,
    openGraph: {
      title: messages.Home.title,
      description: messages.Home.description,
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

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
            <Footer />
            <Toaster position="top-center" />
          </Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

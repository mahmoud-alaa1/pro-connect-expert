import { useTranslations } from "next-intl";

export default function HowItWorks() {
  const t = useTranslations("HowItWorks");

  const steps = [
    {
      title: t("steps.step1.title"),
      description: t("steps.step1.description"),
    },
    {
      title: t("steps.step2.title"),
      description: t("steps.step2.description"),
    },
    {
      title: t("steps.step3.title"),
      description: t("steps.step3.description"),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-xl text-gray-600">{t("subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-400 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white!  text-2xl font-bold">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Calendar, Search, Shield } from "lucide-react";
import { useTranslations } from "next-intl";

export default function FeaturesSection() {
  const t = useTranslations("FeaturesSection");

  const features = [
    {
      icon: Search,
      title: t("features.find_experts.title"),
      description: t("features.find_experts.description"),
      color: "text-primary-600",
    },
    {
      icon: Calendar,
      title: t("features.easy_scheduling.title"),
      description: t("features.easy_scheduling.description"),
      color: "text-teal-600",
    },
    {
      icon: Shield,
      title: t("features.secure_trusted.title"),
      description: t("features.secure_trusted.description"),
      color: "text-primary-600",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div
                className={`w-16 h-16 ${feature.color} bg-current bg-opacity-10 rounded-lg flex items-center justify-center mb-6`}
              >
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

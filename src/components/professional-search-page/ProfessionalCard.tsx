import { CheckCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import ViewProfileButton from "./ViewProfileButton";
import { useTranslations } from "next-intl";

export default function ProfessionalCard({
  professional,
}: {
  professional: IProfessionalPreview;
}) {
  const t = useTranslations("professionals_search.professional_card");

  return (
    <Card className="p-6 group shadow-lg hover:shadow-2xl hover:scale-[102.5%] hover:border-blue-500 hover:bg-neutral-50 transition duration-300 relative overflow-hidden">
      <div className="flex items-start gap-4 mb-4">
        <div className="hover:scale-105 transition-transform duration-300">
          <div className="relative">
            <Avatar className="size-20">
              <AvatarImage src={professional.avatar_url || "/default-avatar.png"} />

              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {professional.verified && (
              <div className="absolute z-10 bottom-0 -start-1">
                <div className="size-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg ">
                  <CheckCircle className="size-4 text-white" />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-gray-900 truncate text-lg hover:text-blue-600 ">
              {professional.name}
            </h3>
          </div>
          <p className="text-sm text-gray-600 mb-2 font-medium">
            {professional.title}
          </p>
          <div>
            <Badge variant="default" className="mb-3">
              {professional.specialty}
            </Badge>
          </div>
          {/* <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <Rating rating={professional.rating} size="sm" />
            <span className="font-medium">
              ({professional.total_reviews} reviews)
            </span>
          </div> */}
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed animate-fade-in">
        {professional.bio}
      </p>

      <div className="flex flex-wrap gap-2 mb-4 animate-slide-up">
        {professional.languages.slice(0, 3).map((language) => (
          <div key={language} className="animate-fade-in-scale">
            <Badge variant="secondary">{language}</Badge>
          </div>
        ))}
        {professional.languages.length > 3 && (
          <Badge variant="secondary">
            +{professional.languages.length - 3} {t("more_languages")}
          </Badge>
        )}
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-baseline gap-1 hover:scale-105 transition-transform duration-300">
          <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            {professional.hourly_rate}
            &nbsp;
            {professional.currency}
          </span>
          <span className="text-sm text-gray-500 font-medium">
            {t("per_hour")}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <ViewProfileButton id={professional.id} />
        </div>
      </div>

      <div className="pt-4 border-t border-gray-100 animate-fade-in">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full ${
                professional.availability_status
                  ? "bg-green-500"
                  : "bg-gray-400"
              }`}
            />
            <span
              className={`font-medium ${
                professional.availability_status
                  ? "text-green-600"
                  : "text-gray-500"
              }`}>
              {professional.availability_status ? t("available") : t("busy")}
            </span>
          </div>
          {/* <span className="text-gray-500 font-medium">
            {professional.total_sessions || 0} sessions completed
          </span> */}
        </div>
      </div>
    </Card>
  );
}

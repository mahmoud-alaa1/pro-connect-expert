import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Badge } from "../ui/badge";
import { TProfessional } from "@/types/tableTypes";
import { useTranslations } from "next-intl";

export default function BookingHeader({
  professional,
}: {
  professional: TProfessional;
}) {
  const t = useTranslations("booking.header");
  return (
    <div>
      <div className="flex  flex-col sm:items-center sm:flex-row gap-6 animate-fade-in">
        <div className="relative size-30 mx-auto">
          <Image
            src={professional.avatar_url || "/default-user.png"}
            alt={professional.name || "Professional"}
            className="h-20 w-20 ring-4 ring-white shadow-lg rounded-full "
            fill
            sizes="(max-width: 640px) 80px, (min-width: 641px) 100px"
          />
        </div>
        <div className="flex-1 ">
          <div className="flex items-center  gap-3 ">
            <h2 className="text-2xl font-semibold text-gray-800 animate-fade-in ">
              {professional.name}
            </h2>
            {professional?.verified && (
              <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 shadow-lg rounded-full p-1! flex! items-center! justify-center! h-fit">
                <CheckCircle className="size-4" />
              </Badge>
            )}
          </div>
          <p className="text-lg flex text-gray-600 font-medium">
            {professional.title}
          </p>
          <p className="text-sm flex text-gray-500">
            {professional.specialty || t("specialty_not_specified")}
          </p>
        </div>
      </div>
    </div>
  );
}

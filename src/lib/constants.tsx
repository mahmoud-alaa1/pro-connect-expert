import { User } from "lucide-react";

export const getRadioRoles = (t: (key: string) => string) => [
  {
    label: t("fields.client"),
    value: "client",
    icon: <User className="h-4 w-4 text-blue-700" />,
  },
  {
    label: t("fields.expert"),
    value: "expert",
    icon: <User className="h-4 w-4 text-green-700" />,
  },
];

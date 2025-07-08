"use client";

import { CreditCard, Shield, User } from "lucide-react";
import NavLink from "./NavLink";
import { useTranslations } from "next-intl";

export default function SettingsNav() {
  const t = useTranslations("Settings.navigation");

  const SETTINGS = [
    {
      id: "profile",
      label: t("profile"),
      href: "/settings",
      Icon: <User className="h-4 w-4 mr-2" />,
    },
    {
      id: "security",
      label: t("security"),
      href: "/settings/security",
      Icon: <Shield className="h-4 w-4 mr-2" />,
    },
    {
      id: "billing",
      label: t("billing"),
      href: "/settings/billing",
      Icon: <CreditCard className="h-4 w-4 mr-2" />,
    },
  ];

  return (
    <nav className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
      <div className="space-y-1 flex flex-col gap-2">
        {SETTINGS.map((setting) => (
          <NavLink
            activeClassName="text-blue-600 font-semibold bg-blue-100 "
            className="flex items-center rounded-lg px-3 py-2"
            key={setting.id}
            href={setting.href}>
            {setting.Icon}
            &nbsp;
            {setting.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

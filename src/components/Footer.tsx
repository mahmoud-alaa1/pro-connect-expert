import React from "react";
import {
  Search,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-primary-600 text-white rounded-lg p-2">
                <Search className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold">ProConnect</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t("company.description")}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* For Clients */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("sections.for_clients")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/professionals"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {t("links.clients.find_experts")}
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {t("links.clients.sign_up")}
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {t("links.clients.how_it_works")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {t("links.clients.success_stories")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {t("links.clients.pricing")}
                </a>
              </li>
            </ul>
          </div>

          {/* For Experts */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("sections.for_experts")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/signup?type=expert"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {t("links.experts.become_expert")}
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {t("links.experts.expert_resources")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {t("links.experts.community")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {t("links.experts.success_tips")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {t("links.experts.earnings_calculator")}
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("sections.support")}
            </h3>
            <ul className="space-y-2 mb-6">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {t("links.support.help_center")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {t("links.support.contact_support")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {t("links.support.safety_trust")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {t("links.support.terms_of_service")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {t("links.support.privacy_policy")}
                </a>
              </li>
            </ul>

            <div className="space-y-2">
              <div className="flex items-center text-gray-300 text-sm">
                <Mail className="h-4 w-4 mr-2" />
                {t("contact.email")}
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Phone className="h-4 w-4 mr-2" />
                {t("contact.phone")}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {t("bottom.copyright", { year: currentYear })}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {t("bottom.links.privacy")}
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {t("bottom.links.terms")}
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {t("bottom.links.cookies")}
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {t("bottom.links.accessibility")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

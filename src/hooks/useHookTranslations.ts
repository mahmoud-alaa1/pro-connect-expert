"use client";

import { useTranslations } from "next-intl";

export function useHookTranslations() {
  const t = useTranslations("hooks");
  
  return {
    optimistic: {
      update_success: t("optimistic.update_success"),
      update_error: t("optimistic.update_error"),
      delete_success: t("optimistic.delete_success"),
      delete_error: t("optimistic.delete_error"),
      create_success: t("optimistic.create_success"),
      create_error: t("optimistic.create_error"),
    },
    auth: {
      login_success: t("auth.login_success"),
      login_error: t("auth.login_error"),
      signup_success: t("auth.signup_success"),
      signup_error: t("auth.signup_error"),
      verify_otp_success: t("auth.verify_otp_success"),
      verify_otp_error: t("auth.verify_otp_error"),
      complete_profile_success: t("auth.complete_profile_success"),
      complete_profile_error: t("auth.complete_profile_error"),
    },
    profile: {
      update_success: t("profile.update_success"),
      update_error: t("profile.update_error"),
      avatar_change_success: t("profile.avatar_change_success"),
      avatar_change_error: t("profile.avatar_change_error"),
    },
    sessions: {
      book_success: t("sessions.book_success"),
      book_error: t("sessions.book_error"),
      fetch_error: t("sessions.fetch_error"),
    },
    availability: {
      fetch_error: t("availability.fetch_error"),
    }
  };
}
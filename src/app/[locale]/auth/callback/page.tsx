"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/store/useAuthStore";
import { supabaseClient } from "@/lib/supabase/supabaseClient";
import Spinner from "@/components/Spinner";

export default function AuthCallbackPage() {
  const router = useRouter();
  const login = useAuth((s) => s.login);

  useEffect(() => {
    const handleOAuth = async () => {
      //1. session
      const {
        data: { session },
        error,
      } = await supabaseClient.auth.getSession();

      if (error || !session?.user) {
        return router.replace("/login?error=auth_failed");
      }
      localStorage.setItem("token", session.access_token);

      const { user } = session;
      const id = user.id;

      const { data: profile } = await supabaseClient
        .from("profiles")
        .select("*")
        .eq("id", id)
        .single();

      if (!profile || !profile.user_type) {
        return router.replace("/complete-profile");
      } else if (!profile.user_type) {
        router.replace("/complete-profile");
      } else {
        login({
          user: {
            id,
            full_name: profile.full_name,
            email: profile.email as string,
            user_type: profile.user_type,
            avatar_url: profile.avatar_url || null,
            created_at: profile.created_at!,
            updated_at: profile.updated_at!,
          },
          token: session.access_token,
        });

        await fetch("/api/set-token", {
          method: "POST",
          body: JSON.stringify({ token: session.access_token }),
        });
        return router.replace("/");
      }
    };

    handleOAuth();
  }, [router, login]);

  return (
    <div className="flex items-center justify-center h-screen flex-col gap-4">
      <Spinner size={80} />
      <p>جاري تسجيل الدخول...</p>
    </div>
  );
}

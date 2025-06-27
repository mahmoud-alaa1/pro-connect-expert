import { supabaseClient } from "@/lib/supabase/supabaseClient";

export async function loginService(data: {
  email: string;
  password: string;
}): Promise<ILoginResponse> {
  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

  

    const responseData = await res.json();
    return responseData;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(
        error.message || "An unexpected error occurred during login"
      );
    }
    throw new Error("An unexpected error occurred during login");
  }
}

export const googleAuth = async () => {
  try {
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    console.log(data);
    if (error) console.error("Login error:", error);
  } catch (err) {
    console.error("Unexpected error during Google Auth:", err);
  }
};

export const getGooleSession = async () => {
  try {
    const {
      data: { session },
      error,
    } = await supabaseClient.auth.getSession();

    if (error) console.error("getting session info error:", error);
    return session;
  } catch (err) {
    console.error("Unexpected error during getting session info:", err);
    throw err;
  }
};

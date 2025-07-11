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

    if (!res.ok) {
      const errorData = await res.json();
      console.log(errorData);
      throw new Error(errorData.message);
    }

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
        redirectTo: `${process.env.NEXT_PUBLIC_URL}/auth/callback`,
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

export async function createUser(user_type: string) {
  try {
    const res = await fetch("/api/auth/create-user", {
      method: "POST",
      body: JSON.stringify({ user_type }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to create user");
    }
    const data = await res.json();
    return data as { user: IUser; token: string };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        error.message || "An unexpected error occurred while creating user"
      );
    }
    throw new Error("An unexpected error occurred while creating user");
  }
}

export async function setToken(token: string) {
  try {
    const res = await fetch("/api/set-token", {
      method: "POST",
      body: JSON.stringify({ token }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Failed to set token");
    }
    return await res.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        error.message || "An unexpected error occurred while setting token"
      );
    }
    throw new Error("An unexpected error occurred while setting token");
  }
}

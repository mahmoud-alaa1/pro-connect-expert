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
      const error = await res.json();
      throw new Error(error.error || "Login failed");
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

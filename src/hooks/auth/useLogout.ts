import { useRouter } from "next/navigation";

export function useLogout() {
  const router = useRouter();

  const logout = async () => {
    await fetch("/api/logout", {
      method: "POST",
    });
    localStorage.removeItem("token");
    router.replace("/");
  };

  return logout;
}

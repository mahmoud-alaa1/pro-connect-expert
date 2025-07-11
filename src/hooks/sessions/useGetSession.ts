import { useAuth } from "@/store/useAuthStore";
import { useQuery } from "@tanstack/react-query";
import { useHookTranslations } from "../useHookTranslations";

export default function useGetSession(status: "upcoming" | "past" | "all") {
  const user_type = useAuth((state) => state.user?.user_type);
  const t = useHookTranslations();

  return useQuery<ISessionResponse[]>({
    queryFn: async () => {
      const response = await fetch(
        `/api/sessions?role=${user_type}&status=${status}`
      );
      if (!response.ok) {
        throw new Error(t.sessions.fetch_error);
      }
      return response.json();
    },
    queryKey: ["sessions", user_type, status],
  });
}

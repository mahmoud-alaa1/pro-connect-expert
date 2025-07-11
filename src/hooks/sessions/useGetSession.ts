import { useAuth } from "@/store/useAuthStore";
import { useQuery } from "@tanstack/react-query";

export default function useGetSession(status: "upcoming" | "past" | "all") {
  const user_type = useAuth((state) => state.user?.user_type);

  return useQuery<ISessionResponse[]>({
    queryFn: async () => {
      const response = await fetch(
        `/api/sessions?role=${user_type}&status=${status}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch sessions");
      }
      return response.json();
    },
    queryKey: ["sessions", user_type, status],
  });
}

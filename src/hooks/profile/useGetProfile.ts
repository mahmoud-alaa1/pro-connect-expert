import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/services/client/profile";

export function useGetProfile() {
  return useQuery<IUser, Error>({
    queryKey: ["profile"],
    queryFn: getProfile,
  });
}

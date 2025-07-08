import { useQuery } from "@tanstack/react-query";
import { getProfessionalProfile } from "@/services/client/profile";

export default function useGetProfessionalProfile() {
  return useQuery({
    queryKey: ["professional-profile"],
    queryFn: () => getProfessionalProfile(),
  });
}

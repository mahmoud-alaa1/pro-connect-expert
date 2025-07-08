import { useQuery } from "@tanstack/react-query";
import { getProfessionalById } from "@/services/client/profile";

export default function useGetProfessional(id: string) {
  return useQuery({
    queryKey: ["professional", id],
    queryFn: () => getProfessionalById(id),
  });
}

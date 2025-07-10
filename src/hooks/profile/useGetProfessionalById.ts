import { useQuery } from "@tanstack/react-query";
import { getProfessionalById } from "@/services/client/profile";
import { useParams } from "next/navigation";

export default function useGetProfessional(passedId?: string) {
  const { paramId } = useParams();

  const id = passedId ?? (paramId as string);

  return useQuery({
    queryKey: ["professional", id],
    queryFn: () => getProfessionalById(id),
  });
}

import useInfinite from "@/hooks/useInfinite";
import { fetchPaginatedProfessionals } from "@/services/client/professionals";
import { useProfessionalSearchParams } from "../useProfessionalSearchParams";

export default function useGetProfessionals() {
  const filters = useProfessionalSearchParams();
  return useInfinite<IProfessionalPreview>({
    queryKey: ["professionals", filters],
    fetchFn: (page) => fetchPaginatedProfessionals(page, filters),
  });
}

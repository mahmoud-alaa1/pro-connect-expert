import { PROFESSIONALS_PER_PAGE } from "@/lib/constants";

export async function fetchPaginatedProfessionals(
  page: number,
  filters: IProfessionalSearchFilters = {}
): Promise<IPaginatedResponse<IProfessionalPreview>> {
  const params = new URLSearchParams();

  params.append("page", page.toString());
  params.append("pageSize", PROFESSIONALS_PER_PAGE.toString());
  if (filters.name) params.append("name", filters.name);
  if (filters.maxHourlyRate)
    params.append("maxHourlyRate", filters.maxHourlyRate.toString());
  if (filters.minRating)
    params.append("minRating", filters.minRating.toString());

  console.log(
    `/api/professionals?${params.toString()}`,
    "Fetching professionals with filters"
  );
  const res = await fetch(`/api/professionals?${params.toString()}`);
  if (!res.ok) {
    throw new Error("Failed to fetch professionals");
  }

  return await res.json();
}

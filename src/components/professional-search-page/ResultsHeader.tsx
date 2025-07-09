import useGetProfessionals from "@/hooks/professionals/useGetProfessionals";

export default function ResultsHeader() {
  const { data } = useGetProfessionals();
  const professionals = data?.pages.flatMap((page) => page.data) || [];

  return (
    <div className="flex items-center justify-between mb-8 animate-fade-in">
      <div>
        <p className="text-gray-600 text-lg">
          <span className="font-bold text-blue-600">
            {professionals?.length || 0}
          </span>
          &nbsp; professionals found
        </p>
        <p className="text-sm text-gray-500 mt-1">Ready to help you succeed</p>
      </div>
    </div>
  );
}

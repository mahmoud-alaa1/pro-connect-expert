"use client";

import useGetProfessionals from "@/hooks/professionals/useGetProfessionals";
import SkeletonProfessionalCard from "./SkeletonProfessionalCard";
import ProfessionalCard from "./ProfessionalCard";
import NoProfessionalsFound from "./NoProfessionalsFound";

export default function ProfessionalsCards() {
  const { data, ref, isFetching } = useGetProfessionals();
  const professionals = data?.pages.flatMap((page) => page.data);

  if (!isFetching && (!professionals || professionals.length === 0)) {
    return <NoProfessionalsFound />;
  }

  console.log(data);

  return (
    <div className={`grid gap-6 grid-cols-1 md:grid-cols-2 animate-fade-in `}>
      {professionals?.map((professional, index) => (
        <div className="animate-fade-in-scale" key={professional.id}>
          <div ref={index === professionals.length - 1 ? ref : null}>
            <ProfessionalCard professional={professional} />
          </div>
        </div>
      ))}

      {isFetching &&
        Array.from({ length: 4 }).map((_, index) => (
          <SkeletonProfessionalCard key={index} />
        ))}
    </div>
  );
}

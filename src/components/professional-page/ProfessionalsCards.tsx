"use client";

import useGetProfessionals from "@/hooks/professionals/useGetProfessionals";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import SkeletonProfessionalCard from "./SkeletonProfessionalCard";
import ProfessionalCard from "./ProfessionalCard";
import NoProfessionalsFound from "./NoProfessionalsFound";

export default function ProfessionalsCards() {
  const { data, ref, isFetching } = useGetProfessionals();
  const professionals = data?.pages.flatMap((page) => page.data);

  console.log(isFetching, "isFetching in ProfessionalsCards");

  if (!isFetching && (!professionals || professionals.length === 0)) {
    return <NoProfessionalsFound />;
  }

  return (
    <AnimatePresence mode="sync">
      <motion.div
        className={`grid gap-6 grid-cols-1 md:grid-cols-2 `}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        {professionals?.map((professional, index) => (
          <motion.div
            key={professional.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}>
            <div ref={index === professionals.length - 1 ? ref : null}>
              <ProfessionalCard professional={professional} />
            </div>
          </motion.div>
        ))}

        {isFetching &&
          Array.from({ length: 4 }).map((_, index) => (
            <SkeletonProfessionalCard key={index} />
          ))}
      </motion.div>
    </AnimatePresence>
  );
}

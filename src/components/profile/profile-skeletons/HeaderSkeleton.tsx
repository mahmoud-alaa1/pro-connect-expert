import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
export default function HeaderSkeleton() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8">
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}>
        <Skeleton className="h-32 w-32 lg:h-40 lg:w-40 rounded-full" />
      </motion.div>
      <div className="flex-1 space-y-6 w-full">
        <div className="space-y-3">
          <Skeleton className="h-10 w-80" />
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-6 w-72" />
        </div>
        <div className="grid grid-cols-3 w-full  gap-4">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}>
              <Skeleton className="h-20 w-full rounded-2xl" />
            </motion.div>
          ))}
        </div>
        <div className="flex gap-4">
          <Skeleton className="h-20 w-40 rounded-2xl" />
          <Skeleton className="h-20 w-40 rounded-2xl" />
        </div>
      </div>
    </div>
  );
}

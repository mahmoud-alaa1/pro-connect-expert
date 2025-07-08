import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function ProfileSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Skeleton */}
        <Card className="bg-white/70 backdrop-blur-xl border-0 shadow-2xl shadow-blue-500/10 overflow-hidden">
          <CardContent className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Skeleton className="h-32 w-32 lg:h-40 lg:w-40 rounded-full" />
              </motion.div>
              <div className="flex-1 space-y-6">
                <div className="space-y-3">
                  <Skeleton className="h-10 w-80" />
                  <Skeleton className="h-8 w-64" />
                  <Skeleton className="h-6 w-72" />
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    >
                      <Skeleton className="h-20 w-full rounded-2xl" />
                    </motion.div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Skeleton className="h-12 w-32 rounded-2xl" />
                  <Skeleton className="h-12 w-32 rounded-2xl" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 mt-12">
          {/* Main Content Skeletons */}
          <div className="xl:col-span-8 space-y-8">
            {/* Bio Skeleton */}
            <Card className="bg-white/70 backdrop-blur-xl border-0 shadow-xl">
              <CardHeader>
                <Skeleton className="h-8 w-32" />
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </CardContent>
            </Card>

            {/* Experience Skeleton */}
            <Card className="bg-white/70 backdrop-blur-xl border-0 shadow-xl">
              <CardHeader>
                <Skeleton className="h-8 w-32" />
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="relative pl-12"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    >
                      <div className="absolute left-4 top-4 w-4 h-4 bg-blue-200 rounded-full animate-pulse"></div>
                      <div className="bg-gradient-to-br from-white to-blue-50/50 p-6 rounded-2xl space-y-3">
                        <div className="flex justify-between">
                          <Skeleton className="h-6 w-48" />
                          <Skeleton className="h-5 w-24" />
                        </div>
                        <Skeleton className="h-5 w-32" />
                        <Skeleton className="h-16 w-full" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Portfolio Skeleton */}
            <Card className="bg-white/70 backdrop-blur-xl border-0 shadow-xl">
              <CardHeader>
                <Skeleton className="h-8 w-24" />
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    >
                      <Skeleton className="aspect-square rounded-2xl" />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Skeletons */}
          <div className="xl:col-span-4 space-y-8">
            {/* Rate Skeleton */}
            <Card className="bg-white/70 backdrop-blur-xl border-0 shadow-xl">
              <CardHeader>
                <Skeleton className="h-6 w-24" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-12 w-32" />
              </CardContent>
            </Card>

            {/* Languages Skeleton */}
            <Card className="bg-white/70 backdrop-blur-xl border-0 shadow-xl">
              <CardHeader>
                <Skeleton className="h-6 w-20" />
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    >
                      <Skeleton className="h-8 w-20 rounded-full" />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability Skeleton */}
            <Card className="bg-white/70 backdrop-blur-xl border-0 shadow-xl">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-6 w-20 rounded-full" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      className="flex justify-between p-3 rounded-xl bg-gradient-to-r from-gray-50 to-blue-50/50"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                    >
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-4 w-24" />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications Skeleton */}
            <Card className="bg-white/70 backdrop-blur-xl border-0 shadow-xl">
              <CardHeader>
                <Skeleton className="h-6 w-28" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
                    >
                      <Skeleton className="h-16 w-full rounded-xl" />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
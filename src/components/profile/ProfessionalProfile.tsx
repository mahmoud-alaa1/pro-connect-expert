import { motion } from "framer-motion";
import useGetProfessionalProfile from "@/hooks/profile/useGetProfessionalProfile";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ProfileBio } from "@/components/profile/ProfileBio";
import { ProfileLanguagesRate } from "@/components/profile/ProfileLanguagesRate";
import { ProfileAvailability } from "@/components/profile/ProfileAvailability";
import { ProfileExperience } from "@/components/profile/ProfileExperience";
import { ProfileEducation } from "@/components/profile/ProfileEducation";
import { ProfileCertifications } from "@/components/profile/ProfileCertifications";
import { ProfilePortfolio } from "@/components/profile/ProfilePortfolio";
import { ProfileSkeleton } from "@/components/profile/ProfileSkeleton";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export function ProfessionalProfile() {
  const { data, isPending, error } = useGetProfessionalProfile();

  if (isPending) {
    return <ProfileSkeleton />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <motion.div
          className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Error Loading Profile
          </h2>
          <p className="text-gray-600">{error.message}</p>
        </motion.div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <motion.div
          className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Profile Not Found
          </h2>
          <p className="text-gray-600">
            The professional profile could not be loaded.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        <motion.div variants={itemVariants}>
          <ProfileHeader professional={data} />
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 mt-12">
          {/* Main Content */}
          <div className="xl:col-span-8 space-y-8">
            <motion.div variants={itemVariants}>
              <ProfileBio bio={data.bio} />
            </motion.div>

            <motion.div variants={itemVariants}>
              <ProfileExperience experience={data.experience} />
            </motion.div>

            <motion.div variants={itemVariants}>
              <ProfileEducation education={data.education} />
            </motion.div>

            <motion.div variants={itemVariants}>
              <ProfilePortfolio portfolioUrls={data.portfolio_urls} />
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="xl:col-span-4 space-y-8">
            <motion.div variants={itemVariants}>
              <ProfileLanguagesRate
                languages={data.languages}
                hourlyRate={data.hourly_rate}
                currency={data.currency}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <ProfileAvailability
                availability={data.availability}
                availabilityStatus={data.availability_status}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <ProfileCertifications certifications={data.certifications} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

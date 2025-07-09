"use client";

import { easeInOut, motion } from "framer-motion";
import useGetProfessionalProfile from "@/hooks/profile/useGetProfessionalProfile";
import { ProfileHeader } from "@/components/profile/profile-header/ProfileHeader";
import { ProfileBio } from "@/components/profile/ProfileBio";
import { ProfileLanguagesRate } from "@/components/profile/ProfileLanguagesRate";
import { ProfileAvailability } from "@/components/profile/ProfileAvailability";
import { ProfileExperience } from "@/components/profile/ProfileExperience";
import { ProfileEducation } from "@/components/profile/ProfileEducation";
import { ProfileCertifications } from "@/components/profile/ProfileCertifications";
import { ProfilePortfolio } from "@/components/profile/ProfilePortfolio";
import { ProfileSkeleton } from "@/components/profile/ProfileSkeleton";
import ProfileDecoration from "@/components/profile/ProfileDecoration";
import ProfileError from "@/components/profile/ProfileError";
import { supabaseAdmin } from "@/lib/supabase/supabaseServer";

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
      ease: easeInOut,
    },
  },
};

export default function ProfessionalProfile() {
  const { data, isPending, error } = useGetProfessionalProfile();

  // if (isPending || !data) {
  //   return <ProfileSkeleton />;
  // }

  if (error) {
    return <ProfileError error={error} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      <ProfileDecoration />
      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        <motion.div variants={itemVariants}>
          <ProfileHeader />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          <div className="lg:col-span-4 space-y-8">
            <motion.div variants={itemVariants}>
              <ProfileLanguagesRate
                languages={data?.languages}
                hourlyRate={data?.hourly_rate}
                currency={data?.currency}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <ProfileAvailability
                availability={data?.availability}
                availabilityStatus={data?.availability_status}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <ProfileCertifications certifications={data?.certifications} />
            </motion.div>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <motion.div variants={itemVariants}>
              <ProfileBio bio={data?.bio} />
            </motion.div>

            <motion.div variants={itemVariants}>
              <ProfileExperience experience={data?.experience} />
            </motion.div>

            <motion.div variants={itemVariants}>
              <ProfileEducation education={data?.education} />
            </motion.div>

            <motion.div variants={itemVariants}>
              <ProfilePortfolio portfolioUrls={data?.portfolio_urls} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

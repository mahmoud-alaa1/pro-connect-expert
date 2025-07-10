import { supabaseAdmin } from "@/lib/supabase/supabaseServer";
import { notFound } from "next/navigation";

import { ProfileHeader } from "../../../../components/expert-profile/profile-header/ProfileHeader";
import HourlyRate from "../../../../components/expert-profile/hourly-rate/HourlyRate";
import LanguageCard from "../../../../components/expert-profile/language-card/LanguageCard";
import AvailabilityCard from "../../../../components/expert-profile/availability-card/AvailabilityCard";
import { ProfileBio } from "../../../../components/expert-profile/profile-bio/ProfileBio";
import ProfileExperience from "../../../../components/expert-profile/profile-experience/ProfileExperience";
import ProfileEducation from "../../../../components/expert-profile/profile-education/ProfileEducation";
import CertificationsCard from "@/components/expert-profile/cerifications-card/CertificationsCard";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data: professional } = await supabaseAdmin
    .from("professionals")
    .select("title, specialty")
    .eq("id", id)
    .single();

  if (!professional) return {};

  return {
    title: `${professional.title} - ${professional.specialty}`,
    description: `Explore the profile of ${professional.title}, specialized in ${professional.specialty}`,
  };
}

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const {
    data: professional,
    error,
    status,
  } = await supabaseAdmin
    .from("professionals")
    .select(`*`)
    .eq("id", id)
    .single();

  if (!professional || error || status !== 200) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 py-12 ">
        <div className=" delay-200">
          <ProfileHeader professional={professional} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          {/* sidebar */}
          <div className=" delay-300 lg:col-span-4 space-y-8">
            <HourlyRate professional={professional} />
            <LanguageCard professional={professional} />
            <AvailabilityCard professional={professional} />
            <CertificationsCard professional={professional} />
          </div>

          {/* main content */}
          <div className=" delay-400 lg:col-span-8 space-y-8">
            <ProfileBio professional={professional} />
            <ProfileExperience professional={professional} />
            <ProfileEducation professional={professional} />
          </div>
        </div>
      </div>
    </div>
  );
}

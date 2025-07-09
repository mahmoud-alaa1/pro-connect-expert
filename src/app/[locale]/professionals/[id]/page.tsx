import ProfileDecoration from "@/components/profile/ProfileDecoration";
import { supabaseAdmin } from "@/lib/supabase/supabaseServer";
import { notFound } from "next/navigation";

import { ProfileHeader } from "./components/profile-header/ProfileHeader";
import HourlyRate from "./components/hourly-rate/HourlyRate";
import LanguageCard from "./components/language-card/LanguageCard";
import AvailabilityCard from "./components/availability-card/AvailabilityCard";
export async function generateMetadata({ params }: { params: { id: string } }) {
  const { data: professional } = await supabaseAdmin
    .from("professionals")
    .select("title, specialty")
    .eq("id", params.id)
    .single();

  if (!professional) return {};

  return {
    title: `${professional.title} - ${professional.specialty}`,
    description: `Explore the profile of ${professional.title}, specialized in ${professional.specialty}`,
  };
}

export default async function page({ params }: { params: { id: string } }) {
  const {
    data: professional,
    error,
    status,
  } = await supabaseAdmin
    .from("professionals")
    .select(`*`)
    .eq("id", params.id)
    .single();

  if (!professional || error || status !== 200) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      <ProfileDecoration />
      <div className="relative max-w-7xl mx-auto px-4 py-12 ">
        <div className="animate-fade-in-scale delay-200">
          <ProfileHeader professional={professional} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          {/* sidebar */}
          <div className="animate-fade-in-scale delay-300 lg:col-span-4 space-y-8">
            <HourlyRate professional={professional} />
            <LanguageCard professional={professional} />
            <AvailabilityCard professional={professional} />
          </div>

          {/* main content */}
          <div className="animate-fade-in-scale delay-400 lg:col-span-8 space-y-8">
            Child 3
          </div>
        </div>
      </div>
    </div>
  );
}

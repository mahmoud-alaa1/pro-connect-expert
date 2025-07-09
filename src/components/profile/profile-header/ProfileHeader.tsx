import { Card, CardContent } from "@/components/ui/card";
import AvatarSection from "./AvatarSection";
import ContentSection from "./ContentSection";
import HeaderStats from "./HeaderStats";
import ActionButtons from "./ActionButtons";
import useGetProfessionalProfile from "@/hooks/profile/useGetProfessionalProfile";
import HeaderSkeleton from "../profile-skeletons/HeaderSkeleton";

export function ProfileHeader() {
  const { isPending } = useGetProfessionalProfile();
  return (
    <Card className="bg-white/70 backdrop-blur-xl border shadow-2xl shadow-blue-500/10 overflow-hidden relative ">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-indigo-600/5"></div>

      <CardContent className="relative p-8 lg:p-12">
        {isPending ? (
          <HeaderSkeleton />
        ) : (
          <div className="flex flex-col items-center lg:flex-row gap-8">
            <AvatarSection />
            <div className="flex-1 w-full space-y-6">
              <ContentSection />
              <HeaderStats />
              <ActionButtons />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

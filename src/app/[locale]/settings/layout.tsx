import SettingsNav from "@/components/SettingsNav";
import SettingsHeader from "@/components/SettingsHeader";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <SettingsHeader />
      <div className="grid grid-cols-4 gap-6">
        <div className="lg:col-span-1 col-span-4">
          <SettingsNav />
        </div>
        <div className="bg-white border rounded-lg col-span-4 lg:col-span-3">
          {children}
        </div>
      </div>
    </div>
  );
}

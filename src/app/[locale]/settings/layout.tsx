import SettingsNav from "@/components/SettingsNav";

export default async function layout({
  children,
//   params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
//   const { locale } = await params;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-2">
          Manage your account preferences and settings
        </p>
      </div>
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

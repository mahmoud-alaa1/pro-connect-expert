import { useTranslations } from "next-intl";
import ClientStats from "./components/ClientStats";
import ClientHeaderDashboard from "./components/ClientHeaderDashboard";
import ClientSessionTabs from "./components/ClientSessionTabs";

export default function ClientDashboard() {
  const t = useTranslations("ClientDashboard");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <ClientHeaderDashboard />
        <div className="grid lg:grid-cols-12 gap-6 mt-8">
          {/* Stats */}
          <div className="lg:col-span-4">
            <ClientStats />
          </div>
          <div className="lg:col-span-8 space-y-6 bg-white p-4 rounded-lg shadow-xl animate-slide-up">
            {/* Sessions Tabs */}
            <ClientSessionTabs />
          </div>
        </div>
      </div>
    </div>
  );
}

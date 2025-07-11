import ExpertDashboardHeader from "./components/ExpertDashboardHeader";
import QuickActions from "./components/QuickActions";
import EarningsSummary from "./components/EarningsSummary";
import ExpertSessionsTabs from "./components/ExpertSessionsTabs";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <ExpertDashboardHeader />


        {/* Stats Grid */}

        <div className="grid lg:grid-cols-3 gap-4">
          {/* Main Content */}

          <div className="sm:grid-cols-2 lg:grid-cols-1 grid gap-4 h-fit">
            <QuickActions />

            <EarningsSummary />
          </div>
          <div className="lg:col-span-2 space-y-8">
            <ExpertSessionsTabs/>
          </div>
        </div>
      </div>
    </div>
  );
}

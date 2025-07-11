import HeroSection from "@/components/professional-search-page/HeroSection";
import MobileSearchFilters from "@/components/professional-search-page/MobileSearchFilters";
import ProfessionalsCards from "@/components/professional-search-page/ProfessionalsCards";
import ResultsHeader from "@/components/professional-search-page/ResultsHeader";
import SearchFilters from "@/components/professional-search-page/SearchFilters";
import SearchInput from "@/components/SearchInput";

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <HeroSection />

        <div className="grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3  hidden lg:block">
            <SearchFilters />
          </div>

          <div className="lg:col-span-9">
            <div className="animate-fade-in mb-6 flex gap-3 items-center">
              <div className="flex-1">
                <SearchInput searchKey="name" />
              </div>
              <div className="lg:hidden h-full ">
                <MobileSearchFilters />
              </div>
            </div>

            <ResultsHeader />

            <ProfessionalsCards />
          </div>
        </div>
      </div>
    </div>
  );
}

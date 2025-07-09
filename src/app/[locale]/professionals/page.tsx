"use client";

import HeroSection from "@/components/professional-page/HeroSection";
import ProfessionalsCards from "@/components/professional-page/ProfessionalsCards";
import ResultsHeader from "@/components/professional-page/ResultsHeader";
import SearchInput from "@/components/SearchInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "framer-motion";
import { Filter, Grid, List, Search, Sparkles } from "lucide-react";

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <HeroSection />

        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          Filters Sidebar
          {/* <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}>
            <SearchFilters
              isOpen={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
              filters={filters}
              onFiltersChange={setFilters}
            />
          </motion.div> */}
          <div className="lg:col-span-3">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}>
              <SearchInput searchKey="name" />
            </motion.div>

            <ResultsHeader />

            <ProfessionalsCards />

            {/* {filteredProfessionals.length === 0 && !loading && (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}>
                <motion.div
                  className="text-gray-400 mb-6"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}>
                  <Search size={64} className="mx-auto" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  No professionals found
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  Try adjusting your search criteria or filters
                </p>
                <Button
                  variant="primary"
                  onClick={() => {
                    setSearchQuery("");
                    setFilters({
                      specialty: "",
                      minRating: "",
                      maxRate: "",
                      languages: [],
                      availability: "",
                    });
                  }}>
                  Clear All Filters
                </Button>
              </motion.div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Filter, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { Select } from '../ui/Select';
import { Input } from '../ui/Input';

interface SearchFiltersProps {
  isOpen: boolean;
  onClose: () => void;
  filters: {
    specialty: string;
    minRating: string;
    maxRate: string;
    languages: string[];
    availability: string;
  };
  onFiltersChange: (filters: any) => void;
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({
  isOpen,
  onClose,
  filters,
  onFiltersChange
}) => {
  const specialties = [
    { value: '', label: 'All Specialties' },
    { value: 'business-coaching', label: 'Business Coaching' },
    { value: 'career-counseling', label: 'Career Counseling' },
    { value: 'language-tutoring', label: 'Language Tutoring' },
    { value: 'technical-mentoring', label: 'Technical Mentoring' },
    { value: 'life-coaching', label: 'Life Coaching' }
  ];

  const languages = [
    'English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 
    'Chinese', 'Japanese', 'Arabic', 'Russian'
  ];

  const ratings = [
    { value: '', label: 'Any Rating' },
    { value: '4.5', label: '4.5+ Stars' },
    { value: '4.0', label: '4.0+ Stars' },
    { value: '3.5', label: '3.5+ Stars' },
    { value: '3.0', label: '3.0+ Stars' }
  ];

  return (
    <div className={`fixed inset-0 z-50 lg:relative lg:inset-auto lg:z-auto ${isOpen ? 'block' : 'hidden lg:block'}`}>
      <div className="fixed inset-0 bg-black bg-opacity-50 lg:hidden" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl lg:relative lg:w-full lg:h-auto lg:shadow-none">
        <div className="p-6 border-b border-gray-100 lg:border-none">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
            <Button variant="ghost" size="sm" onClick={onClose} className="lg:hidden">
              <X size={20} />
            </Button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <Select
              label="Specialty"
              value={filters.specialty}
              onChange={(e) => onFiltersChange({ ...filters, specialty: e.target.value })}
              options={specialties}
            />
          </div>

          <div>
            <Select
              label="Minimum Rating"
              value={filters.minRating}
              onChange={(e) => onFiltersChange({ ...filters, minRating: e.target.value })}
              options={ratings}
            />
          </div>

          <div>
            <Input
              label="Maximum Rate (per hour)"
              type="number"
              value={filters.maxRate}
              onChange={(e) => onFiltersChange({ ...filters, maxRate: e.target.value })}
              placeholder="Enter max rate"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Languages
            </label>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {languages.map((language) => (
                <label key={language} className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    checked={filters.languages.includes(language)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        onFiltersChange({
                          ...filters,
                          languages: [...filters.languages, language]
                        });
                      } else {
                        onFiltersChange({
                          ...filters,
                          languages: filters.languages.filter(l => l !== language)
                        });
                      }
                    }}
                  />
                  <span className="ml-2 text-sm text-gray-700">{language}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <Select
              label="Availability"
              value={filters.availability}
              onChange={(e) => onFiltersChange({ ...filters, availability: e.target.value })}
              options={[
                { value: '', label: 'Any Time' },
                { value: 'available', label: 'Available Now' },
                { value: 'today', label: 'Available Today' },
                { value: 'week', label: 'Available This Week' }
              ]}
            />
          </div>

          <Button
            variant="outline"
            className="w-full"
            onClick={() => onFiltersChange({
              specialty: '',
              minRating: '',
              maxRate: '',
              languages: [],
              availability: ''
            })}
          >
            Clear All Filters
          </Button>
        </div>
      </div>
    </div>
  );
};
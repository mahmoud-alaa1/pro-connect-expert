import { motion } from 'framer-motion';
import { DollarSign, Globe, TrendingUp, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProfileLanguagesRateProps {
  languages: string[];
  hourlyRate: number;
  currency: string;
}

export function ProfileLanguagesRate({ languages, hourlyRate, currency }: ProfileLanguagesRateProps) {
  // Handle empty languages array
  const displayLanguages = languages && languages.length > 0 ? languages : ['English'];
  const isPlaceholder = !languages || languages.length === 0;

  return (
    <div className="space-y-6">
      {/* Hourly Rate Card */}
      <Card className="bg-white/70 backdrop-blur-xl border-0 shadow-xl shadow-green-500/10 overflow-hidden relative group">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <CardHeader className="relative">
          <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
            Hourly Rate
          </CardTitle>
        </CardHeader>
        
        <CardContent className="relative">
          <motion.div
            className="flex items-baseline gap-2"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              ${hourlyRate}
            </span>
            <span className="text-lg font-medium text-gray-600">/{currency}</span>
            <div className="ml-auto flex items-center gap-1 text-green-600">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">Competitive</span>
            </div>
          </motion.div>
          
          {/* Value indicators */}
          <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span>Quick Response</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Available Now</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Languages Card */}
      <Card className="bg-white/70 backdrop-blur-xl border-0 shadow-xl shadow-blue-500/10 overflow-hidden relative group">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <CardHeader className="relative">
          <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <Globe className="w-5 h-5 text-white" />
            </div>
            Languages
          </CardTitle>
        </CardHeader>
        
        <CardContent className="relative">
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {displayLanguages.map((language, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
              >
                <Badge 
                  variant="secondary" 
                  className={`px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 ${
                    isPlaceholder 
                      ? 'bg-gradient-to-r from-gray-50 to-gray-100 text-gray-600 hover:from-gray-100 hover:to-gray-200 border border-gray-200/50'
                      : 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 hover:from-blue-100 hover:to-indigo-100 border border-blue-200/50'
                  }`}
                >
                  {language}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Language count indicator */}
          <div className="mt-4 text-sm text-gray-600 flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isPlaceholder ? 'bg-gray-400' : 'bg-blue-500'}`}></div>
            <span>
              {isPlaceholder 
                ? 'Primary language: English' 
                : `${displayLanguages.length} language${displayLanguages.length !== 1 ? 's' : ''} spoken`
              }
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
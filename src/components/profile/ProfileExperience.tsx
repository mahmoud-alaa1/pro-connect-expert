import { motion } from 'framer-motion';
import { Briefcase, Building, Calendar, Plus, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ProfileExperienceProps {
  experience: {
    title: string;
    company: string;
    duration: string;
    description: string;
  }[] | null;
}

export function ProfileExperience({ experience }: ProfileExperienceProps) {
  // Show placeholder if no experience
  if (!experience || experience.length === 0) {
    return (
      <Card className="bg-white/70 backdrop-blur-xl border-0 shadow-xl shadow-blue-500/10 overflow-hidden relative group">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <CardHeader className="relative">
          <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            Experience
          </CardTitle>
        </CardHeader>
        
        <CardContent className="relative">
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-10 h-10 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Building Experience</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              This professional is currently building their experience portfolio. Check back soon for updates!
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-full border border-purple-200/50">
              <Plus className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">Experience coming soon</span>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white/70 backdrop-blur-xl border-0 shadow-xl shadow-blue-500/10 overflow-hidden relative group">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <CardHeader className="relative">
        <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
            <Briefcase className="w-5 h-5 text-white" />
          </div>
          Experience
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative">
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
            >
              {/* Timeline line */}
              <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 to-transparent"></div>
              
              {/* Timeline dot */}
              <div className="absolute left-4 top-4 w-4 h-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full shadow-lg border-2 border-white"></div>
              
              <div className="pl-12 pb-6">
                <div className="bg-gradient-to-br from-white to-blue-50/50 p-6 rounded-2xl border border-blue-100/50 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 mb-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-blue-600">
                        <Building className="w-4 h-4" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                  
                  {/* Decorative element */}
                  <div className="mt-4 h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
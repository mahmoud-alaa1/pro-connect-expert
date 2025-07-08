import { motion } from 'framer-motion';
import { GraduationCap, School, Calendar, BookOpen, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ProfileEducationProps {
  education: {
    degree: string;
    institution: string;
    year: string;
  }[] | null;
}

export function ProfileEducation({ education }: ProfileEducationProps) {
  // Show placeholder if no education
  if (!education || education.length === 0) {
    return (
      <Card className="bg-white/70 backdrop-blur-xl border-0 shadow-xl shadow-blue-500/10 overflow-hidden relative group">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <CardHeader className="relative">
          <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            Education
          </CardTitle>
        </CardHeader>
        
        <CardContent className="relative">
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-emerald-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Self-Taught Excellence</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              This professional has developed their expertise through hands-on experience and continuous learning.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-full border border-emerald-200/50">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">Experience-driven learning</span>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white/70 backdrop-blur-xl border-0 shadow-xl shadow-blue-500/10 overflow-hidden relative group">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <CardHeader className="relative">
        <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          Education
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative">
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white to-emerald-50/50 p-6 rounded-2xl border border-emerald-100/50 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                  <div className="flex items-center gap-2 text-emerald-600">
                    <School className="w-4 h-4" />
                    <span className="font-semibold">{edu.institution}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{edu.year}</span>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="mt-4 h-1 w-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
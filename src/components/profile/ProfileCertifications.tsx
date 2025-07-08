import { motion } from 'framer-motion';
import { Award, Star, CheckCircle, Target, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProfileCertificationsProps {
  certifications: string[] | null;
}

export function ProfileCertifications({ certifications }: ProfileCertificationsProps) {
  // Show placeholder if no certifications
  if (!certifications || certifications.length === 0) {
    return (
      <Card className="bg-white/70 backdrop-blur-xl border-0 shadow-xl shadow-blue-500/10 overflow-hidden relative group">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <CardHeader className="relative">
          <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
              <Award className="w-5 h-5 text-white" />
            </div>
            Certifications
          </CardTitle>
        </CardHeader>
        
        <CardContent className="relative">
          <motion.div
            className="text-center py-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Skill-Focused Professional</h3>
            <p className="text-gray-600 mb-4 text-sm">
              This professional focuses on practical skills and real-world experience.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-full border border-yellow-200/50">
              <Zap className="w-3 h-3 text-yellow-600" />
              <span className="text-xs font-medium text-yellow-700">Experience-driven expertise</span>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white/70 backdrop-blur-xl border-0 shadow-xl shadow-blue-500/10 overflow-hidden relative group">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <CardHeader className="relative">
        <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
            <Award className="w-5 h-5 text-white" />
          </div>
          Certifications
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative">
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              <Badge 
                variant="outline" 
                className="w-full justify-start p-4 h-auto bg-gradient-to-r from-white to-yellow-50/50 border-yellow-200/50 hover:from-yellow-50 hover:to-orange-50 hover:border-yellow-300/50 transition-all duration-300 transform hover:scale-[1.02] shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-3 w-full">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <span className="text-sm font-medium text-gray-800 block">{cert}</span>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                </div>
              </Badge>
            </motion.div>
          ))}
        </div>
        
        {/* Achievement summary */}
        <motion.div
          className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200/50"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="flex items-center gap-2 text-yellow-700">
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">
              {certifications.length} Professional Certification{certifications.length !== 1 ? 's' : ''}
            </span>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
}
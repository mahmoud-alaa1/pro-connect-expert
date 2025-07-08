import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle, XCircle, MessageSquare, Hourglass } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProfileAvailabilityProps {
  availability: {
    day: string;
    times: { from: string; to: string }[];
  }[] | null;
  availabilityStatus: boolean;
}

export function ProfileAvailability({ availability, availabilityStatus }: ProfileAvailabilityProps) {
  // Show placeholder if no availability schedule
  if (!availability || availability.length === 0) {
    return (
      <Card className="bg-white/70 backdrop-blur-xl border-0 shadow-xl shadow-blue-500/10 overflow-hidden relative group">
        {/* Animated background */}
        <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          availabilityStatus 
            ? 'from-green-500/5 via-emerald-500/5 to-teal-500/5' 
            : 'from-red-500/5 via-rose-500/5 to-pink-500/5'
        }`}></div>
        
        <CardHeader className="relative">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
              <div className={`w-10 h-10 bg-gradient-to-br rounded-xl flex items-center justify-center shadow-lg ${
                availabilityStatus 
                  ? 'from-green-500 to-emerald-600' 
                  : 'from-red-500 to-rose-600'
              }`}>
                <Calendar className="w-5 h-5 text-white" />
              </div>
              Availability
            </CardTitle>
            
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            >
              <Badge className={`${
                availabilityStatus 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' 
                  : 'bg-gradient-to-r from-red-500 to-rose-600 text-white'
              } shadow-lg`}>
                {availabilityStatus ? (
                  <CheckCircle className="w-3 h-3 mr-1" />
                ) : (
                  <XCircle className="w-3 h-3 mr-1" />
                )}
                {availabilityStatus ? 'Available' : 'Unavailable'}
              </Badge>
            </motion.div>
          </div>
        </CardHeader>
        
        <CardContent className="relative">
          <motion.div
            className="text-center py-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className={`w-16 h-16 bg-gradient-to-br rounded-full flex items-center justify-center mx-auto mb-4 ${
              availabilityStatus 
                ? 'from-green-100 to-emerald-100' 
                : 'from-red-100 to-rose-100'
            }`}>
              {availabilityStatus ? (
                <MessageSquare className="w-8 h-8 text-green-500" />
              ) : (
                <Hourglass className="w-8 h-8 text-red-500" />
              )}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {availabilityStatus ? 'Flexible Schedule' : 'Currently Busy'}
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              {availabilityStatus 
                ? 'Contact directly to discuss scheduling and availability.'
                : 'This professional is currently unavailable for new bookings.'
              }
            </p>
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r rounded-full border ${
              availabilityStatus 
                ? 'from-green-50 to-emerald-50 border-green-200/50'
                : 'from-red-50 to-rose-50 border-red-200/50'
            }`}>
              <Clock className={`w-3 h-3 ${availabilityStatus ? 'text-green-600' : 'text-red-600'}`} />
              <span className={`text-xs font-medium ${availabilityStatus ? 'text-green-700' : 'text-red-700'}`}>
                {availabilityStatus ? 'Contact for scheduling' : 'Check back later'}
              </span>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white/70 backdrop-blur-xl border-0 shadow-xl shadow-blue-500/10 overflow-hidden relative group">
      {/* Animated background */}
      <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
        availabilityStatus 
          ? 'from-green-500/5 via-emerald-500/5 to-teal-500/5' 
          : 'from-red-500/5 via-rose-500/5 to-pink-500/5'
      }`}></div>
      
      <CardHeader className="relative">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
            <div className={`w-10 h-10 bg-gradient-to-br rounded-xl flex items-center justify-center shadow-lg ${
              availabilityStatus 
                ? 'from-green-500 to-emerald-600' 
                : 'from-red-500 to-rose-600'
            }`}>
              <Calendar className="w-5 h-5 text-white" />
            </div>
            Availability
          </CardTitle>
          
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
          >
            <Badge className={`${
              availabilityStatus 
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' 
                : 'bg-gradient-to-r from-red-500 to-rose-600 text-white'
            } shadow-lg`}>
              {availabilityStatus ? (
                <CheckCircle className="w-3 h-3 mr-1" />
              ) : (
                <XCircle className="w-3 h-3 mr-1" />
              )}
              {availabilityStatus ? 'Available' : 'Unavailable'}
            </Badge>
          </motion.div>
        </div>
      </CardHeader>
      
      <CardContent className="relative">
        <div className="space-y-4">
          {availability.map((daySchedule, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-gray-50 to-blue-50/50 border border-gray-100 hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              <span className="text-sm font-semibold text-gray-800">{daySchedule.day}</span>
              <div className="flex flex-col items-end gap-1">
                {daySchedule.times.map((time, timeIndex) => (
                  <div key={timeIndex} className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-3 h-3 text-blue-500" />
                    <span className="font-medium">{time.from} - {time.to}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Quick booking hint */}
        <motion.div
          className="mt-6 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-sm text-blue-700 font-medium text-center">
            💡 Book sessions up to 2 weeks in advance
          </p>
        </motion.div>
      </CardContent>
    </Card>
  );
}
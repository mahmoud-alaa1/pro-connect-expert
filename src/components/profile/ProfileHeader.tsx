import { motion } from "framer-motion";
import { Star, Shield, Clock, MessageCircle, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "../ui/button";

interface ProfileHeaderProps {
  professional: IProfessional;
}

export function ProfileHeader({ professional }: ProfileHeaderProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase();
  };

  return (
    <Card className="bg-white/70 backdrop-blur-xl border-0 shadow-2xl shadow-blue-500/10 overflow-hidden relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-indigo-600/5"></div>

      <CardContent className="relative p-8 lg:p-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
          {/* Avatar Section */}
          <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}>
            <div className="relative">
              <Avatar className="h-32 w-32 lg:h-40 lg:w-40 ring-4 ring-white shadow-2xl shadow-blue-500/20">
                <AvatarImage
                  src={professional.avatar || undefined}
                  alt={professional.name || "Professional"}
                />
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-2xl lg:text-3xl font-bold">
                  {getInitials(professional.name || "Professional")}
                </AvatarFallback>
              </Avatar>

              {/* Status indicator */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>

              {/* Floating verification badge */}
              {professional.verified && (
                <motion.div
                  className="absolute -top-3 -right-3"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8, duration: 0.5, type: "spring" }}>
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="flex-1 space-y-6">
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                  {professional.name}
                </h1>
                {professional.verified && (
                  <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 shadow-lg w-fit">
                    <Shield className="w-3 h-3 mr-1" />
                    Verified Pro
                  </Badge>
                )}
              </div>

              <h2 className="text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {professional.title}
              </h2>

              <p className="text-lg text-gray-600 font-medium flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-500" />
                {professional.specialty}
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-3 w-full lg:grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}>
              {/* Rating */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-4 rounded-2xl border border-yellow-200/50">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-bold text-xl text-gray-900">
                    {professional.rating}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  {professional.reviewCount || professional.total_reviews}{" "}
                  reviews
                </p>
              </div>

              {/* Experience */}

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-2xl border border-blue-200/50">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span className="font-bold text-xl text-gray-900">
                    {professional.years_experience}
                  </span>
                </div>
                <p className="text-sm text-gray-600">years exp.</p>
              </div>

              {/* Sessions */}

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-2xl border border-green-200/50">
                <div className="flex items-center gap-2 mb-1">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                  <span className="font-bold text-xl text-gray-900">
                    {professional.total_sessions ?? 0}
                  </span>
                </div>
                <p className="text-sm text-gray-600">sessions</p>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}>
              <Button className="p-8 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300">
                Book Session
              </Button>

              <Button
                variant="outline"
                className="p-8 text-lg  backdrop-blur-sm text-gray-700 font-semibold rounded-2xl border border-gray-200  hover:shadow-lg transform hover:scale-105 transition-all hover:border-blue-600 duration-300">
                Send Message
              </Button>
            </motion.div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

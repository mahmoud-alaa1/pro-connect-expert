import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { IProfessionalPreview } from "@/types/professional";
import ViewProfileButton from "./ViewProfileButton";

export default function ProfessionalCard({
  professional,
}: {
  professional: IProfessionalPreview;
}) {
  console.log(professional);
  return (
    <Card className="p-6 group shadow-lg">
      <div className="flex items-start gap-4 mb-4">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400 }}>
          <div className="relative">
            <Avatar className="size-20">
              <AvatarImage src={professional.avatar || "/default-avatar.png"} />

              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {professional.verified && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="absolute z-10 bottom-0 -start-1">
                <div className="size-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg ">
                  <CheckCircle className="size-4 text-white" />
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <motion.h3
              className="font-bold text-gray-900 truncate text-lg"
              whileHover={{ color: "#2563eb" }}>
              {professional.name}
            </motion.h3>
          </div>
          <p className="text-sm text-gray-600 mb-2 font-medium">
            {professional.title}
          </p>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}>
            <Badge variant="default" className="mb-3">
              {professional.specialty}
            </Badge>
          </motion.div>
          {/* <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <Rating rating={professional.rating} size="sm" />
            <span className="font-medium">
              ({professional.total_reviews} reviews)
            </span>
          </div> */}
        </div>
      </div>

      <motion.p
        className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}>
        {professional.bio}
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-2 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}>
        {professional.languages.slice(0, 3).map((language, idx) => (
          <motion.div
            key={language}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + idx * 0.1 }}>
            <Badge variant="secondary">{language}</Badge>
          </motion.div>
        ))}
        {professional.languages.length > 3 && (
          <Badge variant="secondary">
            +{professional.languages.length - 3} more
          </Badge>
        )}
      </motion.div>

      <div className="flex items-center justify-between mb-4">
        <motion.div
          className="flex items-baseline gap-1"
          whileHover={{ scale: 1.05 }}>
          <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            {professional.hourly_rate}
            &nbsp;
            {professional.currency}
          </span>
          <span className="text-sm text-gray-500 font-medium">/hour</span>
        </motion.div>
        <div className="flex items-center gap-2">
          <ViewProfileButton id={professional.id} />
        </div>
      </div>

      <motion.div
        className="pt-4 border-t border-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <motion.div
              className={`w-2 h-2 rounded-full ${
                professional.availability_status
                  ? "bg-green-500"
                  : "bg-gray-400"
              }`}
              animate={{
                scale: professional.availability_status ? [1, 1.2, 1] : 1,
              }}
              transition={{
                duration: 2,
                repeat: professional.availability_status ? Infinity : 0,
              }}
            />
            <span
              className={`font-medium ${
                professional.availability_status
                  ? "text-green-600"
                  : "text-gray-500"
              }`}>
              {professional.availability_status ? "Available" : "Busy"}
            </span>
          </div>
          {/* <span className="text-gray-500 font-medium">
            {professional.total_sessions || 0} sessions completed
          </span> */}
        </div>
      </motion.div>
    </Card>
  );
}

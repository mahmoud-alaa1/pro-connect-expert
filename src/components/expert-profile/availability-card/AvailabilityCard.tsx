import { TAvailability, TProfessional } from "@/types/tableTypes";
import React from "react";
import AvailabilityPlaceholder from "./AvailabilityPlaceholder";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, CheckCircle, Clock, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { groupAvailability } from "@/lib/utils";

export default function AvailabilityCard({
  professional,
}: {
  professional: TProfessional;
}) {
  if (
    !professional.expert_availability ||
    (professional.expert_availability || []).length === 0
  ) {
    return <AvailabilityPlaceholder professional={professional} />;
  }
  const availabilityStatus = professional.availability_status;
  const availability = groupAvailability(professional.expert_availability);

  return (
    <Card className="bg-white/70 backdrop-blur-xl border-0 shadow-xl shadow-blue-500/10 overflow-hidden relative group">
      {/* Animated background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          availabilityStatus
            ? "from-green-500/5 via-emerald-500/5 to-teal-500/5"
            : "from-red-500/5 via-rose-500/5 to-pink-500/5"
        }`}></div>

      <CardHeader className="relative">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
            <div
              className={`w-10 h-10 bg-gradient-to-br rounded-xl flex items-center justify-center shadow-lg ${
                availabilityStatus
                  ? "from-green-500 to-emerald-600"
                  : "from-red-500 to-rose-600"
              }`}>
              <Calendar className="w-5 h-5 text-white" />
            </div>
            Availability
          </CardTitle>

          <div>
            <Badge
              className={`${
                availabilityStatus
                  ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                  : "bg-gradient-to-r from-red-500 to-rose-600 text-white"
              } shadow-lg`}>
              {availabilityStatus ? (
                <CheckCircle className="w-3 h-3 mr-1" />
              ) : (
                <XCircle className="w-3 h-3 mr-1" />
              )}
              {availabilityStatus ? "Available" : "Unavailable"}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative">
        <div className="space-y-4">
          {availability?.map((daySchedule, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-gray-50 to-blue-50/50 border border-gray-100 hover:shadow-md transition-all duration-300">
              <span className="text-sm font-semibold text-gray-800">
                {daySchedule.day}
              </span>
              <div className="flex flex-col items-end gap-1">
                {daySchedule.times.map((time, timeIndex) => (
                  <div
                    key={timeIndex}
                    className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-3 h-3 text-blue-500" />
                    <span className="font-medium">
                      {time.from} - {time.to}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick booking hint */}
        <div className="mt-6 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
          <p className="text-sm text-blue-700 font-medium text-center">
            💡 Book sessions up to 2 weeks in advance
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

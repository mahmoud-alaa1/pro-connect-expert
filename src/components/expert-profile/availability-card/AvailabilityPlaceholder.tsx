import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TProfessional } from "@/types/tableTypes";
import { Calendar, CheckCircle, Clock, Hourglass, MessageSquare, XCircle } from "lucide-react";

export default function AvailabilityPlaceholder({
  professional,
}: {
  professional: TProfessional;
}) {
  const availability_status = professional.availability_status;
  return (
    <Card className="bg-white/70 backdrop-blur-xl border-0 shadow-xl shadow-blue-500/10 overflow-hidden relative group">
      {/* Animated background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          availability_status
            ? "from-green-500/5 via-emerald-500/5 to-teal-500/5"
            : "from-red-500/5 via-rose-500/5 to-pink-500/5"
        }`}></div>

      <CardHeader className="relative">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
            <div
              className={`w-10 h-10 bg-gradient-to-br rounded-xl flex items-center justify-center shadow-lg ${
                availability_status
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
                availability_status
                  ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                  : "bg-gradient-to-r from-red-500 to-rose-600 text-white"
              } shadow-lg`}>
              {availability_status ? (
                <CheckCircle className="w-3 h-3 mr-1" />
              ) : (
                <XCircle className="w-3 h-3 mr-1" />
              )}
              {availability_status ? "Available" : "Unavailable"}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative">
        <div className="text-center py-8">
          <div
            className={`w-16 h-16 bg-gradient-to-br rounded-full flex items-center justify-center mx-auto mb-4 ${
              availability_status
                ? "from-green-100 to-emerald-100"
                : "from-red-100 to-rose-100"
            }`}>
            {availability_status ? (
              <MessageSquare className="w-8 h-8 text-green-500" />
            ) : (
              <Hourglass className="w-8 h-8 text-red-500" />
            )}
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            {availability_status ? "Flexible Schedule" : "Currently Busy"}
          </h3>
          <p className="text-gray-600 mb-4 text-sm">
            {availability_status
              ? "Contact directly to discuss scheduling and availability."
              : "This professional is currently unavailable for new bookings."}
          </p>
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r rounded-full border ${
              availability_status
                ? "from-green-50 to-emerald-50 border-green-200/50"
                : "from-red-50 to-rose-50 border-red-200/50"
            }`}>
            <Clock
              className={`w-3 h-3 ${
                availability_status ? "text-green-600" : "text-red-600"
              }`}
            />
            <span
              className={`text-xs font-medium ${
                availability_status ? "text-green-700" : "text-red-700"
              }`}>
              {availability_status
                ? "Contact for scheduling"
                : "Check back later"}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

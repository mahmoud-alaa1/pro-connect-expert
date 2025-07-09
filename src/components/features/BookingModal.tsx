import React, { useState } from "react";
import { Calendar, Clock, DollarSign, MessageCircle } from "lucide-react";
import { Modal } from "../ui/modal";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Avatar } from "../ui/avatar";
import { IProfessional } from "@/types/user";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  professional: IProfessional | null;
  onBookingConfirm: (bookingData: any) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  professional,
  onBookingConfirm,
}) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [duration, setDuration] = useState("60");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  if (!professional) return null;

  const handleBooking = async () => {
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    onBookingConfirm({
      professionalId: professional.id,
      date: selectedDate,
      time: selectedTime,
      duration: parseInt(duration),
      notes,
      amount: professional.hourly_rate * (parseInt(duration) / 60),
    });

    setLoading(false);
    onClose();
  };

  const totalAmount = professional.hourly_rate * (parseInt(duration) / 60);

  const availableSlots = [
    "09:00",
    "10:00",
    "11:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Book a Session" size="lg">
      <div className="space-y-6">
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
          <Avatar src={professional.avatar} alt={professional.name} size="lg" />
          <div>
            <h3 className="font-semibold text-gray-900">{professional.name}</h3>
            <p className="text-sm text-gray-600">{professional.title}</p>
            <p className="text-sm text-blue-600 font-medium">
              {professional.currency}
              {professional.hourly_rate}/hour
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="inline w-4 h-4 mr-1" />
              Select Date
            </label>
            <Input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Clock className="inline w-4 h-4 mr-1" />
              Select Time
            </label>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Choose a time</option>
              {availableSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Duration (minutes)
          </label>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="30">30 minutes</option>
            <option value="60">60 minutes</option>
            <option value="90">90 minutes</option>
            <option value="120">120 minutes</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MessageCircle className="inline w-4 h-4 mr-1" />
            Notes (optional)
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Any specific topics or questions you'd like to discuss?"
          />
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-5 h-5 text-blue-600" />
            <span className="font-medium text-blue-900">Session Summary</span>
          </div>
          <div className="space-y-1 text-sm text-blue-800">
            <div className="flex justify-between">
              <span>Duration:</span>
              <span>{duration} minutes</span>
            </div>
            <div className="flex justify-between">
              <span>Rate:</span>
              <span>
                {professional.currency}
                {professional.hourly_rate}/hour
              </span>
            </div>
            <div className="flex justify-between font-semibold border-t border-blue-200 pt-2">
              <span>Total:</span>
              <span>
                {professional.currency}
                {totalAmount.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={handleBooking}
            loading={loading}
            disabled={!selectedDate || !selectedTime}
            className="flex-1">
            Confirm Booking
          </Button>
        </div>
      </div>
    </Modal>
  );
};

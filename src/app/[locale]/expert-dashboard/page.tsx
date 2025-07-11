"use client";
import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Star,
  DollarSign,
  BookOpen,
  Settings,
  Eye,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useAuth } from "@/store/useAuthStore";
import { Button } from "@/components/ui/button";

const Page: React.FC = () => {
  const user = useAuth((state) => state.user);
  const [selectedPeriod, setSelectedPeriod] = useState("week");

  const upcomingSessions = [
    {
      id: 1,
      clientName: "أحمد محمد",
      topic: "مراجعة استراتيجية التسويق",
      date: "2025-01-15",
      time: "10:00 ص",
      duration: "60 دقيقة",
      type: "مكالمة فيديو",
      rate: 150,
    },
    {
      id: 2,
      clientName: "سارة أحمد",
      topic: "تخطيط التحول الرقمي",
      date: "2025-01-16",
      time: "2:00 م",
      duration: "45 دقيقة",
      type: "مكالمة هاتفية",
      rate: 150,
    },
  ];

  const recentSessions = [
    {
      id: 1,
      clientName: "محمد عبدالله",
      topic: "استراتيجية نمو الأعمال",
      date: "2025-01-12",
      duration: "60 دقيقة",
      rating: 5,
      earnings: 150,
      review: "رؤى ممتازة ونصائح قابلة للتطبيق!",
    },
    {
      id: 2,
      clientName: "ليلى حسن",
      topic: "تحليل السوق",
      date: "2025-01-10",
      duration: "45 دقيقة",
      rating: 5,
      earnings: 112.5,
      review: "تحليل شامل جداً وتوصيات رائعة.",
    },
  ];

  const stats = [
    {
      label: "إجمالي الأرباح",
      value: "3,420 دولار",
      change: "+12%",
      icon: DollarSign,
      color: "text-green-600",
      bg: "bg-green-100",
      changeColor: "text-green-600",
    },
    {
      label: "جلسات هذا الشهر",
      value: "28",
      change: "+8%",
      icon: BookOpen,
      color: "text-primary-600",
      bg: "bg-primary-100",
      changeColor: "text-green-600",
    },
    {
      label: "متوسط التقييم",
      value: "4.9",
      change: "0%",
      icon: Star,
      color: "text-yellow-600",
      bg: "bg-yellow-100",
      changeColor: "text-gray-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                لوحة تحكم الخبير
              </h1>
              <p className="text-gray-600 mt-2">
                مرحباً بك مجدداً، {user?.full_name}! إليك نظرة عامة على أدائك
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option value="week">هذا الأسبوع</option>
                <option value="month">هذا الشهر</option>
                <option value="quarter">هذا الربع</option>
              </select>
              <Link
                href="/settings"
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center">
                <Settings className="h-4 w-4 mr-2" />
                الإعدادات
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.bg} ${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <span className={`text-sm font-medium ${stat.changeColor}`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-sm font-medium text-gray-600">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Sessions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">
                    الجلسات القادمة
                  </h2>
                  <span className="text-sm text-gray-500">
                    {upcomingSessions.length} جلسة
                  </span>
                </div>
              </div>
              <div className="p-6">
                {upcomingSessions.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingSessions.map((session) => (
                      <div
                        key={session.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">
                            {session.clientName}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {session.topic}
                          </p>
                          <div className="flex items-center space-x-4 mt-2">
                            <span className="text-sm text-gray-500 flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {session.date}
                            </span>
                            <span className="text-sm text-gray-500 flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {session.time} ({session.duration})
                            </span>
                            <span className="text-sm font-medium text-green-600">
                              {session.rate} دولار
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                            {session.type}
                          </span>
                          <button className="text-primary-600 hover:text-primary-700 font-medium">
                            انضمام
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">لا توجد جلسات قادمة</p>
                  </div>
                )}
              </div>
            </div>

            {/* Recent Sessions & Reviews */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900">
                  الجلسات الأخيرة والمراجعات
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentSessions.map((session) => (
                    <div key={session.id} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {session.clientName}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {session.topic}
                          </p>
                          <p className="text-sm text-gray-500">
                            {session.date} • {session.duration}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center mb-1">
                            {[...Array(session.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 text-yellow-400 fill-current"
                              />
                            ))}
                          </div>
                          <span className="text-lg font-semibold text-green-600">
                            +{session.earnings} دولار
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 bg-white p-3 rounded border-l-4 border-primary-200">
                        {session.review}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">
                  الإجراءات السريعة
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <Button className="flex items-center justify-between w-full p-5 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                    <Link href="/settings" className="flex items-center">
                      <Settings className="size-5 mr-3" />
                      &nbsp; تحديث الملف الشخصي
                    </Link>
                  </Button>
                  <Button className="flex items-center justify-between w-full p-5 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                    <Link href="/profile" className="flex items-center">
                      <Eye className="size-5 mr-3" />
                      &nbsp;عرض الملف الشخصي العام
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Earnings Summary */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">
                  ملخص الأرباح
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">هذا الأسبوع</span>
                    <span className="text-lg font-semibold text-gray-900">
                      875 دولار
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">هذا الشهر</span>
                    <span className="text-lg font-semibold text-gray-900">
                      3,420 دولار
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">الرصيد المتاح</span>
                    <span className="text-lg font-semibold text-green-600">
                      2,150 دولار
                    </span>
                  </div>
                  <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                    طلب سحب الأموال
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

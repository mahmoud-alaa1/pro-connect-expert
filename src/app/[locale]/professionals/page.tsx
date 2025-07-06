"use client";

import React, { useState } from "react";
import {
  Search,
  Filter,
  Star,
  MapPin,
  Clock,
  Users,
  ChevronDown,
} from "lucide-react";
import { Link } from "@/i18n/navigation";

const Professionals: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("rating");
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: "all", name: "جميع التخصصات" },
    { id: "marketing", name: "التسويق والمبيعات" },
    { id: "finance", name: "المالية والمحاسبة" },
    { id: "legal", name: "الاستشارات القانونية" },
    { id: "tech", name: "التكنولوجيا" },
    { id: "business", name: "استراتيجية الأعمال" },
    { id: "hr", name: "الموارد البشرية" },
  ];

  const experts = [
    {
      id: 1,
      name: "د. سارة أحمد",
      specialty: "استراتيجية التسويق الرقمي",
      category: "marketing",
      rating: 4.9,
      reviewCount: 127,
      hourlyRate: 150,
      location: "الرياض, السعودية",
      avatar:
        "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      verified: true,
      responseTime: "أقل من ساعة",
      totalSessions: 450,
      bio: "مديرة تسويق سابقة في شركات عالمية كبرى. خبيرة في التحول الرقمي والتسويق النمو.",
      tags: [
        "تحسين محركات البحث",
        "وسائل التواصل الاجتماعي",
        "التحليلات",
        "الاستراتيجية",
      ],
      availability: "متاحة اليوم",
    },
    {
      id: 2,
      name: "محمد علي",
      specialty: "التخطيط المالي والتحليل",
      category: "finance",
      rating: 4.8,
      reviewCount: 89,
      hourlyRate: 180,
      location: "دبي, الإمارات",
      avatar:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      verified: true,
      responseTime: "أقل من ساعتين",
      totalSessions: 320,
      bio: "محاسب قانوني مع خبرة 15+ سنة في التمويل الشركات وتحليل الاستثمارات.",
      tags: [
        "النمذجة المالية",
        "الاستثمار",
        "التخطيط الضريبي",
        "الدمج والاستحواذ",
      ],
      availability: "متاح غداً",
    },
    {
      id: 3,
      name: "إميلي رودريجز",
      specialty: "القانون الشركات والامتثال",
      category: "legal",
      rating: 5.0,
      reviewCount: 156,
      hourlyRate: 250,
      location: "القاهرة, مصر",
      avatar:
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      verified: true,
      responseTime: "أقل من 30 دقيقة",
      totalSessions: 280,
      bio: "شريكة أول متخصصة في حوكمة الشركات والامتثال التنظيمي.",
      tags: ["قانون الشركات", "الامتثال", "العقود", "إدارة المخاطر"],
      availability: "متاحة اليوم",
    },
    {
      id: 4,
      name: "داوود بارك",
      specialty: "هندسة السحابة والتشغيل",
      category: "tech",
      rating: 4.9,
      reviewCount: 203,
      hourlyRate: 200,
      location: "الكويت, الكويت",
      avatar:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      verified: true,
      responseTime: "أقل من ساعة",
      totalSessions: 380,
      bio: "مهندس رئيسي سابق في شركات التكنولوجيا الرائدة. خبير في حلول السحابة القابلة للتوسع.",
      tags: ["AWS", "Kubernetes", "CI/CD", "الخدمات المصغرة"],
      availability: "متاح هذا الأسبوع",
    },
    {
      id: 5,
      name: "ليزا طومسون",
      specialty: "تطوير الأعمال والنمو",
      category: "business",
      rating: 4.7,
      reviewCount: 94,
      hourlyRate: 160,
      location: "الدوحة, قطر",
      avatar:
        "https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      verified: true,
      responseTime: "أقل من 3 ساعات",
      totalSessions: 210,
      bio: "نائب رئيس تطوير الأعمال مع سجل حافل في تطوير الشركات الناشئة للاكتتاب العام.",
      tags: ["استراتيجية النمو", "الشراكات", "المبيعات", "دخول السوق"],
      availability: "متاحة غداً",
    },
    {
      id: 6,
      name: "جيمس ويلسون",
      specialty: "استراتيجية الموارد البشرية وإدارة المواهب",
      category: "hr",
      rating: 4.8,
      reviewCount: 78,
      hourlyRate: 140,
      location: "الرباط, المغرب",
      avatar:
        "https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      verified: true,
      responseTime: "أقل من ساعتين",
      totalSessions: 190,
      bio: "مدير موارد بشرية سابق مع خبرة في التطوير التنظيمي وتحول الثقافة.",
      tags: ["التوظيف", "إدارة الأداء", "الثقافة", "القيادة"],
      availability: "متاح اليوم",
    },
  ];

  const filteredExperts = experts.filter((expert) => {
    const matchesSearch =
      expert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expert.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expert.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "all" || expert.category === selectedCategory;

    const matchesPrice =
      priceRange === "all" ||
      (priceRange === "under-100" && expert.hourlyRate < 100) ||
      (priceRange === "100-200" &&
        expert.hourlyRate >= 100 &&
        expert.hourlyRate <= 200) ||
      (priceRange === "over-200" && expert.hourlyRate > 200);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedExperts = [...filteredExperts].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "price-low":
        return a.hourlyRate - b.hourlyRate;
      case "price-high":
        return b.hourlyRate - a.hourlyRate;
      case "reviews":
        return b.reviewCount - a.reviewCount;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            ابحث عن مختصصين
            <span className="text-primary"> موثوقين</span>
          </h1>
          <p className="text-gray-600">
            تواصل مع مختصين موثوقين في مجالات مختلفة
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="ابحث بالاسم أو التخصص أو المهارات..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* Filter Toggle (Mobile) */}
          <div className="md:hidden mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-between w-full p-3 bg-gray-50 rounded-lg">
              <span className="flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                مرشحات
              </span>
              <ChevronDown
                className={`h-5 w-5 transform ${
                  showFilters ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* Filters */}
          <div className={`${showFilters ? "block" : "hidden"} md:block`}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  التخصص
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500">
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  نطاق السعر
                </label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option value="all">جميع الأسعار</option>
                  <option value="under-100">أقل من 100 دولار/ساعة</option>
                  <option value="100-200">100-200 دولار/ساعة</option>
                  <option value="over-200">أكثر من 200 دولار/ساعة</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ترتيب حسب
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option value="rating">الأعلى تقييماً</option>
                  <option value="reviews">الأكثر مراجعة</option>
                  <option value="price-low">السعر: من الأقل للأعلى</option>
                  <option value="price-high">السعر: من الأعلى للأقل</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                    setPriceRange("all");
                    setSortBy("rating");
                  }}
                  className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                  مسح المرشحات
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            تم العثور على {sortedExperts.length} خبير
            {sortedExperts.length !== 1 ? "" : ""}
          </h2>
        </div>

        {/* Expert Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {sortedExperts.map((expert) => (
            <div
              key={expert.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <img
                      src={expert.avatar}
                      alt={expert.name}
                      className="w-16 h-16 rounded-full"
                    />
                    {expert.verified && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {expert.name}
                    </h3>
                    <p className="text-primary ">{expert.specialty}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        <span className="font-medium">{expert.rating}</span>
                        <span className="text-gray-500 ml-1">
                          ({expert.reviewCount})
                        </span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{expert.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">
                    {expert.hourlyRate} دولار
                  </div>
                  <div className="text-sm text-gray-500">في الساعة</div>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{expert.bio}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {expert.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>يرد خلال {expert.responseTime}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{expert.totalSessions} جلسة</span>
                </div>
                <div className="flex items-center">
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      expert.availability === "متاحة اليوم" ||
                      expert.availability === "متاح اليوم"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                    {expert.availability}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <Link
                  href={`/expert/${expert.id}`}
                  className="flex-1 bg-primary text-white text-center px-4 py-2 rounded-lg hover:bg-primary transition-colors">
                  عرض الملف الشخصي
                </Link>
                <Link
                  href={`/booking/${expert.id}`}
                  className="flex-1 bg-white text-primary text-center px-4 py-2 rounded-lg border-2 border-primary hover:bg-primary-50 transition-colors">
                  حجز جلسة
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {sortedExperts.length === 0 && (
          <div className="text-center py-12">
            <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              لم يتم العثور على خبراء
            </h3>
            <p className="text-gray-500 mb-4">
              لا توجد نتائج تطابق البحث الحالي
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setPriceRange("all");
              }}
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
              مسح جميع المرشحات
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Professionals;

import { IProfessional, ISession, ITransaction } from "@/types/user";

export const mockProfessionals: IProfessional[] = [
  {
    id: "1",
    user_id: "user1",
    name: "Dr. Sarah Johnson",
    avatar:
      "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Senior Business Coach",
    specialty: "Business Coaching",
    bio: "With over 10 years of experience helping entrepreneurs scale their businesses, I specialize in strategic planning, team building, and operational efficiency.",
    rating: 4.8,
    hourly_rate: 120,
    currency: "$",
    verified: true,
    total_sessions: 156,
    total_reviews: 89,
    availability_status: true,
    availability: [
      { day: "Monday", times: [{ from: "09:00", to: "17:00" }] },
      { day: "Tuesday", times: [{ from: "09:00", to: "17:00" }] },
      { day: "Wednesday", times: [{ from: "09:00", to: "17:00" }] },
    ],
    years_experience: 10,
    languages: ["English", "Spanish", "French"],
    portfolio_urls: ["https://example.com"],
    certificates_urls: ["https://example.com"],
    certifications: ["Certified Business Coach", "MBA"],
    experience: [
      {
        title: "Senior Business Consultant",
        company: "McKinsey & Company",
        duration: "2018-2022",
        description: "Led strategic initiatives for Fortune 500 companies",
      },
    ],
    education: [
      {
        degree: "MBA",
        institution: "Harvard Business School",
        year: "2018",
      },
    ],
    created_at: "2023-01-15T10:00:00Z",
  },
  {
    id: "2",
    user_id: "user2",
    name: "Michael Chen",
    avatar:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Full-Stack Developer & Mentor",
    specialty: "Technical Mentoring",
    bio: "Passionate developer with 8 years of experience in React, Node.js, and cloud technologies. I love helping junior developers grow their skills and advance their careers.",
    rating: 4.9,
    hourly_rate: 85,
    currency: "$",
    verified: true,
    total_sessions: 234,
    total_reviews: 156,
    availability_status: true,
    availability: [
      { day: "Monday", times: [{ from: "18:00", to: "22:00" }] },
      { day: "Tuesday", times: [{ from: "18:00", to: "22:00" }] },
      { day: "Saturday", times: [{ from: "09:00", to: "17:00" }] },
    ],
    years_experience: 8,
    languages: ["English", "Chinese", "Japanese"],
    portfolio_urls: ["https://github.com/michaelchen"],
    certificates_urls: ["https://example.com"],
    certifications: [
      "AWS Certified Solutions Architect",
      "Google Cloud Professional",
    ],
    experience: [
      {
        title: "Senior Software Engineer",
        company: "Google",
        duration: "2020-2023",
        description:
          "Built scalable web applications used by millions of users",
      },
    ],
    education: [
      {
        degree: "Computer Science",
        institution: "Stanford University",
        year: "2016",
      },
    ],
    created_at: "2023-02-20T10:00:00Z",
  },
  {
    id: "3",
    user_id: "user3",
    name: "Elena Rodriguez",
    avatar:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Career Counselor & Life Coach",
    specialty: "Career Counseling",
    bio: "Helping professionals navigate career transitions and achieve work-life balance. Specialized in leadership development and personal growth strategies.",
    rating: 4.7,
    hourly_rate: 90,
    currency: "$",
    verified: true,
    total_sessions: 189,
    total_reviews: 102,
    availability_status: true,
    availability: [
      { day: "Monday", times: [{ from: "10:00", to: "16:00" }] },
      { day: "Wednesday", times: [{ from: "10:00", to: "16:00" }] },
      { day: "Friday", times: [{ from: "10:00", to: "16:00" }] },
    ],
    years_experience: 12,
    languages: ["English", "Spanish", "Portuguese"],
    portfolio_urls: ["https://elenacoaching.com"],
    certificates_urls: ["https://example.com"],
    certifications: ["Certified Career Counselor", "Life Coach Certification"],
    experience: [
      {
        title: "HR Director",
        company: "Microsoft",
        duration: "2015-2021",
        description: "Managed talent acquisition and development programs",
      },
    ],
    education: [
      {
        degree: "Psychology",
        institution: "University of California, Berkeley",
        year: "2012",
      },
    ],
    created_at: "2023-03-10T10:00:00Z",
  },
];

export const mockSessions: ISession[] = [
  {
    id: "1",
    professional_id: "1",
    professional_name: "Dr. Sarah Johnson",
    professional_avatar:
      "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400",
    date: "2024-01-15",
    time: "10:00",
    duration: 60,
    status: "confirmed",
    amount: 120,
    currency: "$",
    notes: "Discuss business scaling strategies",
  },
  {
    id: "2",
    professional_id: "2",
    professional_name: "Michael Chen",
    professional_avatar:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
    date: "2024-01-12",
    time: "19:00",
    duration: 90,
    status: "completed",
    amount: 127.5,
    currency: "$",
    notes: "React performance optimization",
  },
  {
    id: "3",
    professional_id: "3",
    professional_name: "Elena Rodriguez",
    professional_avatar:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
    date: "2024-01-18",
    time: "14:00",
    duration: 60,
    status: "pending",
    amount: 90,
    currency: "$",
    notes: "Career transition planning",
  },
];

export const mockTransactions: ITransaction[] = [
  {
    id: "1",
    session_id: "2",
    amount: 127.5,
    currency: "$",
    date: "2024-01-12",
    status: "completed",
    professional_name: "Michael Chen",
  },
  {
    id: "2",
    session_id: "4",
    amount: 120,
    currency: "$",
    date: "2024-01-10",
    status: "completed",
    professional_name: "Dr. Sarah Johnson",
  },
];

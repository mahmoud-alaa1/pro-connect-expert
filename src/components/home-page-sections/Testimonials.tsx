import { Star } from "lucide-react";
import Image from "next/image";
const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechCorp",
    content:
      "ProConnect helped us find the perfect digital marketing consultant. The process was seamless and the results exceeded our expectations.",
    avatar:
      "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
  {
    name: "Michael Rodriguez",
    role: "Business Consultant",
    company: "Independent",
    content:
      "As an expert on the platform, I've been able to grow my consulting practice significantly. The booking system is intuitive and reliable.",
    avatar:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
  {
    name: "Emily Watson",
    role: "Startup Founder",
    company: "InnovateLab",
    content:
      "The quality of experts on ProConnect is outstanding. We found our legal advisor and financial consultant here.",
    avatar:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
];
export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by thousands of professionals worldwide
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {testimonial.content}
              </p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  height={48}
                  width={48}
                  className="rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

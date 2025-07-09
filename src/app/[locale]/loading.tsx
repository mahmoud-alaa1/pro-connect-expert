import Logo from "@/components/Logo";
import SiteName from "@/components/SiteName";

export default function Loader() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 flex items-center justify-center">
      <div className="text-center animate-fade-in-scale">
        <div className="mb-8 animate-bounce-slow">
          <div className="w-16 h-16  rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Logo size={64} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            <SiteName />
          </h1>
        </div>

        {/* Loading spinner */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-spin-slow" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-primary animate-spin-fast" />
        </div>
      </div>
    </div>
  );
}

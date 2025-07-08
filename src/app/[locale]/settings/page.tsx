import ExpertBasicProfileForm from "@/components/forms/profile/expert-profile/ExpertProfileForm";
import ProfileBasicInfoForm from "@/components/forms/profile/name/ProfileBasicInfoForm";
import { ProfileImageForm } from "@/components/forms/profile/ProfileAvatar/ProfileImageForm";

export default function page() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Profile Information
        </h2>
      </div>

      {/* Profile Photo */}
      <ProfileImageForm />

      {/* Basic Information */}
      <div className="flex items-center gap-4 mb-4">
        <p className="text-muted-foreground whitespace-nowrap">
          Basic Information
        </p>
        <div className="h-px bg-border flex-1" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <ProfileBasicInfoForm />

        {/* <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div> */}
      </div>

      <div className="flex items-center gap-4 mb-4">
        <p className="text-muted-foreground whitespace-nowrap">Expert Info</p>
        <div className="h-px bg-border flex-1" />
      </div>
      <ExpertBasicProfileForm />

      <div className="flex justify-end">
        <button
          disabled={false}
          className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 disabled:opacity-50 transition-colors flex items-center">
          Save Changes
        </button>
      </div>
    </div>
  );
}

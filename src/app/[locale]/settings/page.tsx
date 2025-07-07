import { Camera } from "lucide-react";

export default function page() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Profile Information
        </h2>
      </div>

      {/* Profile Photo */}
      <div className="mb-8">
        <div className="flex items-center space-x-6">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
              alt="Profile"
              className="w-20 h-20 rounded-full"
            />
            <button className="absolute bottom-0 right-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-white hover:bg-primary-700">
              <Camera className="h-3 w-3" />
            </button>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">Profile Photo</h3>
            <p className="text-sm text-gray-500">Update your profile picture</p>
            <button className="mt-2 text-sm text-primary-600 hover:text-primary-700">
              Change Photo
            </button>
          </div>
        </div>
      </div>

      {/* Basic Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
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
        </div>
      </div>

      {/* Bio */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Professional Bio
        </label>
        <textarea
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="Tell clients about your expertise and experience..."
        />
      </div>

      {/* Expert-specific fields
          {user?.type === "expert" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hourly Rate ($)
                  </label>
                  <input
                    type="number"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Specialties
                </label>
                <div className="flex flex-wrap gap-2">
                  {"specialties"}
                  <button className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200">
                    + Add Specialty
                  </button>
                </div>
              </div>
            </>
          )} */}

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

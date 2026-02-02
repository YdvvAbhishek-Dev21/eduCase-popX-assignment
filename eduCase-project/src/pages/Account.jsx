import { useContext } from "react";
import MobileLayout from "../components/MobileLayout";
import { UserContext } from "../context/UserContext";
import { FiCamera } from "react-icons/fi";

export default function Account() {
  const { user } = useContext(UserContext);

  return (
    <MobileLayout>
      {/* Header */}
      <div className="bg-white p-4">
        <h1 className="font-normal text-lg">Account Settings</h1>
      </div>

      {/* Solid divider */}
      <div className="w-full h-px bg-gray-300" />

      {/* Gray section (FULL WIDTH) */}
      <div className="bg-gray-50">
        <div className="px-6 py-6">
          <div className="flex items-center gap-4 mb-4 relative">
            <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-white text-xl font-bold relative">
              {user?.name ? user.name.charAt(0) : "U"}
              <div className="absolute bottom-0 right-0 w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center">
                <FiCamera className="text-purple-500 text-xs" />
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold">
                {user?.name || "Abhi Y"}
              </h2>
              <p className="text-gray-500 text-sm">
                {user?.email || "Abhishek@gmail.com"}
              </p>
            </div>
          </div>

          <p className="text-gray-600 text-sm">
            {user?.intro ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is your account page where you can see your profile information."}
          </p>
        </div>
      </div>

      <div
        className="h-px"
        style={{
          background:
            "repeating-linear-gradient(to right, #e5e7eb 0 6px, transparent 6px 16px)",
        }}
      />
    </MobileLayout>
  );
}

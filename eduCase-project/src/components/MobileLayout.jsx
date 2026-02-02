export default function MobileLayout({ children }) {
  return (
    <div className="min-h-screen flex justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md min-h-screen bg-white p-6 rounded-md shadow flex flex-col">
        {children}
      </div>
    </div>
  );
}

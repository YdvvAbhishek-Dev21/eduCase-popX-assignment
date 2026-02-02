export default function Input({ label, type = "text", value, onChange }) {
  return (
    <div className="relative mb-6">
      <span
        className="
          absolute
          -top-2
          left-3
          bg-white
          px-1
          text-xs
          text-indigo-600
          z-10
        "
      >
        {label}
      </span>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={label}
        className="
          w-full
          border border-gray-300
          rounded
          px-3 py-3
          text-sm
          placeholder-gray-300
          focus:outline-none
          focus:border-purple-600
        "
      />
    </div>
  );
}

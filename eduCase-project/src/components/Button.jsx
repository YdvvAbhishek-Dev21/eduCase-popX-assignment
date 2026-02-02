export default function Button({ text, onClick, secondary, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-2 rounded-md font-semibold ${
        secondary
          ? // ? "bg-gray-300 text-gray-800 hover:bg-gray-400"
            "bg-purple-600/50 text-black/70 hover:bg-purple-500"
          : "bg-blue-500 text-white hover:bg-blue-700"
      } disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {text}
    </button>
  );
}

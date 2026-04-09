import { IoIosFlash } from "react-icons/io";
export default function ProgramCard({ title, label, items, dark }) {
  return (
    <div className="relative group">

      {/* Electric Border */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
      >
        <rect
          x="2"
          y="2"
          width="calc(100% - 4)"
          height="calc(100% - 4)"
          rx="18"
          className="electric-border-stroke"
        />
      </svg>

      {/* Card */}
      <div
        className={`relative rounded-2xl p-8 text-left h-full ${
          dark ? "bg-[#1f2a44] text-white" : "bg-white text-gray-800"
        }`}
      >
        <p className="text-orange-500 text-sm font-semibold mb-2">{label}</p>

        <h3 className="text-2xl font-bold mb-4">{title}</h3>

        <ul className="space-y-3 mb-8">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-orange-500"><IoIosFlash size={20} /></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <button
          className={`mt-auto px-6 py-3 rounded-lg font-medium transition ${
            dark
              ? "border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white"
              : "bg-orange-500 text-white hover:bg-orange-600"
          }`}
        >
          Learn More →
        </button>
      </div>

    </div>
  );
}
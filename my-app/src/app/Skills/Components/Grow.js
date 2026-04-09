"use client";

import { CircleCheck , Briefcase, Sparkles } from "lucide-react";

const features = [
  "One-on-one coaching sessions focused on your unique leadership journey",
  "Self-discovery exercises to uncover your authentic leadership style",
  "Practical frameworks for confident decision-making and communication",
  "Emotional intelligence training to strengthen professional relationships",
  "Tools to navigate challenges and lead with purpose and clarity",
];

const companies = [
  { name: "Tech Innovations", type: "Technology" },
  { name: "Global Finance Corp", type: "Finance" },
  { name: "Green Energy Solutions", type: "Sustainability" },
  { name: "Healthcare Plus", type: "Healthcare" },
  { name: "Creative Studios", type: "Media" },
  { name: "Retail Leaders", type: "Retail" },
];

export default function Grow() {
  return (
    <section className="bg-[#f7f6f5] py-6">
      <div className="max-w-7xl mx-auto w-11/12">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold slide-in">
            Growing as a Professional with Spark
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto slide-in">
            Discover why ambitious professionals choose Spark to elevate their leadership journey.
          </p>
        </div>

        {/* ================= TOP GRID ================= */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">

          {/* LEFT: FEATURES */}
          <div className="space-y-5">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 slide-in"
              >
                <CircleCheck  className="text-orange-500 mt-1" size={18} />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          {/* RIGHT: CARD */}
          <div className="bg-linear-to-br from-[#1f2a44] to-[#2d355b] text-white p-8 md:p-10 rounded-3xl shadow-lg slide-left">
            <div className="mb-4">
              <span className="text-orange-500 text-3xl"><Sparkles size={35}></Sparkles> </span>
            </div>

            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Why Choose Personal Leadership Training?
            </h3>

            <p className="text-gray-300 leading-relaxed">
             Our Personal Leadership Training is designed to unlock your full potential as a leader. Through personalized coaching, hands-on workshops, and proven methodologies, you'll gain the self-awareness, confidence, and skills to lead with clarity and purpose, whether you're stepping into your first leadership role or preparing for greater responsibilities.
            </p>
          </div>
        </div>

        {/* ================= PARTNER SECTION ================= */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold slide-in">
            Our Partner <span className="text-orange-500">Companies</span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto slide-in">
            We work with leading organizations that invest in developing their young talent through our leadership programs.
          </p>
        </div>

        {/* ================= COMPANY CARDS ================= */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition slide-in"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
                <Briefcase className="text-orange-500" size={18} />
              </div>

              <h4 className="text-sm font-semibold text-gray-800">
                {company.name}
              </h4>

              <p className="text-xs text-gray-500 mt-1">
                {company.type}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
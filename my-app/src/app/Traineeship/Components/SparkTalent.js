"use client";

import { CircleCheck , Briefcase, Sparkles } from "lucide-react";

const features = [
  "Access to exclusive job opportunities at leading companies",
  "Personalized matching based on your skills and career goals",
  "Ongoing support throughout your traineeship journey",
  "Elevate your professional skills through our leadership development program",
  "Build a network of peers and industry professionals",
];

const companies = [
  { name: "Tech Innovations", type: "Technology" },
  { name: "Global Finance Corp", type: "Finance" },
  { name: "Green Energy Solutions", type: "Sustainability" },
  { name: "Healthcare Plus", type: "Healthcare" },
  { name: "Creative Studios", type: "Media" },
  { name: "Retail Leaders", type: "Retail" },
];

export default function SparkTalent() {
  return (
    <section className="bg-[#f7f6f5] py-6">
      <div className="max-w-7xl mx-auto w-11/12">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold slide-in">
            Become a <span className="text-orange-500">Spark Talent</span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto slide-in">
            Join our exclusive talent pool and get matched with top organizations
            looking for driven professionals like you.
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
              Why Choose Spark?
            </h3>

            <p className="text-gray-300 leading-relaxed">
              At Spark, we don’t just place you in a job, we invest in your growth.
              Our unique approach combines practical experience with personal
              development, ensuring you’re not just employable, but exceptional.
            </p>
          </div>
        </div>

        {/* ================= PARTNER SECTION ================= */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold slide-in">
            Our Partner <span className="text-orange-500">Companies</span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto slide-in">
            We collaborate with industry-leading organizations across various
            sectors to provide diverse traineeship opportunities.
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
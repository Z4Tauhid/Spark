"use client";

import { CircleCheck , GraduationCap  } from "lucide-react";

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

export default function Leadership() {
  return (
    <section className="bg-[#f7f6f5] py-6">
      <div className="max-w-7xl mx-auto w-11/12">

        
       {/* ================= TOP GRID ================= */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT: FEATURES */}
          <div className="space-y-5">
             <h2 className="text-3xl md:text-5xl font-bold slide-in">
            Spark Personal <span className="text-orange-500">Leadership </span> Training
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto slide-in">
           Every Spark trainee receives our signature personal leadership training program. This isn't just about professional skills, it's about discovering your authentic leadership style and unlocking your full potential.
          </p>
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
          <div className="bg-orange-500 text-white p-8 md:p-10 rounded-3xl shadow-lg slide-left">
            <div className="mb-4">
              <span className="text-white text-3xl"><GraduationCap size={40}></GraduationCap > </span>
            </div>

            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Grow Beyond Your Title
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Our leadership training helps you develop the confidence, communication skills, and strategic thinking needed to excel in any role. Whether you aim to lead teams or become an expert in your field, we prepare you for success.


            </p>
          </div>
        </div>

      
        

      </div>
    </section>
  );
}
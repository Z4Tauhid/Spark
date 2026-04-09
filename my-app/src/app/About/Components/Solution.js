
import Image from "next/image";

import { Target  , ChartLine  , Users  , Award } from "lucide-react";



const impacts = [
  {
    icon: Target  ,
    title: "Talent Identification & Selection",
    text: "Recruitment campaigns, psychometric assessments, and interviews to match Gen Z professionals with employers."
  },
  {
    icon: ChartLine ,
    title: "Project-Based Work",
    text: "Co-created assignments aligned with both employer needs and Gen Z values."
  },
  {
    icon: Users ,
    title: "Onboarding & Inclusivity Support",
    text: "Structured integration processes and training to bridge generational gaps."
  },
  {
    icon: Award ,
    title: "Secondment Model",
    text: "Reducing hiring risks by employing trainees through Spark before transitioning to permanent positions."
  },
  
  {
    icon: ChartLine ,
    title: "Personal Leadership Training",
    text: "Developing soft skills like resilience, self-awareness, and critical thinking to empower young professionals."
  },
  
  {
    icon: Users  ,
    title: "Inclusivity Consulting",
    text: "Helping organisations create diverse and inclusive workplaces, also for foreign graduates."
  }
];

export default function Solution() {
    
  return (
    <section className="bg-[#f7f6f5] py-5">
      <div className="max-w-7xl mx-auto w-11/12">

        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-sm slide-in">
            Our Solution
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-4 slide-in">
            What Spark Does to Solve <span className="text-orange-500">The Problem</span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto slide-in">
            We provide a structured traineeship and personal leadership program that connects young professionals with local organizations—ensuring long-term employment and economic stability. The key elements of the solution include:
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-4">
            {impacts.map((item, index) => {
                const Icon = item.icon;

             return (
                <div key={index} className="impact-card slide-in p-5 rounded-2xl bg-white shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-6">
                      <Icon className="text-orange-500" size={20} />
                    </div>

                    <h3 className="font-semibold text-lg mb-3 text-gray-800">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.text}
                    </p>
                </div>
                );
         })}
        </div>

      </div>
    </section>
  );
}
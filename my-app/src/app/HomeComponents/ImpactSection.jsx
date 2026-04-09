"use client";

import { useEffect, useRef } from "react";
import { MapPin, RefreshCcw, Heart, GraduationCap, Building2, Brain } from "lucide-react";

const impacts = [
  {
    icon: MapPin,
    title: "Regional Retention and Growth",
    text: "By connecting young professionals with local career opportunities, Spark helps reduce outmigration from non-metropolitan regions. This boosts local vitality, innovation, and economic sustainability."
  },
  {
    icon: RefreshCcw,
    title: "Workforce Renewal",
    text: "Spark addresses regional talent shortages by placing young professionals into meaningful traineeship positions in local companies."
  },
  {
    icon: Heart,
    title: "Fostering Belonging",
    text: "Our programs naturally support employees' sense of belonging to something meaningful and impactful. This strengthens engagement, motivation, and collaboration across teams. When people feel connected to a shared purpose, they perform better and stay committed for the long term."
  },
  {
    icon: GraduationCap,
    title: "Leadership Development",
    text: "Every trainee completes a personal leadership program that builds self-awareness, communication, and critical thinking."
  },
  {
    icon: Building2,
    title: "Inclusive Career Access",
    text: "Spark creates entry pathways for diverse young people, removing barriers related to experience, background, or networks."
  },
  {
    icon: Brain,
    title: "AI-Enhanced Talent Matching",
    text: "Spark uses AI to optimise how trainees are matched with organisations and track development throughout the program."
  }
];

export default function ImpactSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("card-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    cardsRef.current.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-[#f7f6f5] ">
      <div className="max-w-7xl mx-auto w-11/12 ">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium">
            Why Spark
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Spark's <span className="text-orange-500">Impact</span>
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto mt-4">
            Organizations that invest in their people see the returns—in engagement,
            retention, and performance.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {impacts.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="impact-card p-5 rounded-2xl bg-white shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-6">
                  <Icon className="text-orange-500" size={20} />
                </div>

                <h3 className="font-semibold text-xl mb-3 text-gray-800">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-lg leading-relaxed">
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
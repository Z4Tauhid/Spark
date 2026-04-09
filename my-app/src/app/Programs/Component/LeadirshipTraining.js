"use client";

import { useEffect, useRef } from "react";
import { Sparkles  , Target  , Users  , Compass } from "lucide-react";

const impacts = [
  {
    icon: Sparkles,
    title: "Self-Discovery and Growth",
    text: "This program gives you the opportunity to explore who you are and what truly drives you. By understanding your strengths and weaknesses, you'll gain confidence in your abilities and be better equipped to handle challenges in the workplace."
  },
  {
    icon: Target ,
    title: "Increased Effectiveness",
    text: "You'll learn how to apply your talents in a way that maximizes your impact. Through practical assignments, you'll become more efficient and effective, taking charge of your professional journey with clarity and purpose."
  },
  {
    icon: Users ,
    title: "Stronger Collaboration",
    text: "As you develop your personal leadership, you'll become better at working with others and influencing outcomes. The program enhances your ability to build meaningful relationships and navigate team dynamics, both of which are key to success in any career."
  },
  {
    icon: Compass  ,
    title: "Clear Career Pathway",
    text: "With a deeper understanding of your goals and ambitions, you'll gain a clear direction for your career. The program helps you define your purpose, set actionable goals, and start moving toward the career you truly desire."
  }
];

export default function LeadirshipTraining() {
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
    <section className="pt-8 bg-[#f7f6f5] ">
      <div className="max-w-7xl mx-auto w-11/12 ">

        {/* Heading */}
        <div className="text-center mb-8">
         

          <h2 className="text-4xl md:text-5xl font-bold mt-4 slide-in">
            Spark <span className="text-orange-500">Personal Leadership Training </span>
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto mt-4 slide-in">
            A personalized leadership development journey for organizations investing in high-potential talent and ambitious professionals ready to discover and amplify their unique leadership style.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 p-4">
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
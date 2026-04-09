"use client";

import { useEffect, useRef } from "react";
import { BookOpen , HeartHandshake , UserCheck , ShieldCheck} from "lucide-react";

const impacts = [
  {
    icon: BookOpen ,
    title: "Customized Training Curriculum",
    text: "Tailored programs designed to match organization's specific needs and the expectations of the young professionals."
  },
  {
    icon: HeartHandshake,
    title: "Supported Onboarding",
    text: "Comprehensive onboarding support ensuring trainees integrate seamlessly into the organization's team culture."
  },
  {
    icon: UserCheck,
    title: "Expert Mentorship",
    text: "Dedicated mentorship from Spark's experienced professionals guiding each trainee's development."
  },
  {
    icon: ShieldCheck ,
    title: "Risk-Free Recruitment",
    text: "Spark is ready to take off the burden of recruitment and retention issues from your shoulders and guarantee a risk free and hassle free recruitment for the both ends."
  }
];

export default function TraineeShipProgram() {
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
            Spark <span className="text-orange-500">TraineeShip Program</span>
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto mt-4 slide-in">
            Empowering ambitious young professionals and forward‑thinking employers to grow together through a supportive, inclusive trainee journey, one that nurtures real belonging, builds clear and exciting career pathways.
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
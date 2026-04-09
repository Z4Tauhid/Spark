"use client";

import { useEffect, useRef } from "react";
import { Rocket  , Heart  , Users, UserRoundCheck  } from "lucide-react";

const impacts = [
  {
    icon: Rocket  ,
    title: "Career Growth",
    text: "We promise to help you level up and unleash the best version of yourself. With us, you'll build the confidence and skills needed to accelerate your career and truly stand out in a competitive environment. With Spark, you are unstoppable!"
  },
  {
    icon: Heart,
    title: "Develop Your Soft Skills",
    text: "Soft skills matter, because we're all humans working with humans. To become a star employee, strong soft skills like self-awareness, communication, teamwork, and more are essential. And we're here to help you become the professional you've always dreamed of being."
  },
  {
    icon: Users,
    title: "Leadership Community",
    text: "Our personal leadership program offers a unique opportunity to build like-minded, genuine social connections. You'll be surrounded by friends and colleagues who truly inspire one another and support each other's growth. You'll also become part of a vibrant community of young leaders."
  },
  {
    icon: UserRoundCheck  ,
    title: "Personalized Coaching",
    text: "We've developed around 20 training modules that can be customized to meet both your needs and your employer's requirements. Your growth will be closely monitored, and you'll be personally mentored by our trainers. We make sure you get the maximum benefit from all the resources we offer."
  }
];

export default function Unlock() {
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
            Unlock Your <span className="text-orange-500">Leadership </span> Potential
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto mt-4 slide-in">
            Develop the confidence, skills, and mindset to lead with authenticity. Our personalized training helps you discover your unique leadership style and accelerate your career.
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
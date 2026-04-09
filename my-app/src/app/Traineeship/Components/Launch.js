"use client";

import { useEffect, useRef } from "react";
import { Rocket  , Heart  , MessageSquare, Award } from "lucide-react";

const impacts = [
  {
    icon: Rocket  ,
    title: "Career Growth Support",
    text: "We provide well-structured traineeships with personalized career roadmaps where you can learn and improve your technical and soft skills. By the end of the traineeship, you'll feel confident, capable, and ready to take the next step in your career."
  },
  {
    icon: Heart,
    title: "Supportive and Inclusive Working Environments",
    text: "We make sure to provide you with a workplace where you feel comfortable, included, and supported. A place where you can openly share your ideas, have them truly valued, and, of course, connect with people as well."
  },
  {
    icon: MessageSquare,
    title: "Expert Mentorship and Feedbacks",
    text: "While you earn and learn, experts from Spark will personally mentor you and provide regular feedback to support your growth. We'll work together with you to create and refine your career plan, and of course, the impact you make will be recognized both verbally and financially."
  },
  {
    icon: Award ,
    title: "Get Hired after the Traineeship",
    text: "During the traineeship, we help you grow into a skilled industry professional. We support you in understanding your career path while also helping the organization recognize the value of your contribution. Our traineeship program significantly increases your chances of being hired by the end of the traineeship"
  }
];

export default function Launch() {
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
            Launch Your <span className="text-orange-500">Career</span> with Spark
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto mt-4 slide-in">
            Join a community of ambitious young professionals and gain the experience, mentorship, and skills you need to thrive in today's competitive job market.
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
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const testimonials = [
  {
    text: "The Spark Leadership Training helped me find my voice as a leader. I'm now confident in guiding my team and making strategic decisions.",
    name: "Lisa van der Berg",
    role: "Junior Manager",
    company: "Tech Innovations",
    img: "/lisa.jfif",
  },
  {
    text: "The personalized coaching sessions were transformative. I learned how to communicate effectively and inspire others around me.",
    name: "Thomas Bakker",
    role: "Project Coordinator",
    company: "Global Finance Corp",
    img: "/thomas.jfif",
  },
  {
    text: "Spark's practical workshops gave me tools I use every day. My approach to leadership has completely evolved since completing the program.",
    name: "Sophie de Jong",
    role: "Team Lead",
    company: "Green Energy Solutions",
    img: "/sophie.jfif",
  },
];

const faqs = [
  {
    question: "For Whom the Personal Leadership Training is designed for?",
    answer:
      "Our program is designed for ambitious young professionals who want to develop their leadership capabilities early in their careers. Whether you're an emerging leader, a team member looking to step up, or someone preparing for management roles, this training will help you grow.",
  },
  {
    question: "How long is the leadership training program?",
    answer:
      "The program typically runs for 3 to 6 months, depending on the training package and your organization's needs. It includes coaching sessions, group workshops, and self-paced learning modules.",
  },
  {
    question: "What topics are covered in the training?",
    answer:
      "NOur curriculum covers essential leadership areas including self-awareness and emotional intelligence, effective communication, decision-making, team dynamics, conflict resolution, and strategic thinking. Each module is designed to be practical and immediately applicable.",
  },
  {
    question: "Can I enroll individually or does my organization need to sponsor me?",
    answer:
      "To participate in our Personal Leadership Training, you need to be sponsored by your organization. If you're interested in joining the program, we encourage you to speak with your employer about sponsoring your development. Your company can contact us to learn more about partnership opportunities and how the training benefits both the individual and the organization.",
  },
  {
    question: "What makes Spark's leadership training different?",
    answer:
      "Unlike generic leadership courses, Spark focuses on personalized development. We combine coaching with hands-on workshops to ensure you receive tailored guidance that addresses your specific challenges and goals. Most importantly, our program helps shape young leaders and connects them with one another, so you build your own supportive network to grow and succeed together.",
  },
];

export default function Participants() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f7f6f5] py-6">
      <div className="max-w-7xl mx-auto w-11/12">

        {/* ================= TESTIMONIALS ================= */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold slide-in">
            Hear From Our <span className="text-orange-500">Participants</span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto slide-in">
            Real stories from young professionals who transformed their leadership with Spark.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition slide-in"
            >
              {/* Quote */}
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                “{item.text}”
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500">{item.role}</p>
                  <p className="text-xs text-orange-500">{item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= FAQ ================= */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold slide-in">
            Frequently Asked{" "}
            <span className="text-orange-500">Questions</span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto slide-in">
            Everything you need to know about joining the Spark Traineeship Program.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden slide-in"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="font-medium text-gray-800">
                  {faq.question}
                </span>

                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`px-6 transition-all duration-300 ${
                  activeIndex === index
                    ? "max-h-40 pb-4 opacity-100"
                    : "max-h-0 overflow-hidden opacity-0"
                }`}
              >
                <p className="text-gray-500 text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
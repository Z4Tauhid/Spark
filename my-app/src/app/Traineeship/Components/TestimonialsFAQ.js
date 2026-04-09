"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const testimonials = [
  {
    text: "The Spark Traineeship completely transformed my career trajectory. The mentorship and real-world experience I gained were invaluable.",
    name: "Sarah van den Berg",
    role: "Marketing Trainee",
    company: "Tech Innovations",
    img: "/sarah.jfif",
  },
  {
    text: "From day one, I felt supported and challenged. The personal leadership training helped me discover my strengths and grow as a professional.",
    name: "Michael Jansen",
    role: "Finance Trainee",
    company: "Global Finance Corp",
    img: "/michael.jfif",
  },
  {
    text: "Spark connected me with my dream company. The structured program and ongoing support made my transition into the workforce seamless.",
    name: "Emma de Vries",
    role: "Sustainability Trainee",
    company: "Green Energy Solutions",
    img: "/emma.jfif",
  },
];

const faqs = [
  {
    question: "Who can apply for the Spark Traineeship Program?",
    answer:
      "Our program is open to final year students and recent graduates from the universities, and young professionals looking to kickstart their careers. We welcome candidates from diverse educational backgrounds who demonstrate ambition, curiosity, and a willingness to learn.",
  },
  {
    question: "How long is the traineeship program?",
    answer:
      "The typical traineeship duration ranges from 3 - 12 months, depending on the organization and role. During this time, you'll receive structured training, mentorship, and hands-on experience.",
  },
  {
    question: "Is there a cost to join the program?",
    answer:
      "No, there is no cost to apply or participate in the Spark Traineeship Program. You will receive competitive compensation throughout your traineeship.",
  },
  {
    question: "What industries are available for traineeships?",
    answer:
      "We partner with organizations across various sectors including technology, finance, healthcare, sustainability, media, and retail. We continuously expand our network to offer diverse opportunities.",
  },
  {
    question: "What happens after the traineeship ends?",
    answer:
      "Many of our trainees receive full-time offers from their host organizations. Even if a permanent position isn't available, you'll leave with valuable experience, skills, and a strong professional network.",
  },
];

export default function TestimonialsFAQ() {
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
            Hear From Our <span className="text-orange-500">Trainees</span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto slide-in">
            Real stories from young professionals who launched their careers with Spark.
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
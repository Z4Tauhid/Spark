"use client";

import { useEffect, useRef } from "react";
import { Mail, Phone } from "lucide-react";

export default function CTASection() {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("cta-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden py-24 px-6">

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e2a4a] via-[#24305a] to-[#3b3559]" />

      <div className="relative max-w-5xl mx-auto text-center text-white">

        {/* Title */}
        <h2
          ref={(el) => (itemsRef.current[0] = el)}
          className="cta-item text-4xl md:text-6xl font-bold leading-tight"
        >
          Ready to Ignite
        </h2>

        <h2
          ref={(el) => (itemsRef.current[1] = el)}
          className="cta-item text-4xl md:text-6xl font-bold text-orange-500 mt-2"
        >
          Your Team's Potential?
        </h2>

        {/* Paragraph */}
        <p
          ref={(el) => (itemsRef.current[2] = el)}
          className="cta-item mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
        >
          Let's discuss how Spark can help develop your next generation of
          leaders. Schedule a consultation with our team today.
        </p>

        {/* Buttons */}
        <div
          ref={(el) => (itemsRef.current[3] = el)}
          className="cta-item mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-xl text-lg font-semibold">
            Schedule a Call →
          </button>

          <button className="border border-white/40 hover:bg-white/10 transition px-8 py-4 rounded-xl text-lg font-semibold">
            Download Brochure
          </button>
        </div>

        {/* Contact */}
        <div
          ref={(el) => (itemsRef.current[4] = el)}
          className="cta-item mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300"
        >
          <div className="flex items-center gap-2">
            <Mail size={18} />
            info@sparktraineeships.com
          </div>

          <div className="hidden sm:block">•</div>

          <div className="flex items-center gap-2">
            <Phone size={18} />
            +358 41 3157446
          </div>
        </div>

      </div>
    </section>
  );
}
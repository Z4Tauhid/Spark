"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Users, Award, Target, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Young Professionals Trained" },
  { icon: Award, value: 95, suffix: "%", label: "Program Completion Rate" },
  { icon: Target, value: 50, suffix: "+", label: "Partner Organizations" },
  { icon: TrendingUp, value: 89, suffix: "%", label: "Career Advancement Within 2 Years" },
];

export default function Impact() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [start, setStart] = useState(false);

  useEffect(() => {
    const section = document.getElementById("impact-section");

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.3 }
    );

    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    if (!start) return;

    stats.forEach((stat, i) => {
      let startValue = 0;
      const endValue = stat.value;
      const duration = 2000;
      const increment = endValue / (duration / 16);

      const counter = setInterval(() => {
        startValue += increment;

        setCounts((prev) => {
          const updated = [...prev];
          updated[i] =
            startValue >= endValue ? endValue : Math.floor(startValue);
          return updated;
        });

        if (startValue >= endValue) clearInterval(counter);
      }, 16);
    });
  }, [start]);

  return (
    <section id="impact-section" className="bg-[#f7f6f5] py-20">
      <div className="max-w-7xl mx-auto w-11/12">

        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-sm slide-in">
            Our Impact
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 slide-in">
            Numbers That{" "}
            <span className="text-orange-500">Speak Volumes</span>
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto mt-4 slide-in">
            Our track record demonstrates the real-world impact of our programs on young professionals and organizations alike.
          </p>
        </div>

        {/* STATS */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm text-center slide-in"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                  <Icon className="text-orange-500" size={20} />
                </div>

                <h3 className="text-3xl font-bold text-orange-500">
                  {counts[index]}
                  {item.suffix}
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* TESTIMONIAL */}
        <div className="mt-16 bg-gradient-to-r from-[#1f2a44] to-[#2c355a] text-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 slide-in">

          {/* IMAGE */}
          <div className="relative">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-orange-500">
              <Image
                src="https://sparkproductshowcase.lovable.app/assets/baptiest-mol-_sLgaXqw.png"
                alt="Founder"
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Quote badge */}
            <div className="absolute -bottom-2 -right-2 bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center text-white text-xl">
              "
            </div>
          </div>

          {/* TEXT */}
          <div className="flex-1">
            <p className="text-2xl leading-relaxed text-gray-200">
              "At Spark, we believe that every young professional carries within them the seeds of greatness. Our role is not to shape them into someone else's image, but to help them discover and amplify their unique strengths..."
            </p>

            <div className="mt-4">
              <h4 className="text-orange-400 font-semibold">
                Baptiest Mol
              </h4>
              <p className="text-sm text-gray-300">
                Founder & CEO, Spark
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
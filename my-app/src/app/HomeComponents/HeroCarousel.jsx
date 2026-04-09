"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "For Trainees",
    desc: "Starting as a Trainee.",
    image: "https://sparktraineeships.com/wp-content/uploads/elementor/thumbs/NiinaToyryla-0570-scaled-ra56m3h0d1d3i58ecceuq5n2xlhgjl75s7428u9mn4.jpg",
  },
  {
    id: 2,
    title: "For Organizations",
    desc: "Transform your WorkForce.",
    image: "/4urorg.jpg",
  },
  {
    id: 3,
    title: "Personal Leadership",
    desc: "Maximize your own potential.",
    image: "/ldr.jpg",
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-100 overflow-hidden">

      {/* Background Image */}
      <Image
        src={slides[active].image}
        alt={slides[active].title}
        fill
        priority
        className="object-cover transition-all duration-700"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6 md:px-10">

        <div className="max-w-lg text-white space-y-4 md:space-y-5">

          <h1 className="slide-in text-3xl md:text-5xl font-bold tracking-wide">
            {slides[active].title}
          </h1>

          <p className="slide-in text-base md:text-lg opacity-90">
            {slides[active].desc}
          </p>

          <button className="slide-in bg-white text-black px-5 py-2.5 md:px-6 md:py-3 rounded-lg font-medium hover:bg-gray-200 transition">
            See More
          </button>

        </div>

      </div>

      {/* Cards (Hidden on Mobile) */}
      <div className="absolute bottom-10 right-10 hidden md:flex gap-5 z-20">

        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setActive(index)}
            className={`relative w-28 h-40 lg:w-32 lg:h-44 rounded-2xl overflow-hidden transition-all duration-300 ${
              active === index
                ? "scale-105 ring-2 ring-white"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
            />
          </button>
        ))}

      </div>

      {/* Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-20">

        <button
          onClick={() =>
            setActive((prev) =>
              prev === 0 ? slides.length - 1 : prev - 1
            )
          }
          className="bg-white/80 backdrop-blur px-4 py-2 rounded-full"
        >
          <a  className="btn btn-circle">❮</a>
        </button>

        <button
          onClick={() =>
            setActive((prev) => (prev + 1) % slides.length)
          }
          className="bg-white/80 px-4 py-2 rounded-full"
        >
          <a className="btn btn-circle">❯</a>
        </button>

      </div>

    </section>
  );
}
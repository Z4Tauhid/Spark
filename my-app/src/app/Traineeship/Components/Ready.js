"use client";

import { Sparkles } from "lucide-react";

import Link from "next/link";

export default function Ready() {
  
  

  // Slide-in on scroll
 

  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-[#1f2a44] to-[#2d355b]">
      <div
       
        className={`max-w-5xl mx-auto rounded-3xl px-6 sm:px-10 lg:px-16 sm:py-16 text-center`}
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center">
            <Sparkles className="text-orange-500" size={35} />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
          Ready to Start Your Journey?
        </h2>

        {/* Description */}
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Take the first step towards an exciting career. Sign up to join our
          talent pool and get matched with amazing traineeship opportunities.
        </p>

        {/* Button */}
        <div className="mt-8 ">
          <Link
            href="/Register" className="items-center gap-2 bg-orange-500 text-white px-6 sm:px-8 py-3 rounded-xl font-medium text-sm sm:text-base">
            Sign Up for Traineeships →
          </Link>
        </div>
      </div>
    </section>
  );
}
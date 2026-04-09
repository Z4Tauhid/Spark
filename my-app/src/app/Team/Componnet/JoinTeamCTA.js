"use client";

import { Users } from "lucide-react";
import Link from "next/link";

export default function JoinTeamCTA() {
  return (
    <section className="pb-10">
      <div className="max-w-7xl mx-auto w-11/12">
        
        <div className="rounded-3xl  px-6 md:px-12 text-center  slide-in">
          
          {/* ICON */}
          <div className="w-16 h-16 mx-auto rounded-full bg-orange-100 flex items-center justify-center mb-6">
            <Users className="text-orange-500" size={28} />
          </div>

          {/* TITLE */}
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Want to Join Our Team?
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-base md:text-lg leading-relaxed">
            We're always looking for passionate individuals who share our mission to
            transform young professionals into tomorrow's leaders.
          </p>

          {/* BUTTON */}
          <div className="mt-8">
            <Link href="/Contact" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Get in Touch
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Baptiest Mol",
    role: "Founder & CEO",
    image: "/baptiest.jpg",
    linkedin: "#",
    email: "#",
  },
  {
    name: "Sandun Abeywardhana",
    role: "Team Member",
    image: "/sandun.jpeg",
    linkedin: "#",
    email: "#",
  },
  {
    name: "Kimberley Poskela",
    role: "Team Member",
    image: "/kimy.jpg",
    linkedin: "#",
    email: "#",
  },
  {
    name: "Pinja Lähteenmäki",
    role: "Team Member",
    image: "/pinja.jpeg",
    linkedin: "#",
    email: "#",
  },
  {
    name: "MD. Tauhid",
    role: "Team Member",
    image: "/tauhid.jpg",
    linkedin: "#",
    email: "#",
  },
];

export default function Team() {
  return (
    <section className="pt-10">
      <div className="max-w-7xl mx-auto w-11/12">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-sm slide-in">
            The Team
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 slide-in">
            Our Dedicated{" "}
            <span className="text-orange-500">Team Members</span>
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto mt-4 slide-in">
            Together, we work tirelessly to deliver exceptional programs that
            make a real difference in the lives of young professionals and
            organizations.
          </p>
        </div>

        {/* TEAM GRID */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 slide-in"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* IMAGE */}
              <div className="relative w-28 h-28 mx-auto mb-4">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-orange-500">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={112}
                    height={112}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* NAME */}
              <h3 className="font-semibold text-lg text-gray-800">
                {member.name}
              </h3>

              {/* ROLE */}
              <p className="text-sm text-gray-500 mt-1">
                {member.role}
              </p>

              {/* SOCIAL ICONS */}
              <div className="flex justify-center gap-3 mt-4">
                <a
                  href={member.linkedin}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-orange-100 transition"
                >
                  <Linkedin size={16} className="text-gray-600" />
                </a>

                <a
                  href={member.email}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-orange-100 transition"
                >
                  <Mail size={16} className="text-gray-600" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
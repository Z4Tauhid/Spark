import { Mail } from "lucide-react";
import Image from "next/image";

export default function Touch() {
  return (
    <section className="w-full bg-[#2c3553] text-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold">
          Get in Touch With Our{" "}
          <span className="text-orange-500">Program Manager</span>
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
          Have questions about our Leadership Training? Reach out to our
          dedicated program manager who can guide you through the process.
        </p>

        {/* Card */}
        <div className="mt-10 bg-[#3b4566] rounded-2xl border border-orange-400/30 p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 text-left">
          
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-orange-400 overflow-hidden">
              <Image
                src="/pinja.jpeg" // replace with your image
                alt="Pinja Lähteenmäki"
                width={120}
                height={120}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-semibold">
              Pinja Lähteenmäki
            </h3>

            <p className="text-orange-400 mt-1 text-sm md:text-base font-medium">
              Trainer and Program Manager
            </p>

            <p className="text-gray-300 mt-3 text-sm md:text-base leading-relaxed">
              With extensive experience in professional development, Pinja is
              passionate about helping young professionals discover and develop
              their leadership potential.
            </p>

            {/* Email */}
            <div className="mt-4 flex items-center justify-center md:justify-start gap-2 text-orange-400 text-sm md:text-base">
              <span><Mail></Mail></span>
              <a
                href="mailto:pinja@sparktraineeships.com"
                className="hover:underline"
              >
                pinja@sparktraineeships.com
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
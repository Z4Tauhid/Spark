"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-[#f7f6f5] py-12 sm:py-16">
      <div className="max-w-6xl mx-auto w-11/12">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="slide-in">
            <span className="bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-xs sm:text-sm">
              Contact Us
            </span>
          </p>

          <h1 className="slide-in text-3xl sm:text-4xl md:text-5xl font-bold mt-4 leading-tight">
            Let's <span className="text-orange-500">Talk</span>
          </h1>

          <p className="slide-in text-gray-500 mt-4 max-w-xl mx-auto text-sm sm:text-base px-2">
            Ready to transform your talent acquisition? Get in touch with our team to
            discuss your needs.
          </p>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

          {/* ================= FORM ================= */}
          <div className="slide-left bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="slide-in text-xl sm:text-2xl font-semibold mb-6 text-gray-800">
              Send us a message
            </h2>

            {/* Name */}
            <div className="mb-4 sm:mb-5">
              <label className="slide-in block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="slide-in w-full px-4 py-3 text-sm sm:text-base rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Email */}
            <div className="mb-4 sm:mb-5">
              <label className="slide-in block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="slide-in w-full px-4 py-3 text-sm sm:text-base rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Company */}
            <div className="mb-4 sm:mb-5">
              <label className="slide-in block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Your organization"
                className="slide-in w-full px-4 py-3 text-sm sm:text-base rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Message */}
            <div className="mb-5 sm:mb-6">
              <label className="slide-in block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                placeholder="Tell us about your needs..."
                className="slide-in w-full px-4 py-3 text-sm sm:text-base rounded-xl border border-gray-200 bg-gray-50 h-28 sm:h-32 resize-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Button */}
            <button className="slide-in w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl text-sm sm:text-base font-medium flex items-center justify-center gap-2 hover:scale-[1.02] transition">
              Send Message <Send size={16} />
            </button>
          </div>

          {/* ================= CONTACT INFO ================= */}
          <div className="slide-right bg-gradient-to-br from-[#1f2a44] to-[#2f3a5f] text-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-md">

            <h2 className="slide-in text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">
              Get in touch
            </h2>

            {/* Email */}
            <div className="slide-in flex items-start gap-3 sm:gap-4 mb-5 sm:mb-6">
              <div className="bg-orange-500/20 p-2 sm:p-3 rounded-lg">
                <Mail className="text-orange-400 w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="font-medium text-sm sm:text-base">Email</p>
                <p className="text-gray-300 text-sm sm:text-base break-all">
                  info@sparktraineeships.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="slide-in flex items-start gap-3 sm:gap-4 mb-5 sm:mb-6">
              <div className="bg-orange-500/20 p-2 sm:p-3 rounded-lg">
                <Phone className="text-orange-400 w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="font-medium text-sm sm:text-base">Phone</p>
                <p className="text-gray-300 text-sm sm:text-base">
                  +358 41 3157446
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="slide-in flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="bg-orange-500/20 p-2 sm:p-3 rounded-lg">
                <MapPin className="text-orange-400 w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="font-medium text-sm sm:text-base">Location</p>
                <p className="text-gray-300 text-sm sm:text-base">
                  Lahti, Finland
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="slide-in border-t border-white/20 pt-4 sm:pt-6">
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                We typically respond within 24 hours during business days.
                Looking forward to hearing from you!
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
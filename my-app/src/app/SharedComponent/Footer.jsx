"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">

      <div className="max-w-7xl  mx-auto px-12 pt-5 pb-3">

        {/* Top Footer */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">

          {/* Logo + Description */}
          <div className="space-y-2 col-span-2 md:col-span-1 flex md:flex-col justify-center">

            <Image
              src="/Spark Logo Blue.png"
              alt="Spark Logo"
              width={140}
              height={40}
            />

            <p className="hidden md:flex text-gray-600 leading-relaxed max-w-sm">
              Transforming young professionals into tomorrow's leaders
              through innovative training programs.
            </p>

          </div>


          {/* Programs */}
          <div className="space-y-2">

            <h3 className="font-semibold text-lg text-gray-900">
              Programs
            </h3>

            <ul className="space-y-2 text-gray-600">

              <li>
                <Link
                  href="/trainees"
                  className="hover:text-orange-500 transition"
                >
                  Traineeship Program
                </Link>
              </li>

              <li>
                <Link
                  href="/leadership"
                  className="hover:text-orange-500 transition"
                >
                  Personal Leadership
                </Link>
              </li>

              <li>
                <Link
                  href="/organizations"
                  className="hover:text-orange-500 transition"
                >
                  Custom Solutions
                </Link>
              </li>

            </ul>

          </div>


          {/* Company */}
          <div className="space-y-2 ">

            <h3 className="font-semibold text-lg text-gray-900">
              Company
            </h3>

            <ul className="space-y-1 text-gray-600">

              <li>
                <Link
                  href="/About"
                  className="hover:text-orange-500 transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/Team"
                  className="hover:text-orange-500 transition"
                >
                  Our Team
                </Link>
              </li>

            </ul>

          </div>


          {/* Contact */}
          <div className="space-y-2 col-span-2 md:col-span-1">

            <h3 className="font-semibold text-lg text-gray-900">
              Contact
            </h3>

            <div className="space-y-1 text-gray-600">

              <p>
                info@sparktraineeships.com
              </p>

              <p>
                +358 41 3157446
              </p>

            </div>

          </div>

        </div>


        {/* Divider */}
        <div className="border-t mt-4 pt-4 ">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-gray-600 text-sm">
              © 2024 Spark Leadership. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm text-gray-600">

              <Link
                href="/privacy"
                className="hover:text-orange-500 transition"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="hover:text-orange-500 transition"
              >
                Terms of Service
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}
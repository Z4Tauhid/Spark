"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { X, ChevronDown } from "lucide-react";
import { useUser } from "../context/UserContext";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { user, setUser, loading } = useUser();
  const [mobileDropdown, setMobileDropdown] = useState(false);
  console.log(user?.img)

 

 const navLinks = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/Programs" },
  { name: "For Organizations", href: "/ForOrganizations" },
  {
    name: "For Young Professionals",
    href: "#",
    submenu: [
      { name: "I want a traineeship", href: "/Traineeship" },
      { name: "I want to develop my skills", href: "/Skills" },
    ],
  },
  { name: "About", href: "/About" },
  { name: "Contact", href: "/Contact" },
];

  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

   if (loading) return null;

  const handleLogout = () => {
    // Clear user from context
    setUser(null);

    // Call backend logout API if needed
    fetch("http://localhost:5000/api/auth/logout", { method: "POST", credentials: "include" });

    alert("Logged out successfully");
  };

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* LEFT: Logo + Hamburger */}
          <div className="flex items-center justify-start gap-2 md:gap-4">
            <button
              aria-label="Toggle Menu"
              className="xl:hidden flex flex-col gap-1"
              onClick={() => setIsOpen(true)}
            >
              <span className="h-0.5 w-6 bg-black"></span>
              <span className="h-0.5 w-6 bg-black"></span>
              <span className="h-0.5 w-6 bg-black"></span>
            </button>

            <Link href="/" className="flex items-center ">
              <div className="relative h-8 w-18 sm:h-10 sm:w-36 md:h-12 md:w-44">
                <Image src="/Spark Logo Blue.png" alt="Logo" fill priority className="object-contain"/>
              </div>
            </Link>
          </div>

          {/* CENTER: Nav Links (desktop) */}
         <nav className="hidden xl:flex items-center gap-6 font-medium lg:text-s">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">

            {/* MAIN LINK */}
              <Link
                  href={link.href === "#" ? "" : link.href}
                  className={`flex items-center gap-1 transition-colors duration-200 ${
                  pathname === link.href ? "text-orange-500" : "text-gray-800 hover:text-orange-500"}`}>
                  {link.name}
                  {link.submenu && <ChevronDown size={16} />}
              </Link>

            {/* DROPDOWN */}
            {link.submenu && (
              <div className="absolute left-0 mt-3 w-64 bg-white rounded-xl shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {link.submenu.map((sub) => (
                <Link
                  key={sub.name}
                  href={sub.href}
                  className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                  {sub.name}
                </Link>
                ))}
              </div>
            )}
         </div>
  ))}
</nav>

          {/* RIGHT: Desktop Login/User */}
          <div className="flex items-center gap-3  relative">
            {user ? (
              <div className="relative">
                <button
                  className="flex items-center gap-2 border px-3 py-2 rounded-full hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <Image
                    src={user.img || "/default-avatar.png"}
                    alt={user.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <ChevronDown size={16} />
                </button>

                {/* Dropdown */}
                {isDropdownOpen && (
                  <div className="absolute rounded-xl right-0 mt-2 w-40 bg-white border shadow-lg z-50">
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 text-gray-700 "
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-gray-700"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/Login" className="hidden md:block border px-3 py-2 rounded text-sm hover:bg-gray-100">
                  Login
                </Link>
                <Link
                  href="/Register"
                  className="bg-orange-500 text-white px-4 py-2 rounded text-sm hover:bg-orange-600 transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className="xl:hidden ">
        {/* Overlay */}
        <div
          onClick={() => setIsOpen(false)}
          className={` fixed inset-0 bg-black/40 transition-opacity duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        />

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b">
            <span className="font-semibold text-lg">Menu</span>
            <button onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col px-6 py-6 space-y-6 font-medium">
  {navLinks.map((link) => (
    <div key={link.name}>

      {/* NORMAL LINK */}
      {!link.submenu ? (
        <Link
          href={link.href}
          className={`text-lg ${
            pathname === link.href
              ? "text-orange-500 font-semibold"
              : "text-gray-800"
          }`}
        >
          {link.name}
        </Link>
      ) : (
        <>
          {/* CLICKABLE PARENT */}
          <button
            onClick={() => setMobileDropdown(!mobileDropdown)}
            className="flex items-center justify-between w-full text-lg text-gray-800"
          >
            {link.name}
            <ChevronDown
              size={18}
              className={`transition-transform ${
                mobileDropdown ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* SUBMENU */}
          {mobileDropdown && (
            <div className="mt-3 ml-4 flex flex-col gap-3">
              {link.submenu.map((sub) => (
                <Link
                  key={sub.name}
                  href={sub.href}
                  className="text-gray-600 hover:text-orange-500"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  ))}

  {!user && (
    <Link href="/Login" className="md:hidden font-medium">
      Login
    </Link>
  )}
</div>
        </div>
      </div>
    </header>
  );
}
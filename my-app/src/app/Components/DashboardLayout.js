"use client";

import { useState } from "react";
import { Home, Users, FileText, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", icon: <Home size={20} />, href: "/dashboard" },
    { name: "Applications", icon: <FileText size={20} />, href: "/dashboard/applications" },
    { name: "Users", icon: <Users size={20} />, href: "/dashboard/users" },
    { name: "Settings", icon: <Settings size={20} />, href: "/dashboard/settings" },
  ];

  const currentPage = menuItems.find((item) => item.href === pathname)?.name || "";

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={`bg-[#1e293b] text-orange-500 flex flex-col transition-all duration-300 ${
          collapsed ? "w-20" : "w-64"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between p-4 mb-6">
          {!collapsed && <h1 className="text-xl font-bold">Dashboard</h1>}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 rounded hover:bg-gray-700"
          >
            {collapsed ? "→" : "←"}
          </button>
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-2 px-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 p-2 rounded hover:bg-[#334155] ${
                pathname === item.href ? "bg-[#334155]" : ""
              }`}
            >
              {item.icon}
              {!collapsed && item.name}
            </Link>
          ))}
        </nav>

        <div className="flex-1" />
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 bg-gray-100">
        {/* Dynamic Header */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{currentPage}</h2>
        {children}
      </main>
    </div>
  );
}
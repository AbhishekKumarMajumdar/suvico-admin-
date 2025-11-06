"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FaTv } from "react-icons/fa6";
import { LuFolders } from "react-icons/lu";
import { LayoutDashboard, UserCheck, User } from "lucide-react";

const icons = {
  masterclass: (size: number, color: string) => <FaTv size={size} color={color} />,
  category: (size: number, color: string) => <LuFolders size={size} color={color} />,
  dashboard: (size: number, color: string) => <LayoutDashboard size={size} color={color} />,
  mentor: (size: number, color: string) => <UserCheck size={size} color={color} />,
  user: (size: number, color: string) => <User size={size} color={color} />,
};

const navItems = [
  { label: "Dashboard", href: "/", icon: icons.dashboard },
  { label: "Mandates", href: "/mandates", icon: icons.masterclass },
  { label: "Category", href: "/categories", icon: icons.category },
  { label: "User Management", href: "/user", icon: icons.user },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCloseOnMobile = () => {
    if (window.innerWidth < 768) setOpen(false);
  };

  const sidebarNav = (
    <nav className={`fixed left-0 top-[70px] bottom-[70px] flex flex-col w-[265px] gap-7 p-[16px] bg-white border-gray-200 transition-opacity ${mounted ? 'opacity-100' : 'opacity-0'}`}>

      {navItems.map(item => {
        const active =
          (item.href === "/" && pathname === "/") ||
          (item.href !== "/" && pathname.startsWith(item.href));

        const fontSize = "text-[14px]";
        const fontWeight = "font-medium";
        const iconSize = 24;
        const iconColor = active ? "#14a44d" : "#656D7C";

        return (
          <Link
            key={item.label}
            href={item.href}
            onClick={handleCloseOnMobile}   // ✅ CLOSE ON MOBILE
            className={`${fontWeight} ${fontSize} ${
              active
                ? "bg-[#1CE36C] text-[#fff] rounded-lg"
                : "text-[#656D7C] hover:bg-[#F3F4F6]"
            }`}
          >
            <div className="flex items-center gap-5 rounded-xl px-3 py-2 sm:py-3 transition-colors">
              <span
                className="shrink-0 flex items-center justify-center"
                style={{ minWidth: iconSize, minHeight: iconSize }}
              >
                {item.icon(iconSize, iconColor)}
              </span>
              <span style={{ lineHeight: 1.2 }}>{item.label}</span>
            </div>
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {mounted && (
        <>
          {/* Hamburger menu button for mobile */}
          <button
            className="fixed top-4 left-4 z-50 md:hidden w-10 h-10 rounded-lg flex items-center justify-center bg-white border border-[#E3E3E3] shadow-sm"
            aria-label="Open sidebar"
            onClick={() => setOpen(true)}
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="#1e293b"
              strokeWidth="2.1"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop sidebar */}
          <aside className="hidden md:flex fixed left-0 top-16 h-[calc(100vh-7.5rem)] w-[270px] bg-white border-r border-[#F1F3F5] flex-col gap-2 z-30">
            {sidebarNav}
          </aside>
        </>
      )}

      {/* Mobile sidebar overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div className="h-full w-[80vw] max-w-[280px] bg-white border-r border-[#F1F3F5] p-0 flex-col shadow-xl animate-slideIn flex relative">
            <button
              className="absolute top-4 right-5 z-60 w-9 h-9 rounded-md bg-[#f4f6fa] flex items-center justify-center"
              aria-label="Close sidebar"
              onClick={() => setOpen(false)}
            >
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="#1e293b"
                strokeWidth="2.2"
                viewBox="0 0 24 24"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            {sidebarNav}
          </div>

          <div
            className="flex-grow bg-black/25"
            onClick={() => setOpen(false)}
          />
        </div>
      )}
    </>
  );
}

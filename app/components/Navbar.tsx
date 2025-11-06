"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-[#F1F3F5] bg-white sticky top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between gap-4">
          {/* Left: Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0 pl-12 sm:pl-0">
            <h1 className="text-2xl font-extrabold tracking-tight text-[#14a44d]">
              SUVICO
            </h1>
            {/* <Image src="/logo.svg" alt="BuildAmbit" width={155} height={34} priority /> */}
            </Link>

          {/* Center: Search */}
          <div className="flex-1 hidden md:flex justify-center">
            <div className="w-full max-w-3xl relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9AA1B2]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </span>
              <input
                placeholder="Search..."
                className="w-full h-10 pl-10 pr-3 rounded-xl bg-[#F3F5F8] border border-[#ECEFF3] text-[14px] text-[#6B7280] outline-none focus:ring-0"
              />
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            <button aria-label="Messages" className="p-2 rounded hover:bg-[#F3F4F6] text-[#9AA1B2]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/>
              </svg>
            </button>
            <button aria-label="Notifications" className="p-2 rounded hover:bg-[#F3F4F6] text-[#9AA1B2]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
            </button>

            {/* User */}
            <div className="hidden sm:flex flex-col items-end mr-1">
              <span className="text-[14px] text-[#111827] leading-none">Abhishek</span>
              <span className="mt-1 px-2 py-[2px] rounded-full text-[12px] bg-[#EEF2FF] text-[#374151]">Super Admin</span>
            </div>
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-[#14a44d] grid place-items-center text-white"> 
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21a8 8 0 1 0-16 0"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <span className="absolute right-0 bottom-0 block w-2 h-2 rounded-full bg-[#22C55E] ring-2 ring-white"/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}



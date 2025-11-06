"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t z-50 border-[#F1F3F5] bg-[#FAFBFC]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="h-14 flex items-center justify-between">
          <nav className="flex items-center gap-8 text-[14px] font-bold text-[#111827]">
            <Link href="#" className="hover:text-blue-500">About Us</Link>
            <Link href="#" className="hover:text-blue-500">Contact Us</Link>
          </nav>

          <div className="flex items-center gap-4 text-[#111827]">
            <Link aria-label="LinkedIn" href="#" className="p-1 rounded hover:bg-[#F3F4F6]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-12h4v1.5"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </Link>
            <Link aria-label="Instagram" href="#" className="p-1 rounded hover:bg-[#F3F4F6]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/>
              </svg>
            </Link>
            <Link aria-label="Facebook" href="#" className="p-1 rounded hover:bg-[#F3F4F6]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}



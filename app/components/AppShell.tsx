/*
  This file defines the AppShell React component, which provides the main layout structure
  for the application's pages, including the navigation bar, sidebar, footer, and page content.

  1. "use client"; — This marks the file as a Client Component so that React hooks can be used.

  2. Imports:
     - usePathname (from next/navigation): Retrieves the current URL path for client-side navigation awareness.
     - useEffect, useState: React hooks for managing component lifecycle and state.
     - Navbar, Sidebar, Footer: Layout components imported from local files.
     - ReactNode: A type for the generic children prop.

  3. AppShell Component:
     - Receives a prop 'children' of type ReactNode, so it can render any arbitrary nested content.
     - Uses usePathname to get the current URL path, thereby knowing what page is being viewed.
     - Uses useState(false) and useEffect to set `mounted` to true after the component has mounted 
       (to avoid mismatches between server-side and client-side rendering).
     - Determines if the current page is an authentication page ("/login") by comparing the pathname.
  
  4. Render Logic:
     - The main container is a flex column that takes at least the full viewport height.
     - If `mounted` is true and the page is not the auth page, the Navbar is shown at the top.
     - If not on the auth page:
         - Renders a flex row with the Sidebar and a main content area.
         - The Sidebar appears on the left.
         - The main content gets extra left margin in medium+ screens and some top padding.
     - If on the auth page ("/login"):
         - Only the main content area for children is rendered—without Navbar and Sidebar.
     - The Footer component is rendered at the bottom in all cases.

  Summary:
  This component adapts the layout depending on the current route, hiding navigation and sidebar
  for authentication pages and ensuring layout components appear only after client-side mounting,
  thus improving user experience and preventing SSR/client-side mismatches.
*/

"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import type { ReactNode } from "react";

export default function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isAuthPage = pathname === "/login";

  return (
    <div className="min-h-screen flex flex-col">
      {mounted && !isAuthPage ? <Navbar /> : null}
      {!isAuthPage ? (
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 md:ml-[265px] pt-5">{children}</main>
        </div>
      ) : (
        <main className="flex-1">{children}</main>
      )}
      <Footer />
    </div>
  );
}



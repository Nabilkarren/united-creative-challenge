"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get the current path

  return (
    <html lang="en">
      <head>
        <title>United Creative Challenge</title>
        <meta
          name="description"
          content="Work of given challenge by United Creative"
        />
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={`antialiased`}>
        {/* Only show Navbar if the path is NOT "/dashboard" */}
        {!pathname.startsWith("/dashboard") && <Navbar />}
        <div className="bg-black">{children}</div>
      </body>
    </html>
  );
}

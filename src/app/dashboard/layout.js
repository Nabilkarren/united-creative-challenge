"use client";

import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="">
      <Sidebar>{children}</Sidebar>
    </div>
  );
}

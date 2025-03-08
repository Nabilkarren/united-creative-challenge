"use client";

import MemberTable from "@/components/MemberTable";

export default function MemberPage() {
  return (
    <div className="bg-gray-900 rounded-lg p-8">
      <p className="text-white font-medium pb-4 border-b border-gray-700">
        List of Members
      </p>

      <MemberTable />
    </div>
  );
}

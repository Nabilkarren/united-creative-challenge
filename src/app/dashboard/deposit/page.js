"use client";

import DashboardTable from "@/components/DashboardTable";

export default function DepositPage() {
  return (
    <div className="bg-gray-900 rounded-lg p-8">
      <p className="text-white font-medium pb-4 border-b border-gray-700">
        List of Deposit
      </p>

      <DashboardTable />
    </div>
  );
}

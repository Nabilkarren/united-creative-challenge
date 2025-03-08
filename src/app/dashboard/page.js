"use client";

import ColumnChart from "@/components/ColumnChart";

export default function Dashboard() {
  return (
    <>
      <div>
        <div className="flex justify-between items-center pb-4 border-b border-gray-800">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-white">Welcome John Doe</h1>
            <p className="text-white">How are you today?</p>
          </div>

          <div className="flex gap-4 items-center">
            <p className="text-white">Filter by:</p>
            <div className="flex gap-2">
              <button
                id="dropdownDefaultButton"
                className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                type="button"
              >
                Januari{" "}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <button
                id="dropdownDefaultButton"
                className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                type="button"
              >
                2023{" "}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-between gap-8 sm:flex-col md:flex-col lg:flex-row">
          <ColumnChart />

          <div className="grid grid-cols-2 w-full gap-8">
            <div className="bg-gray-900 rounded-lg py-4 px-6 flex flex-col gap-6 justify-center">
              <div className="flex gap-4 items-center">
                <img src="/dashboard-icon.png" alt="" className="w-12 h-12" />
                <p className="text-white text-xl font-medium">Total Deposit</p>
              </div>

              <div className="flex flex-col">
                <p className="text-white text-lg">IDR 0</p>
                <p className="text-white text-lg">0 Deposit(s)</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg py-4 px-6 flex flex-col gap-6 justify-center">
              <div className="flex gap-4 items-center">
                <img src="/dashboard-icon.png" alt="" className="w-12 h-12" />
                <p className="text-white text-xl font-medium">Total Withdraw</p>
              </div>

              <div className="flex flex-col">
                <p className="text-white text-lg">IDR 0</p>
                <p className="text-white text-lg">0 Withdraw(s)</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg py-4 px-6 flex flex-col gap-6 justify-center">
              <div className="flex gap-4 items-center">
                <img src="/dashboard-icon.png" alt="" className="w-12 h-12" />
                <p className="text-white text-xl font-medium">
                  Total Verified KYC
                </p>
              </div>

              <div className="flex flex-col">
                <p className="text-white text-lg">0 Verified</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg py-4 px-6 flex flex-col gap-6 justify-center">
              <div className="flex gap-4 items-center">
                <img src="/dashboard-icon.png" alt="" className="w-12 h-12" />
                <p className="text-white text-xl font-medium">
                  Total Registration
                </p>
              </div>

              <div className="flex flex-col">
                <p className="text-white text-lg">0 Registered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

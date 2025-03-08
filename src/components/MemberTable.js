"use client";

import Link from "next/link";

export default function MemberTable() {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-white uppercase dark:text-white">
          <tr>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center">
                No
                <a href="#">
                  <svg
                    class="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center">
                Email
                <a href="#">
                  <svg
                    class="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center">
                Username
                <a href="#">
                  <svg
                    class="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center">
                Name
                <a href="#">
                  <svg
                    class="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center">
                Status
                <a href="#">
                  <svg
                    class="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center">
                KYC
                <a href="#">
                  <svg
                    class="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </a>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b dark:border-gray-700 border-gray-200">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2"
            >
              <div className="">1.</div>
            </th>
            <td class="px-6 py-4 text-white">ronald@example.com</td>
            <td class="px-6 py-4 text-white">Ronald</td>
            <td class="px-6 py-4 text-white">Ronald Watson</td>
            <td class="px-6 py-4 text-white">
              <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-4 py-2 rounded-md dark:bg-green-900 dark:text-green-300">
                Active
              </span>
            </td>
            <td className="px-6 py-4">
              <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-4 py-2 rounded-md dark:bg-gray-700 dark:text-gray-300">
                No-KYC
              </span>
            </td>
          </tr>
          <tr class="border-b dark:border-gray-700 border-gray-200">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2"
            >
              <div className="">2.</div>
            </th>
            <td class="px-6 py-4 text-white">ronald@example.com</td>
            <td class="px-6 py-4 text-white">Ronald</td>
            <td class="px-6 py-4 text-white">Ronald Watson</td>
            <td class="px-6 py-4 text-white">
              <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-4 py-2 rounded-md dark:bg-green-900 dark:text-green-300">
                Active
              </span>
            </td>
            <td className="px-6 py-4">
              <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-4 py-2 rounded-md dark:bg-gray-700 dark:text-gray-300">
                No-KYC
              </span>
            </td>
          </tr>
          <tr class="border-b dark:border-gray-700 border-gray-200">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2"
            >
              <div className="">3.</div>
            </th>
            <td class="px-6 py-4 text-white">ronald@example.com</td>
            <td class="px-6 py-4 text-white">Ronald</td>
            <td class="px-6 py-4 text-white">Ronald Watson</td>
            <td class="px-6 py-4 text-white">
              <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-4 py-2 rounded-md dark:bg-green-900 dark:text-green-300">
                Active
              </span>
            </td>
            <td className="px-6 py-4">
              <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-4 py-2 rounded-md dark:bg-gray-700 dark:text-gray-300">
                No-KYC
              </span>
            </td>
          </tr>
          <tr class="border-b dark:border-gray-700 border-gray-200">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2"
            >
              <div className="">4.</div>
            </th>
            <td class="px-6 py-4 text-white">ronald@example.com</td>
            <td class="px-6 py-4 text-white">Ronald</td>
            <td class="px-6 py-4 text-white">Ronald Watson</td>
            <td class="px-6 py-4 text-white">
              <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-4 py-2 rounded-md dark:bg-green-900 dark:text-green-300">
                Active
              </span>
            </td>
            <td className="px-6 py-4">
              <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-4 py-2 rounded-md dark:bg-gray-700 dark:text-gray-300">
                No-KYC
              </span>
            </td>
          </tr>
          <tr>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2"
            >
              <div className="">5.</div>
            </th>
            <td class="px-6 py-4 text-white">ronald@example.com</td>
            <td class="px-6 py-4 text-white">Ronald</td>
            <td class="px-6 py-4 text-white">Ronald Watson</td>
            <td class="px-6 py-4 text-white">
              <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-4 py-2 rounded-md dark:bg-green-900 dark:text-green-300">
                Active
              </span>
            </td>
            <td className="px-6 py-4">
              <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-4 py-2 rounded-md dark:bg-gray-700 dark:text-gray-300">
                No-KYC
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

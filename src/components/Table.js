"use client";
import Link from "next/link";

export default function Table() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-12">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase bg-black dark:bg-black dark:text-white">
          <tr>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Pasangan
                <a href="#">
                  <svg
                    className="w-3 h-3 ms-1.5"
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
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Harga Terakhir
                <a href="#">
                  <svg
                    className="w-3 h-3 ms-1.5"
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
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Perubahan 24 Jam
                <a href="#">
                  <svg
                    className="w-3 h-3 ms-1.5"
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
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Tertinggi / Terendah 24 Jam
                <a href="#">
                  <svg
                    className="w-3 h-3 ms-1.5"
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
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Kapitalisasi Pasar
                <a href="#">
                  <svg
                    className="w-3 h-3 ms-1.5"
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
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Volume 24 Jam
                <a href="#">
                  <svg
                    className="w-3 h-3 ms-1.5"
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
          <tr className="border-b dark:border-gray-700 border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2"
            >
              <div className="flex items-center gap-2">
                <img
                  src="/star-active.png"
                  alt="favorite-active"
                  className="w-4 h-4"
                />
              </div>

              <div className="">
                <Link
                  href={"/crypto-details"}
                  className="hover:text-yellow-500"
                >
                  BTC/DAI
                </Link>
              </div>
            </th>
            <td className="px-6 py-4 text-white">
              98,832.93 / Rp 1,612,213,281.72
            </td>
            <td className="px-6 py-4 text-green-400">+3.89%</td>
            <td className="px-6 py-4 text-white">102,451.34 / Rp 94,288.07</td>
            <td className="px-6 py-4 text-white">Rp 31,953.008T</td>
            <td className="px-6 py-4 text-white">1.538M</td>
          </tr>
          <tr className="border-b dark:border-gray-700 border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2"
            >
              <div className="flex items-center gap-2">
                <img
                  src="/star-inactive.png"
                  alt="favorite-inactive"
                  className="w-4 h-4"
                />
              </div>

              <div className="">ETH/DAI</div>
            </th>
            <td className="px-6 py-4 text-white">
              98,832.93 / Rp 1,612,213,281.72
            </td>
            <td className="px-6 py-4 text-green-400">+3.89%</td>
            <td className="px-6 py-4 text-white">102,451.34 / Rp 94,288.07</td>
            <td className="px-6 py-4 text-white">Rp 31,953.008T</td>
            <td className="px-6 py-4 text-white">1.538M</td>
          </tr>
          <tr className="border-b dark:border-gray-700 border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2"
            >
              <div className="flex items-center gap-2">
                <img
                  src="/star-inactive.png"
                  alt="favorite-inactive"
                  className="w-4 h-4"
                />
              </div>

              <div className="">XRP/ETH</div>
            </th>
            <td className="px-6 py-4 text-white">
              98,832.93 / Rp 1,612,213,281.72
            </td>
            <td className="px-6 py-4 text-red-500">-3.89%</td>
            <td className="px-6 py-4 text-white">102,451.34 / Rp 94,288.07</td>
            <td className="px-6 py-4 text-white">Rp 31,953.008T</td>
            <td className="px-6 py-4 text-white">1.538M</td>
          </tr>
          <tr className="border-b dark:border-gray-700 border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2"
            >
              <div className="flex items-center gap-2">
                <img
                  src="/star-inactive.png"
                  alt="favorite-inactive"
                  className="w-4 h-4"
                />
              </div>

              <div className="">BTC/DAI</div>
            </th>
            <td className="px-6 py-4 text-white">
              98,832.93 / Rp 1,612,213,281.72
            </td>
            <td className="px-6 py-4 text-green-400">+3.89%</td>
            <td className="px-6 py-4 text-white">102,451.34 / Rp 94,288.07</td>
            <td className="px-6 py-4 text-white">Rp 31,953.008T</td>
            <td className="px-6 py-4 text-white">1.538M</td>
          </tr>
          <tr>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2"
            >
              <div className="flex items-center gap-2">
                <img
                  src="/star-inactive.png"
                  alt="favorite-inactive"
                  className="w-4 h-4"
                />
              </div>

              <div className="">BTC/DAI</div>
            </th>
            <td className="px-6 py-4 text-white">
              98,832.93 / Rp 1,612,213,281.72
            </td>
            <td className="px-6 py-4 text-green-400">+3.89%</td>
            <td className="px-6 py-4 text-white">102,451.34 / Rp 94,288.07</td>
            <td className="px-6 py-4 text-white">Rp 31,953.008T</td>
            <td className="px-6 py-4 text-white">1.538M</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

"use client";

import Area from "@/components/AreaChart";
import Table from "@/components/Table";

export default function Home() {
  return (
    <div className="px-20 py-8">
      <div className="flex flex-col gap-4">
        <p className="font-bold text-4xl text-white">Pasar</p>
        <p className="text-white">
          Harga Kripto dalam Rupiah Hari ini di Market Terbesar Indonesia
        </p>
      </div>

      <div className="grid grid-cols-4 gap-8 mt-12 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        <Area chartId={"chart-1"} color={"#FF3B3B"} trend={"down"} />
        <Area chartId={"chart-2"} color={"#FF3B3B"} trend={"down"} />
        <Area chartId={"chart-3"} color={"#23913B"} trend={"up"} />
        <Area chartId={"chart-4"} color={"#23913B"} trend={"up"} />
      </div>

      <div className="flex items-center gap-8 mt-12">
        <p className="font-bold text-2xl text-white">Favorit</p>

        <div className="flex gap-4 items-center">
          <div className="border-b-2 border-yellow-500">
            <p className="text-yellow-500 font-medium">IDR</p>
          </div>
          <p className="text-gray-500 font-medium hover:text-yellow-500">USD</p>
          <p className="text-gray-500 font-medium hover:text-yellow-500">BNB</p>
          <p className="text-gray-500 font-medium hover:text-yellow-500">BTC</p>
          <p className="text-gray-500 font-medium hover:text-yellow-500">
            ALTS
          </p>
        </div>
      </div>

      <div className="mt-8">
        <Table />
      </div>
    </div>
  );
}

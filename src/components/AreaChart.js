"use client";
import ApexCharts from "apexcharts";
import { useEffect, useRef, useState } from "react";
import { initFlowbite } from "flowbite";

export default function Area({ chartId, color, trend }) {
  useEffect(() => {
    initFlowbite();
  }, []);

  const chartRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    if (!containerRef.current) return;

    const options = {
      chart: {
        height: 200,
        maxWidth: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: color,
          gradientToColors: [color],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: 0,
        },
      },
      series: [
        {
          name: "New users",
          data: [6500, 6418, 6456, 6526, 6356, 6456],
          color: color,
        },
      ],
      xaxis: {
        categories: [
          "01 February",
          "02 February",
          "03 February",
          "04 February",
          "05 February",
          "06 February",
          "07 February",
        ],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
    };

    const chart = new ApexCharts(containerRef.current, options);
    chart.render();

    chartRef.current = chart;

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };

    // const chart = new ApexCharts(chartRef.current, options);
    // chart.render();
  }, [chartId, trend]);

  const trendColor = trend === "down" ? "text-red-500" : "text-green-500";
  const arrowIcon =
    trend === "down" ? (
      <svg
        className="w-5 h-5 text-red-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 18V5m0 13-4-4m4 4 4-4"
        />
      </svg>
    ) : (
      <svg
        className="w-5 h-5 text-green-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6v13m0-13 4 4m-4-4-4 4"
        />
      </svg>
    );

  return (
    <div className="w-full rounded-lg shadow-sm dark:bg-gray-900 p-4 md:p-6">
      <div className="flex justify-between">
        <div>
          <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
            TKO/IDR
          </h5>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Rp. 5,261.3
          </p>
        </div>
        <div
          className={`flex items-center px-2.5 py-0.5 text-base font-semibold text-center ${trendColor}`}
        >
          3.82%
          {arrowIcon}
        </div>
      </div>

      <div ref={containerRef} id={chartId}></div>

      <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
        <div className="flex justify-between items-center pt-5">
          <button
            className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
            type="button"
          >
            Volume: 2,258 IDR
          </button>
        </div>
      </div>
    </div>
  );
}

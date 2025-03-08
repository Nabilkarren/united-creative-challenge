"use client";

import ApexCharts from "apexcharts";
import { initFlowbite } from "flowbite";
import { useEffect, useRef } from "react";

export default function ColumnChart() {
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
      colors: ["#0ECB81", "#FDBA8C"],
      series: [
        {
          name: "Organic",
          color: "#0ECB81",
          data: [
            { x: "Mon", y: 231 },
            { x: "Tue", y: 122 },
            { x: "Wed", y: 63 },
            { x: "Thu", y: 421 },
            { x: "Fri", y: 122 },
            { x: "Sat", y: 323 },
            { x: "Sun", y: 111 },
          ],
        },
        // {
        //   name: "Social media",
        //   color: "#FDBA8C",
        //   data: [
        //     { x: "Mon", y: 232 },
        //     { x: "Tue", y: 113 },
        //     { x: "Wed", y: 341 },
        //     { x: "Thu", y: 224 },
        //     { x: "Fri", y: 522 },
        //     { x: "Sat", y: 411 },
        //     { x: "Sun", y: 243 },
        //   ],
        // },
      ],
      chart: {
        type: "bar",
        height: "320px",
        fontFamily: "Inter, sans-serif",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "70%",
          borderRadiusApplication: "end",
          borderRadius: 8,
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
        style: {
          fontFamily: "Inter, sans-serif",
        },
      },
      states: {
        hover: {
          filter: {
            type: "darken",
            value: 1,
          },
        },
      },
      stroke: {
        show: true,
        width: 0,
        colors: ["transparent"],
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -14,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        floating: false,
        labels: {
          show: false,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
          },
        },
      },
      fill: {
        opacity: 1,
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
  });

  return (
    <div class="max-w-sm w-full bg-gray-900 rounded-lg shadow-sm dark:bg-gray-900 p-4 md:p-6">
      <div class="flex justify-between pb-4 mb-4">
        <div>
          <p className="text-white font-medium">Bar Chart</p>
        </div>
      </div>

      <div ref={containerRef} id="column-chart"></div>
    </div>
  );
}

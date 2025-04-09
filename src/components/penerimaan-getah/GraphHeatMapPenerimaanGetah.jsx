import React from "react";
import ReactECharts from "echarts-for-react";
import { sampleData } from "./heatmapData2025";


const GraphHeatMapPenerimaanGetah = () => {
  const months = [...new Set(sampleData.map((item) => item[1]))];
  const devices = [...new Set(sampleData.map((item) => item[0]))];

  const chartData = sampleData.map((item) => ({
    value: [devices.indexOf(item[0]), months.indexOf(item[1]), item[3]],
    name: `${item[0]} - ${item[1]} ${item[2]}`,
    jumlah: item[3],
  }));

  const options = {
    tooltip: {
      position: "top",
      formatter: function (params) {
        return `
              <div style="font-weight:bold">${params.data.name}</div>
              <div>Total Koneksi: <b>${params.data.jumlah}</b></div>
            `;
      },
    },
    grid: {
      top: 80,
      left: 100,
      right: 50,
      bottom: 50,
    },
    xAxis: {
      type: "category",
      data: months,
      splitArea: { show: true },
      axisLabel: { rotate: 45 },
    },
    yAxis: {
      type: "category",
      data: devices,
      splitArea: { show: true },
    },
    visualMap: {
        show: false,
      min: 0,
      max: Math.max(...sampleData.map((item) => item[3])),
      calculable: true,
      orient: "horizontal",
      left: "center",
      bottom: "0%",
      inRange: {
        color: ["#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
      },
      textStyle: { color: "#333" },
    },
    series: [
      {
        name: "Koneksi",
        type: "heatmap",
        data: chartData,
        label: {
          show: true,
          formatter: function (params) {
            return params.data.jumlah;
          },
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        itemStyle: {
          borderColor: "#fff",
          borderWidth: 1,
        },
      },
    ],
    title: {
    },
  };

  return (
    <>
      <div style={{ width: "100%", height: "400px" }}>
        <ReactECharts
          option={options}
          style={{ height: "100%" }}
          theme="light"
        />
      </div>
    </>
  );
};

export default GraphHeatMapPenerimaanGetah;

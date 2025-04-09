import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";

const sampleData = [
  { timestamp: "2023-05-01T08:00:00", count: 12 },
  { timestamp: "2023-05-01T09:00:00", count: 19 },
  { timestamp: "2023-05-01T10:00:00", count: 23 },
  { timestamp: "2023-05-01T11:00:00", count: 15 },
  { timestamp: "2023-05-01T12:00:00", count: 30 },
];

const GraphTimelineMachineCon = () => {
  const chartData = sampleData.map((item) => [
    new Date(item.timestamp).getTime(), // Konversi ke timestamp
    item.count,
  ]);

  const options = {
    tooltip: {
      trigger: "axis",
      formatter: function (params) {
        const date = new Date(params[0].value[0]);
        return `
              <div style="padding: 5px">
                <div>${date.toLocaleString()}</div>
                <div>Jumlah: ${params[0].value[1]}</div>
              </div>
            `;
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "time",
      axisLabel: {
        formatter: function (value) {
          return new Date(value).toLocaleTimeString();
        },
      },
      name: "Waktu",
      nameLocation: "middle",
      nameGap: 30,
    },
    yAxis: {
      type: "value",
      name: "Jumlah Data",
      nameLocation: "middle",
      nameGap: 30,
    },
    series: [
      {
        name: "Data Masuk",
        type: "line",
        showSymbol: true,
        data: chartData,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "rgba(58, 77, 233, 0.8)" },
            { offset: 1, color: "rgba(58, 77, 233, 0.1)" },
          ]),
        },
        itemStyle: {
          color: "#3a4de9",
        },
        emphasis: {
          focus: "series",
        },
      },
    ],
    dataZoom: [
      {
        type: "inside",
        start: 0,
        end: 100,
      },
      {
        start: 0,
        end: 100,
      },
    ],
  };

  return (
    <>
      <div style={{ width: "600px", height: "320px" }}>
        <ReactECharts
          option={options}
          style={{ height: "300px", width: "600px" }}
          notMerge={true}
          lazyUpdate={true}
          theme="light"
        />
      </div>
    </>
  );
};

export default GraphTimelineMachineCon;

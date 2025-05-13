import { useContext} from "react";
import { TransformMonthData } from "../../common/TransformMonthData";
import ReactECharts from "echarts-for-react";
import { TransformHeatMapData } from "../../common/TransformHeatMapData";
import { PenerimaanGetahByRangeContext } from "../../store/PenerimaanGetahByRangeContext";
import { enumMonthNames } from "../../shared/enumMonthNames";

export const GraphOnlineDeviceMonth = () => {
  const { alatMengirimGetah } = useContext(PenerimaanGetahByRangeContext);

  const alatMengirimGetahTransformed =
    TransformHeatMapData.execute(alatMengirimGetah);

  const positiveCounts = alatMengirimGetahTransformed.reduce((acc, item) => {
    const month = item[1];
    const year = item[2];
    const value = item[3];

    if (value > 0) {
      const existing = acc.find((x) => x.month === month && x.year === year);

      if (existing) {
        existing.count++;
      } else {
        acc.push({ month, year, count: 1 });
      }
    }

    return acc;
  }, []);

  const targetYear = positiveCounts[0]?.year;

  const existingData = {};
  positiveCounts.forEach((item) => {
    existingData[item.month] = item.count;
  });

  const completeData = enumMonthNames.map((month) => ({
    count: existingData[month] || 0,
    mount: month,
    year: targetYear,
  }));

  const counts = completeData.map((item) => item.count);
  const months = completeData.map((item) => item.mount);

    const option = {
      title: {
        text: "Jumlah Alat Mengirim Getah per Bulan 2025",
        left: "center",
      },
      tooltip: {
        trigger: "axis",
      },
      xAxis: {
        type: "category",
        data: months,
        name: "Bulan",
        axisLabel: {
          interval: 0,
        },
      },
      yAxis: {
        type: "value",
        name: "Jumlah Online",
      },
      series: [
        {
          data: counts,
          type: "line",
          smooth: true,
          areaStyle: {
            color: "rgba(58, 77, 233, 0.1)",
          },
          lineStyle: {
            width: 3,
          },
          markPoint: {
            data: [
              { type: "max", name: "Max" },
              { type: "min", name: "Min" },
            ],
          },
        },
      ],
    };

    return (
      <section>
        <div className="bg-white mt-7 pt-5">
          <ReactECharts option={option} style={{ height: 400 }} />
        </div>
      </section>
    );
};

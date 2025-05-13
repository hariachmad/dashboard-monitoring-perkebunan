/* eslint-disable no-unused-vars */
import { enumMonthNames } from "../shared/enumMonthNames";

export class TransformHeatMapData {
  static execute(dataSet) {
    const dataSetReduced = dataSet.map((data) => {
      const { m_imei, m_uuid, rupiah, ...newObj } = data;
      return newObj;
    });

    const transformedDataSet = dataSetReduced.map((data) => {
      const dateTimeString = data.createdAt;
      const stringToDate = new Date(dateTimeString);
      const month = enumMonthNames[stringToDate.getMonth()];
      const year = stringToDate.getFullYear();

      const { createdAt, ...newObj } = data;
      return { month, year, ...newObj };
    });

    const uniqueArrayDataSet = Array.from(
      new Set(transformedDataSet.map((obj) => JSON.stringify(obj)))
    ).map((str) => JSON.parse(str));

    const finalDataSet = uniqueArrayDataSet.map((data) => {
      let count = 0;
      transformedDataSet.map((transformData) => {
        if (
          data.month == transformData.month &&
          data.year == transformData.year &&
          data.npk == transformData.npk
        ) {
          count += 1;
        }
      });
      return { ...data, count };
    });

    const dataStore = [];

    finalDataSet.map((data) => {
      enumMonthNames.map((dataEnumMonth) => {
        if (data.month != dataEnumMonth) {
          dataStore.push({
            npk: data.npk,
            month: dataEnumMonth,
            year: data.year,
            count: 0,
          });
        } else {
          dataStore.push({
            npk: data.npk,
            month: data.month,
            year: data.year,
            count: data.count,
          });
        }
      });
    });

    function removeDuplicatesKeepMaxMultiField(arr, compareFields, valueField) {
        const map = new Map();
      
        arr.forEach((item) => {
          const key = compareFields.map((f) => item[f]).join("|");
          const compareValue = item[valueField];
      
          if (!map.has(key) || compareValue > map.get(key)[valueField]) {
            map.set(key, item);
          }
        });
      
        return Array.from(map.values());
      }
      
      const result = removeDuplicatesKeepMaxMultiField(
        dataStore,
        ["month", "npk"],
        "count"
      );
      
      const finalDataStore = [];
      
      result.forEach((data) => {
        finalDataStore.push(Object.values(data));
      });
      return finalDataStore;
  }
}

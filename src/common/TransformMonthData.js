import { enumMonthNames } from "../shared/enumMonthNames";

export class TransformMonthData {
  static execute(dataSet) {
    const result = dataSet.map(
      (data) => enumMonthNames[new Date(data.tglUpload).getMonth()]
    );
    const resultSet = new Set(result);
    const resultArray = [...resultSet];
    const value = [];
    resultSet.forEach((data) => {
      var count = result.filter((str) => str == data).length;
      value.push(count);
    });
    const transformedResult = resultArray.reduce((acc, key, index) => {
      acc.push({ [key]: value[index] });
      return acc;
    }, []);
    const keys = [];
    const values = [];

    const inputObj = transformedResult.reduce((acc, monthObj) => {
      const [month, value] = Object.entries(monthObj)[0];
      acc[month] = value;
      return acc;
    }, {});

    const completeData = enumMonthNames.map((month) => {
      return { [month]: inputObj[month] || 0 };
    });

    completeData.forEach((obj) => {
      const [key, value] = Object.entries(obj)[0];
      keys.push(key);
      values.push(value);
    });
    return { keys, values };
  }
}

import { useContext } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { DateRangePenerimaanGetahContext } from "../../store/DateRangePenerimaanGetahContext";

export const DatepickerAlatTerkoneksi = () => {
  const { startDate, setStartDate} = useContext(
    DateRangePenerimaanGetahContext
  );
  return (
    <>
      <DatePicker
        className="border-1 border-gray-400 rounded-sm shadow pl-[20%] text-sm text-gray-500 w-36 px-2"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </>
  );
};

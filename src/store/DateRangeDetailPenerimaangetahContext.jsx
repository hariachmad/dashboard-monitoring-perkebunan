import { createContext, useState } from "react";

export const DateRangeDetailPenerimaanGetahContext = createContext();

export const DateRangeDetailPenerimaanGetahProvider = ({ children }) => {
  const [startDate,setStartDate] = useState(new Date());
  const [endDate,setEndDate] = useState(new Date());

  return (
    <DateRangeDetailPenerimaanGetahContext.Provider
      value={{ startDate,setStartDate,endDate,setEndDate }}
    >
      {children}
    </DateRangeDetailPenerimaanGetahContext.Provider>
  );
};

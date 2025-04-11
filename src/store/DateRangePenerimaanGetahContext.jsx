import { createContext,useState } from "react";

export const DateRangePenerimaanGetahContext = createContext();

export const DateRangePenerimaanGetahProvider = ({ children }) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DateRangePenerimaanGetahContext.Provider
      value={{ startDate, setStartDate }}
    >
      {children}
    </DateRangePenerimaanGetahContext.Provider>
  );
};

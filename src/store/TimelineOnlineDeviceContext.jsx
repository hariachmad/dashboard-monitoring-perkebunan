import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const TimelineOnlineDeviceContext = createContext();

export const TimelineOnlineDeviceProvider = ({ children, interval= 5000 }) => {
  const [alatTerkoneksiByRange, setAlatTerkoneksiByRange] = useState([]);

  const query = `
  query GetUserEventDateRangeWithCount {
    getUserEventDateRangeWithCount(
        filter: { startDate: "2025-01-01", endDate: "2025-12-31" }
    ) {
        userGetEvents {
            ip
            onlineDate
        }
    }
}

`;

const fetchData = () => {
    axios
      .post("http://157.230.38.147:4000/graphql", { query: query })
      .then((response) => {
        setAlatTerkoneksiByRange(response.data.data.getUserEventDateRangeWithCount.userGetEvents);
      })
      .catch((err) => {
        console.error(err);
      });
}

  useEffect(() => {
    const intervalId = setInterval(fetchData, interval);

    return () => clearInterval(intervalId);
    
  }, [interval]);

  return (
    <TimelineOnlineDeviceContext.Provider
      value={
        {alatTerkoneksiByRange, setAlatTerkoneksiByRange}
      }
    >
      {children}
    </TimelineOnlineDeviceContext.Provider>
  );
};

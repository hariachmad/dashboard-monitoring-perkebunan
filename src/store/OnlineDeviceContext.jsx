import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const OnlineDeviceContext = createContext();

export const OnlineDeviceProvider = ({ children, interval= 5000 }) => {
  const [alatTerkoneksiHariIni, setAlatTerkoneksiHariIni] = useState(0);

  const query = `query GetUserEventTodayWithCount {
    getUserEventTodayWithCount {
        count
    }
}
`;

const fetchData = () => {
    axios
      .post("http://157.230.38.147:4000/graphql", { query: query })
      .then((response) => {
        setAlatTerkoneksiHariIni(response.data.data.getUserEventTodayWithCount.count);
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
    <OnlineDeviceContext.Provider
      value={
        {alatTerkoneksiHariIni, setAlatTerkoneksiHariIni}
      }
    >
      {children}
    </OnlineDeviceContext.Provider>
  );
};

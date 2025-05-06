import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const PenerimaanGetahTodayContext = createContext();

export const PenerimaanGetahTodayProvider = ({ children,interval = 5000 }) => {
  const [alatMengirimGetahHariIni, setAlatMengirimGetahHariIni] = useState(0);
  const [rupiahPengirimanGetahHariIni, setRupiahMengirimGetahHariIni] =
    useState(0);

  const query = `query GetPenerimaanGetahEventToday {
    getPenerimaanGetahEventToday {
        count
        rupiah
    }
}
`;

const fetchData = ()=>{
    axios
      .post(process.env.REACT_APP_API_URL+"/graphql", { query: query })
      .then((response) => {
        setAlatMengirimGetahHariIni(response.data.data.getPenerimaanGetahEventToday.count);
        setRupiahMengirimGetahHariIni(response.data.data.getPenerimaanGetahEventToday.rupiah);
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
    <PenerimaanGetahTodayContext.Provider
      value={
        {alatMengirimGetahHariIni,
        setAlatMengirimGetahHariIni,
        rupiahPengirimanGetahHariIni,
        setRupiahMengirimGetahHariIni}
      }
    >
      {children}
    </PenerimaanGetahTodayContext.Provider>
  );
};

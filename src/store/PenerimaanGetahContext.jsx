import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const PenerimaanGetahContext = createContext();

export const PenerimaanGetahProvider = ({ children,interval = 5000 }) => {
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
      .post("http://localhost:4000/graphql", { query: query })
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
    <PenerimaanGetahContext.Provider
      value={
        {alatMengirimGetahHariIni,
        setAlatMengirimGetahHariIni,
        rupiahPengirimanGetahHariIni,
        setRupiahMengirimGetahHariIni}
      }
    >
      {children}
    </PenerimaanGetahContext.Provider>
  );
};

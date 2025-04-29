import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { DateRangeDetailPenerimaanGetahContext } from "./DateRangeDetailPenerimaangetahContext";

export const DetailPenerimaanGetahContext = createContext();

export const DetailPenerimaanGetahProvider = ({ children }) => {
  const { startDate, setStartDate, endDate, setEndDate } = useContext(
    DateRangeDetailPenerimaanGetahContext
  );
  const [result, setResult] = useState([]);

  console.log("startDate: ",startDate);
  console.log("endDate: ",endDate);

  const query = `query DetailPenerimaanGetah {
    detailPenerimaanGetah(
        filter: { startDate: "${startDate}", endDate: "${endDate}" }
    ) {
        hargaDasar
        hargaTambahan
        idTransaksi
        imei
        jumlah
        mutu
        npk
        penyadap
        petak
        tglUpload
        total
        tpg
        username
        wilayah
    }
}
`;

  const fetchData = () => {
    axios
      .post("http://157.230.38.147:4000/graphql", { query: query })
      .then((response) => {
        setResult(response.data.data.detailPenerimaanGetah);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [endDate,startDate]);

  return (
    <DetailPenerimaanGetahContext.Provider value={{ result, setResult }}>
      {children}
    </DetailPenerimaanGetahContext.Provider>
  );
};

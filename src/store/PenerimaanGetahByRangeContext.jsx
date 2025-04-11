import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const PenerimaanGetahByRangeContext = createContext();

export const PenerimaanGetahByRangeProvider = ({
  children,
  interval = 5000,
}) => {
  const [alatMengirimGetah, setAlatMengirimGetah] = useState([]);

  const query = `query GetPenerimaanGetahEventWithDateRange {
    getPenerimaanGetahEventWithDateRange(
        filter: { startDate: "2025-01-01", endDate: "2025-12-31" }
    ) {
        penerimaanGetahCreatedEvent {
            createdAt
            m_imei
            m_uuid
            npk
            rupiah
        }
    }
}
`;

  const fetchData = () => {
    axios
      .post("http://157.230.38.147:4000/graphql", { query: query })
      .then((response) => {
        setAlatMengirimGetah(
          response.data.data.getPenerimaanGetahEventWithDateRange
            .penerimaanGetahCreatedEvent
        );
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    const intervalId = setInterval(fetchData, interval);

    return () => clearInterval(intervalId);
  }, [interval]);

  return (
    <PenerimaanGetahByRangeContext.Provider value={{ alatMengirimGetah }}>
      {children}
    </PenerimaanGetahByRangeContext.Provider>
  );
};

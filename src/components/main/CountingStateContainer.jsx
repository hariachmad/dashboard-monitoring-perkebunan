import { useContext } from "react";
import { PenerimaanGetahTodayContext } from "../../store/PenerimaanGetahTodayContext";
import { OnlineDeviceContext } from "../../store/OnlineDeviceContext";
import { CountingState } from "./CountingState";

export const CountingStateContainer = () => {
  const { alatMengirimGetahHariIni, rupiahPengirimanGetahHariIni } = useContext(
    PenerimaanGetahTodayContext
  );
  const { alatTerkoneksiHariIni } = useContext(OnlineDeviceContext);

  return (
    <CountingState
      data={{
        alatMengirimGetahHariIni,
        rupiahPengirimanGetahHariIni,
        alatTerkoneksiHariIni,
      }}
    ></CountingState>
  );
};

import { useContext } from "react";
import { PenerimaanGetahContext } from "../../store/PenerimaanGetahContext";
import PenerimaanGetahByMandorGraph from "./PenerimaanGetahByMandorGraph";
import { OnlineDeviceContext } from "../../store/OnlineDeviceContext";

export const PenerimaanGetahByMandorGraphContainer = () => {
  const { alatMengirimGetahHariIni, rupiahPengirimanGetahHariIni } = useContext(
    PenerimaanGetahContext
  );
  const {alatTerkoneksiHariIni} = useContext(OnlineDeviceContext);

  return <PenerimaanGetahByMandorGraph data={{alatMengirimGetahHariIni, rupiahPengirimanGetahHariIni,alatTerkoneksiHariIni}} />
};

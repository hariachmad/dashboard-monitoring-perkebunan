import { useContext } from "react";
import PenerimaanGetahByMandorGraph from "./PenerimaanGetahByMandorGraph";
import { OnlineDeviceContext } from "../../store/OnlineDeviceContext";
import { PenerimaanGetahTodayContext } from "../../store/PenerimaanGetahTodayContext";
import { PenerimaanGetahByRangeContext } from "../../store/PenerimaanGetahByRangeContext";
import { TransformHeatMapData } from "../../common/TransformHeatMapData";

export const PenerimaanGetahByMandorGraphContainer = () => {
  const { alatMengirimGetahHariIni, rupiahPengirimanGetahHariIni } = useContext(
    PenerimaanGetahTodayContext
  );
  const { alatTerkoneksiHariIni } = useContext(OnlineDeviceContext);
  const { alatMengirimGetah } = useContext(PenerimaanGetahByRangeContext);  

  const alatMengirimGetahTransformed = TransformHeatMapData.execute(alatMengirimGetah);

  return (
    <PenerimaanGetahByMandorGraph
      data={{
        alatMengirimGetahHariIni,
        rupiahPengirimanGetahHariIni,
        alatTerkoneksiHariIni,
        alatMengirimGetahTransformed
      }}
    />
  );
};

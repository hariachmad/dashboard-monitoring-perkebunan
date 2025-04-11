import { useContext } from "react";
import { PenerimaanGetahByRangeContext } from "../../store/PenerimaanGetahByRangeContext";
import { TransformHeatMapData } from "../../common/TransformHeatMapData";
import { GraphPenerimaanGetah } from "./GraphPenerimaanGetah";

export const GraphPenerimaanGetahContainer = () => {
    const {alatMengirimGetah} = useContext(PenerimaanGetahByRangeContext);
    
    const alatMengirimGetahTransformed = TransformHeatMapData.execute(alatMengirimGetah);


    return <GraphPenerimaanGetah data={{alatMengirimGetahTransformed}}/>
}
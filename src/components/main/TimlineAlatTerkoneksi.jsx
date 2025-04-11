import { useContext } from "react";
import { DatepickerAlatTerkoneksi } from "./DatepickerAlatTerkoneksi";
import GraphTimelineMachine from "./GraphTimelineMachine";
import { TimelineOnlineDeviceContext } from "../../store/TimelineOnlineDeviceContext";
import { DateRangePenerimaanGetahContext } from "../../store/DateRangePenerimaanGetahContext";
import { TransformTimeline } from "../../common/TransformTimelineData";

export const TimelineAlatTekoneksi = () => {
  const { alatTerkoneksiByRange } = useContext(TimelineOnlineDeviceContext);
  const { startDate } = useContext(DateRangePenerimaanGetahContext);
  const result = TransformTimeline.execute(alatTerkoneksiByRange, startDate);
  const count = result.reduce((acc,val)=>{
    return acc+val.count
  },0);

  return (
    <>
      <section>
        <div className="bg-white flex flex-col items-center rounded shadow-sm">
          <div className="flex flex-row gap-1.5 mt-3 self-start ml-3 items-center">
            <p className="text-gray-500 text-sm">Tanggal : </p>
            <DatepickerAlatTerkoneksi />
          </div>

          <b className="text-gray-600 mt-3">Timeline Alat Terkoneksi</b>
          <b className="text-green-500 mt-3 text-3xl">{count}</b>
          <GraphTimelineMachine />
        </div>
      </section>
    </>
  );
};

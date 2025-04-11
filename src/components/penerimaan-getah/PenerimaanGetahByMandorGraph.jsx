import { FaArrowCircleLeft } from "react-icons/fa";
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdDevices } from "react-icons/md";
import GraphTimelineMachineCon from "./GraphTimelineMachineCon";
import GraphHeatMapPenerimaanGetah from "./GraphHeatMapPenerimaanGetah";

const PenerimaanGetahByMandorGraph = ({ data }) => {
  return (
    <>
      <div className="w-screen h-screen">
        <div className="flex-auto ml-18">
          <div className="flex flex-col">
            <div className="flex flex-col bg-white">
              <div className="flex flex-row space-x-3">
                <h4 className="font-bold text-gray-500 p-1">Dashboard</h4>
              </div>
              <p className="text-gray-400 p-1">{new Date().toDateString()}</p>
            </div>
            <div className="min-h-screen bg-green-200">
              <div className="mt-8 grid gap-10 lg:grid-cols-3 p-4">
                {/* Grid */}
                <div className="flex flex-col relative items-center bg-white rounded shadow-sm justify-between p-5">
                  <div className="text-sm text-gray-400">
                    Alat Terkoneksi Hari Ini
                  </div>
                  <div className="flex items-center pt-1">
                    <div className="text-3xl font-medium text-gray-600 mr-2">
                      {data.alatTerkoneksiHariIni}
                    </div>
                  </div>
                  <div className="text-green-500 absolute right-5 top-[35%] text-3xl">
                    <FaArrowCircleLeft />
                  </div>
                </div>
                <div className="flex flex-col relative items-center bg-white rounded shadow-sm justify-between p-5">
                  <div className="text-sm text-gray-400">
                    Alat Mengirim Getah Hari Ini
                  </div>
                  <div className="flex items-center pt-1">
                    <div className="text-3xl font-medium text-gray-600 mr-2">
                      {data.alatMengirimGetahHariIni}
                    </div>
                  </div>
                  <div className="text-green-500 absolute right-5 top-[35%] text-3xl">
                    <MdDevices />
                  </div>
                </div>
                <div className="flex flex-col relative items-center bg-white rounded shadow-sm justify-between p-5">
                  <div className="text-sm text-gray-400">
                    Rupiah Penerimaan Getah Hari Ini
                  </div>
                  <div className="flex items-center pt-1">
                    <div className="text-3xl font-medium text-gray-600 mr-2">
                      {data.rupiahPengirimanGetahHariIni}
                    </div>
                  </div>
                  <div className="text-green-500 absolute right-5 top-[35%] text-3xl">
                    <BiMoneyWithdraw />
                  </div>
                </div>
                {/* Grid-end */}
              </div>
              {/* Grid */}
              <div className="mt-5 flex flex-col ml-2">
                <div className="bg-white flex flex-col items-center rounded shadow-sm">
                  <b className="text-gray-600 mt-3">Timeline Alat Terkoneksi</b>
                  <GraphTimelineMachineCon/>
                </div>
                <div className="bg-white flex flex-col items-center rounded shadow-sm">
                  <b className="text-gray-600 mt-3 mb-[-40px]">
                    Heatmap Pengiriman Getah per Alat 2025
                  </b>
                  <GraphHeatMapPenerimaanGetah data={data.alatMengirimGetahTransformed} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PenerimaanGetahByMandorGraph;

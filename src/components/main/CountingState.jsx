import { BiMoneyWithdraw } from "react-icons/bi";
import { FaArrowCircleLeft } from "react-icons/fa";
import { MdDevices } from "react-icons/md";

export const CountingState = ({data}) => {
  return (
    <>
      <section>
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
      </section>
    </>
  );
};

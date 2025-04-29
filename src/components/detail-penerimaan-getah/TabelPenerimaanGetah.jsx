import { useContext } from "react";
import { DetailPenerimaanGetahContext } from "../../store/DetailPenerimaanGetahContext";

const data = [
  {
    wilayah: "000001",
    petak: "000012",
    tpg: "0000123",
    username: "Hari Achmad",
    npk: "123456",
    penyadap: "wahyu",
    mutu: "1A",
    jumlah: "100",
    hargaDasar: "4900",
    hargaTambahan: "8332",
    total: "164152",
    idTransaksi: "axxass1",
    imei: "2sssdt",
    tglUpload: "2025-08-04",
  },
  {
    wilayah: "000002",
    petak: "000022",
    tpg: "0000124",
    username: "Wira Majid Prambudi",
    npk: "123457",
    penyadap: "Aziz",
    mutu: "1A",
    jumlah: "200",
    hargaDasar: "9000",
    hargaTambahan: "8332",
    total: "164152",
    idTransaksi: "axxass2",
    imei: "2sssdf",
    tglUpload: "2025-08-04",
  },
];

export const TablePenerimaanGetah = () => {
  const { result } = useContext(DetailPenerimaanGetahContext);

  return (
    <>
      <div className="">
        <table
          className="min-w-full text-[0.6rem] bg-white rounded-lg overflow-hidden"
          style={{ fontFamily: "Montserrat" }}
        >
          <thead className="bg-gray-800 text-white">
            <tr style={{ fontFamily: "sans-serif" }}>
              <th className="py-3 px-4 text-left">No.</th>
              <th className="py-3 px-4 text-left">WILAYAH</th>
              <th className="py-3 px-4 text-left">PETAK</th>
              <th className="py-3 px-4 text-left">TPG</th>
              <th className="py-3 px-4 text-left">USERNAME</th>
              <th className="py-3 px-4 text-left">NPK</th>
              <th className="py-3 px-4 text-left">PENYADAP</th>
              <th className="py-3 px-4 text-left">MUTU</th>
              <th className="py-3 px-4 text-left">JUMLAH</th>
              <th className="py-3 px-4 text-left">HARGA DASAR</th>
              <th className="py-3 px-4 text-left">HARGA TAMBAHAN</th>
              <th className="py-3 px-4 text-left">TOTAL</th>
              <th className="py-3 px-4 text-left">ID TRANSAKSI</th>
              <th className="py-3 px-4 text-left">IMEI</th>
              <th className="py-3 px-4 text-left">TGL UPLOAD</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {result.map((item, index) => (
              <tr
                key={item.id}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100 transition-colors`}
              >
                <td className="py-3 px-4 border-b">{index+1}</td>
                <td className="py-3 px-4 border-b">{item.wilayah}</td>
                <td className="py-3 px-4 border-b">{item.petak}</td>
                <td className="py-3 px-4 border-b">{item.tpg}</td>
                <td className="py-3 px-4 border-b ">{item.username}</td>
                <td className="py-3 px-4 border-b">{item.npk}</td>
                <td className="py-3 px-4 border-b">{item.penyadap}</td>
                <td className="py-3 px-4 border-b">{item.mutu}</td>
                <td className="py-3 px-4 border-b">{item.jumlah}</td>
                <td className="py-3 px-4 border-b">{item.hargaDasar}</td>
                <td className="py-3 px-4 border-b">{item.hargaTambahan}</td>
                <td className="py-3 px-4 border-b">{item.total}</td>
                <td className="py-3 px-4 border-b">{item.idTransaksi}</td>
                <td className="py-3 px-4 border-b">{item.imei}</td>
                <td className="py-3 px-4 border-b">{item.tglUpload}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

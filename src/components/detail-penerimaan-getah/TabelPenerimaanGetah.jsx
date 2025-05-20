import { useContext, useRef, useState } from "react";
import { DetailPenerimaanGetahContext } from "../../store/DetailPenerimaanGetahContext";
import { CiSearch } from "react-icons/ci";
import useClickOutside from "../../hooks/useClickOutside";

export const TablePenerimaanGetah = () => {
  const { result, setResult } = useContext(DetailPenerimaanGetahContext);
  const [temp, setTemp] = useState([]);
  const [activeSearch, setActiveSearch] = useState(null);
  const tableRef = useRef(null);

  const handleSearchClick = (field) => {
    setActiveSearch(field);
  };

  const handleSearchEnterTpg = (event) => {
    if (event.key == "Enter" && event.target.value != "") {
      event.preventDefault();
      const searchValue = event.target.value;
      const filteredData = result.filter((data) => data.tpg == searchValue);
      setTemp(result);
      setResult(filteredData);
    } else if (event.key == "Enter" && event.target.value == "") {
      setResult(temp);
    }
  };

  const handleSearchEnterUsername = (event) => {
    if (event.key == "Enter" && event.target.value != "") {
      event.preventDefault();
      const searchValue = event.target.value;
      const filteredData = result.filter(
        (data) => data.username == searchValue
      );
      setTemp(result);
      setResult(filteredData);
    } else if (event.key == "Enter" && event.target.value == "") {
      setResult(temp);
    }
  };

  useClickOutside(tableRef, () => {
    setActiveSearch(null);
  });

  return (
    <>
      <div ref={tableRef}>
        <table
          className="min-w-full text-[0.6rem] bg-white rounded-lg overflow-hidden"
          style={{ fontFamily: "Montserrat" }}
        >
          <thead className="bg-gray-800 text-white">
            <tr style={{ fontFamily: "sans-serif" }}>
              <th className="py-3 px-4 text-left">No.</th>
              <th className="py-3 px-4 text-left">WILAYAH</th>
              <th className="py-3 px-4 text-left">PETAK</th>
              <th
                key="tpg"
                scope="col"
                className="px-4 py-3 text-left text-white uppercase tracking-wider cursor-pointer"
                onClick={() => handleSearchClick("tpg")}
              >
                <div className="flex flex-col">
                  <span>TPG</span>
                  {activeSearch === "tpg" && (
                    <div className="flex flex-row items-center gap-1">
                      <input
                        type="text"
                        className="mt-1 px-2 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder={`Search TPG`}
                        onKeyDown={handleSearchEnterTpg}
                      ></input>
                      <CiSearch size={15} />
                    </div>
                  )}
                </div>
              </th>
              <th
                key="username"
                scope="col"
                className="px-4 py-3 text-left text-white uppercase tracking-wider cursor-pointer"
                onClick={() => handleSearchClick("username")}
              >
                <div className="flex flex-col">
                  <span>USERNAME</span>
                  {activeSearch === "username" && (
                    <div className="flex flex-row items-center gap-1">
                      <input
                        type="text"
                        className="mt-1 px-2 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder={`Search username`}
                        onKeyDown={handleSearchEnterUsername}
                      ></input>
                      <CiSearch size={15} />
                    </div>
                  )}
                </div>
              </th>
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
            {result.length == 0 ? (
              <p className="pl-2 w-[150px] text-sm">Data tidak tersedia</p>
            ) : (
              result.map((item, index) => (
                <tr
                  key={item.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100 transition-colors`}
                >
                  <td className="py-3 px-4 border-b">{index + 1}</td>
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
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

import GraphHeatMapPenerimaanGetah from "./GraphHeatMapPenerimaanGetah";

export const GraphPenerimaanGetah = ({ data }) => {
  return (
    <>
      <section>
        <div className="bg-white flex flex-col items-center rounded shadow-sm">
          <b className="text-gray-600 mt-3 mb-[-40px]">
            Heatmap Pengiriman Getah per Alat 2025
          </b>
          <GraphHeatMapPenerimaanGetah
            data={data.alatMengirimGetahTransformed}
          />
        </div>
      </section>
    </>
  );
};

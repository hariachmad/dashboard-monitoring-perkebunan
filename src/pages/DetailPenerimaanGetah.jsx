import { DatepickerDetailPenerimaanGetah } from "../components/detail-penerimaan-getah/DatepickerDetailPenerimaanGetah";
import { TablePenerimaanGetah } from "../components/detail-penerimaan-getah/TabelPenerimaanGetah";
import Layout from "../layouts/MainLayout";

const DetailPenerimaanGetah = () => {
  return (
    <Layout>
        <DatepickerDetailPenerimaanGetah></DatepickerDetailPenerimaanGetah>
        <TablePenerimaanGetah></TablePenerimaanGetah>
    </Layout>
  );
};

export default DetailPenerimaanGetah;

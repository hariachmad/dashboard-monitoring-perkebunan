import { TableDetailComplaintsContainer } from "../components/detail-complaints/TableDetailComplaintsContainer";
import { DatepickerDetailPenerimaanGetah } from "../components/detail-penerimaan-getah/DatepickerDetailPenerimaanGetah";
import Layout from "../layouts/MainLayout";

const DetailComplaints = () => {
  return (
    <Layout>
        <DatepickerDetailPenerimaanGetah></DatepickerDetailPenerimaanGetah>
        <TableDetailComplaintsContainer/>
    </Layout>
  );
};

export default DetailComplaints;

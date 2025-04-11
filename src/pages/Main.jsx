import Layout from "../layouts/MainLayout";
import { Header } from "../components/Header";
import { CountingStateContainer } from "../components/main/CountingStateContainer";
import { TimelineAlatTekoneksi } from "../components/main/TimlineAlatTerkoneksi";
import { GraphPenerimaanGetahContainer } from "../components/main/GraphPenerimaanGetahContainer";
import { DatepickerAlatTerkoneksi } from "../components/main/DatepickerAlatTerkoneksi";

const Main = () => {
  return (
    <Layout>
      <div className="w-screen h-screen">
        <div className="flex-auto ml-18">
          <div className="flex flex-col">
            <Header />
            <div className="min-h-screen bg-green-200">
              <CountingStateContainer />
              {/* Grid */}
              <div className="mt-5 flex flex-col ml-2">
                <TimelineAlatTekoneksi />
                <GraphPenerimaanGetahContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Main;

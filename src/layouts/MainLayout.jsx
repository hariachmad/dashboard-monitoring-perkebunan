import Footer from "../components/Footer";
import { Header } from "../components/Header";
import Navigation from "../components/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className="w-[1350px] h-screen">
        <div className="flex-auto ml-18">
          <div className="flex flex-col">
            <Header />
            <div className="min-h-screen bg-green-200 pr-3">
            <main>{children}</main>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;

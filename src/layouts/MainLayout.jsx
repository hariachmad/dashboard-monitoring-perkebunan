import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className="w-screen h-screen">
        <div className="flex-auto ml-18">
          <div className="flex flex-col">
            <Header />
            <div className="min-h-screen bg-green-200"></div>
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;

import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Main from "./pages/Main";
import DetailPenerimaanGetah from "./pages/DetailPenerimaanGetah";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    // <>
    //   <Main />
    // </>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail-penerimaan-getah" element={<DetailPenerimaanGetah />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Main from "./pages/Main";
import DetailPenerimaanGetah from "./pages/DetailPenerimaanGetah";
import { NotFound } from "./pages/NotFound";
import { Login } from "./pages/Login";
import DetailComplaints from "./pages/DetailComplaints";

function App() {
  return (
    // <>
    //   <Main />
    // </>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/complaint" element={<DetailComplaints />} />
        <Route path="/detail-penerimaan-getah" element={<DetailPenerimaanGetah />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

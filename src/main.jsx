import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PenerimaanGetahProvider } from "./store/PenerimaanGetahContext.jsx";
import { OnlineDeviceProvider } from "./store/OnlineDeviceContext.jsx";

createRoot(document.getElementById("root")).render(
  <OnlineDeviceProvider>
    <PenerimaanGetahProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </PenerimaanGetahProvider>
  </OnlineDeviceProvider>
);

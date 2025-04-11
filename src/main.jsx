import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { OnlineDeviceProvider } from "./store/OnlineDeviceContext.jsx";
import { PenerimaanGetahTodayProvider } from "./store/PenerimaanGetahTodayContext.jsx";
import { PenerimaanGetahByRangeProvider } from "./store/PenerimaanGetahByRangeContext.jsx";
import { TimelineOnlineDeviceProvider } from "./store/TimelineOnlineDeviceContext.jsx";

createRoot(document.getElementById("root")).render(
  <TimelineOnlineDeviceProvider>
    <PenerimaanGetahByRangeProvider>
      <OnlineDeviceProvider>
        <PenerimaanGetahTodayProvider>
          <StrictMode>
            <App />
          </StrictMode>
        </PenerimaanGetahTodayProvider>
      </OnlineDeviceProvider>
    </PenerimaanGetahByRangeProvider>
  </TimelineOnlineDeviceProvider>
);

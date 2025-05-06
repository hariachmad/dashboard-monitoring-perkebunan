import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { OnlineDeviceProvider } from "./store/OnlineDeviceContext.jsx";
import { PenerimaanGetahTodayProvider } from "./store/PenerimaanGetahTodayContext.jsx";
import { PenerimaanGetahByRangeProvider } from "./store/PenerimaanGetahByRangeContext.jsx";
import { TimelineOnlineDeviceProvider } from "./store/TimelineOnlineDeviceContext.jsx";
import {
  DateRangePenerimaanGetahContext,
  DateRangePenerimaanGetahProvider,
} from "./store/DateRangePenerimaanGetahContext.jsx";
import { DetailPenerimaanGetahProvider } from "./store/DetailPenerimaanGetahContext.jsx";
import { DateRangeDetailPenerimaanGetahProvider } from "./store/DateRangeDetailPenerimaangetahContext.jsx";
import { AuthProvider } from "./store/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <DateRangeDetailPenerimaanGetahProvider>
      <DetailPenerimaanGetahProvider>
        <DateRangePenerimaanGetahProvider>
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
        </DateRangePenerimaanGetahProvider>
      </DetailPenerimaanGetahProvider>
    </DateRangeDetailPenerimaanGetahProvider>
  </AuthProvider>
);

import { useContext, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangeDetailPenerimaanGetahContext } from "../../store/DateRangeDetailPenerimaangetahContext";
import { addDays, format } from "date-fns";

export const DatepickerDetailPenerimaanGetah = () => {
  const { startDate, setStartDate, endDate, setEndDate } = useContext(
    DateRangeDetailPenerimaanGetahContext
  );

  const [startDateLocal,setStartDateLocal] = useState(new Date());
  const [endDateLocal,setEndDateLocal] = useState(new Date());
  return (
    <>
      <div className="flex flex-row p-6 gap-2">
        {/* Start Date */}
        <div className="flex flex-row gap-3 justify-center items-center space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Start Date
          </label>
          <div className="relative">
            <input
              type="date"
              value={format(startDateLocal,'yyyy-MM-dd')}
              onChange={(e) => setStartDateLocal(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* End Date */}
        <div className="flex flex-row gap-3 justify-center items-center  space-y-2">
          <label className="text-sm font-medium text-gray-700">End Date</label>
          <div className="relative">
            <input
              type="date"
              value={format(endDateLocal,'yyyy-MM-dd')}
              min={format(startDateLocal,'yyyy-MM-dd')}
              onChange={(e) => setEndDateLocal(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center text-center">
          <button
            // onClick={handleApply}
            className="!w-[100%] !text-center !h-8 !px-7 !bg-blue-300 text-white !rounded-md !hover:bg-blue-700 !focus:outline-none !focus:ring-2 !focus:ring-blue-500 !focus:ring-offset-2"
            onClick={()=>{
                setStartDate(format(startDateLocal,'yyyy-MM-dd'));
                setEndDate(format(addDays(endDateLocal,1),'yyyy-MM-dd'));
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
};

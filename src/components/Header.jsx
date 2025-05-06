import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";

export const Header = () => {
  const {fullname} = useContext(AuthContext)
  return (
    <>
      <section>
        <div className="flex flex-row">
          <div className="flex flex-col bg-white">
            <div className="flex flex-row space-x-3">
              <h4 className="font-bold text-gray-500 p-1">Dashboard</h4>
            </div>
            <p className="text-gray-400 p-1">{new Date().toDateString()}</p>
          </div>
          <div className="absolute left-[50%] top-5"><p className="text-gray-500">Halo, {fullname}</p></div>
        </div>
      </section>
    </>
  );
};

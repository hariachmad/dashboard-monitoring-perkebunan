import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdOutlineCallReceived } from "react-icons/md";
import { NavLink } from "react-router";

const Navigation = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "PENERIMAAN GETAH", link: "detail-penerimaan-getah" },
  ];

  return (
    <>
      <nav
        className={` z-10 flex flex-col items-center fixed h-screen bg-green-300 left-0 top-0 p-2 pt-8 shadow-2xl duration-300 rounded-r-md ${
          open ? "w-[17%]" : "w-[5%]"
        }`}
      >
        {open ? (
          <FaArrowLeft
            className="bg-green-100 text-green-700 text-5xl rounded-full absolute -right-6 top-[50%] p-2 shadow-2xs cursor-pointer"
            onClick={() => {
              setOpen(!open);
            }}
          />
        ) : (
          <FaArrowRight
            className="bg-green-100 text-green-700 text-5xl rounded-full absolute -right-6 top-[50%] p-2 shadow-2xs cursor-pointer"
            onClick={() => {
              setOpen(!open);
            }}
          />
        )}
        <NavLink to={'/'}>
          {open ? (
            <img src="logo-perhutani.png" className="w-28 h-12  duration-300" />
          ) : (
            <img
              src="logo-perhutani-mini.jpg"
              className="w-12 h-12  duration-300"
            />
          )}
        </NavLink>
        <div
          className={`flex items-center align-middle justify-center rounded-md bg-gray-100 mt-12 ${
            !open ? "px-1 w-12" : "px-4"
          } py-2`}
        >
          <CiSearch
            className={`text-gray-600 text-lg block float-left cursor-pointer`}
          />
          <input
            type="search"
            placeholder="Search"
            className={`ml-2 text-base bg-transparent w-full text-black focus:outline-none ${
              !open && "hidden"
            }`}
          />
        </div>
        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
              <li key={index}>
                <NavLink
                  to={`/${menu.link}`}
                  className={`text-sm flex items-center gap-x-4 cursor-pointer p-2 bg-green-500 hover:bg-green-700 rounded-md mt-8  `}
                >
                  <MdOutlineCallReceived className="text-white" />
                  <span className={`${!open && "hidden"} text-white`}>
                    {menu.title}
                  </span>
                </NavLink>
              </li>
            </>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;

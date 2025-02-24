import React, { useState } from "react";
import Calender from "../../icons/Calender.jsx";
import Token from "../../icons/Token";
import Square from "../../icons/Square";
import Profile from "../../icons/User";
import Social from "../../icons/Social";
import Key from "../../icons/Key";
import Log from "../../icons/Log";
import {
  IoIosCloseCircle,
  IoMdArrowDropdown,
  IoMdArrowDropup,
} from "react-icons/io";
import { Link } from "react-router-dom";
import hospitalBg from "../../assets/hospital.png";
import check from "../../assets/check.png";
import { IoMenuSharp } from "react-icons/io5";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
const DoctorProfile = ({ drawerOpen, setDrawerOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeState, setActiveState] = useState(1);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const menuItems = [
    { id: 1, icon: <Calender />, label: "tokens", path: "" },
    { id: 2, icon: <Token />, label: "appointments history", path: "" },
    { id: 3, icon: <Square />, label: "reports", path: "" },
    { id: 4, icon: <Profile />, label: "profile settings", path: "" },
    { id: 5, icon: <Social />, label: "social media", path: "" },
    { id: 6, icon: <Key />, label: "change password", path: "" },
    { id: 7, icon: <Log />, label: "logout", path: "" },
  ];
  return (
    <>
      <button
        className="drawer-toggle-user flex items-center justify-center w-[38px] h-[38px] bg-[#009efb] mr-auto rounded-full cursor-pointer max-[767px]:m-auto"
        onClick={toggleDrawer}
      >
        <HiOutlineMenuAlt1 className="menu_icon text-[28px] text-[#FFF]" />
        
      </button>

      <div
        className={`profile_drawer ${
          drawerOpen ? "open" : ""
        } profile rounded-[12px] max-[1199px]:rounded-[0px]`}
        style={{ boxShadow: "rgba(149, 157, 165, 0.3) 0px 8px 24px" }}
      >
        <button
          className="drawer-close drawer-close-user p-2"
          onClick={toggleDrawer}
        >
          <IoIosCloseCircle className="w-[35px] h-[35px] text-white" />
        </button>
        <div className="bg-pattern bg-[#0050ff] rounded-t-[12px] w-full max-[1199px]:rounded-t-[0px]">
          <img
            src={hospitalBg}
            alt="hospital pattern"
            className="hospital_pattern opacity-25 min-h-[150px] h-[150px] w-full"
          />
        </div>
        <div className="avatar text-center m-auto p-6 -mt-[110px] mb-0 relative">
          <div className="relative profile_image w-[150px] h-[150px] m-auto bg-[#ff5200] rounded-full border-3 border-white flex items-center justify-center">
            <p className="text-white uppercase text-5xl">k</p>
            <img
              src={check}
              alt="check"
              className="w-[20px] h-[20px] absolute right-5 bottom-0 "
            />
          </div>
          <div className="profile_details pt-2 mt-2">
            <h4 className="capitalize font-semibold text-xl pb-1.5">
              k senthil kumar
            </h4>
            <p className="font-medium text-[#272b41] text-sm">
              MDS - Periodontology and Oral Implantology, BDS
            </p>
          </div>
        </div>
        <div className="doctor_availability bg-[#f8fafc] p-6 w-full">
          <p className="capitalize font-medium text-[#272b41] text-[14px]">
            Availability <span className="mandatory text-red-500">*</span>
          </p>

          <div className="relative inline-flex w-full">
            <button
              type="button"
              onClick={toggleDropdown}
              className="w-full py-2.5 mt-2 px-4 capitalize flex items-center justify-between gap-x-2 text-sm font-medium rounded-sm border border-gray-200 bg-white text-gray-800"
            >
              I am available now
              {isDropdownOpen ? (
                <IoMdArrowDropdown className="text-lg text-[#646985]" />
              ) : (
                <IoMdArrowDropup className="text-lg text-[#646985]" />
              )}
            </button>

            <div
              className={`w-full absolute top-13 z-10 mt-2 bg-white border border-gray-200 rounded-sm transition-all duration-300 ease-in-out ${
                isDropdownOpen
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="p-0 space-y-0.5">
                <Link
                  className="block py-2 px-3 text-sm font-medium text-gray-800 hover:bg-gray-100"
                  to=""
                >
                  Newsletter
                </Link>
                <Link
                  className="block py-2 px-3 text-sm font-medium text-gray-800 hover:bg-gray-100"
                  to=""
                >
                  Purchases
                </Link>
                <Link
                  className="block py-2 px-3 text-sm font-medium text-gray-800 hover:bg-gray-100"
                  to=""
                >
                  Downloads
                </Link>
                <Link
                  className="block py-2 px-3 text-sm font-medium text-gray-800 hover:bg-gray-100"
                  to=""
                >
                  Team Account
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="list_menu_item p-2 w-full overflow-y-auto max-h-[50vh] sm:max-h-[60vh] -webkit-overflow-scrolling-touch">
          <div className="hs-dropdown relative flex">
            <div className="p-1.5 space-y-0.5 block w-full">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  className={`flex items-center gap-x-2.5 py-4 mb-0 px-3 text-[15px] leading-none font-medium text-[#646985] capitalize transition svgicon ${
                    activeState === item.id
                      ? "active bg-[#ff5200] text-white rounded-md"
                      : ""
                  }`}
                  to={item.path}
                  onClick={() => setActiveState(item.id)}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorProfile;

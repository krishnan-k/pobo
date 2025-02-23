import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LuRefreshCw } from "react-icons/lu";
import BookingDetails from "./BookingDetails";
import BookingProgress from "./BookingProgress";

const Appoinments = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  return (
    <div className="appoinment_section">
      <div className="flex justify-between border-b-[1px] border-[#e2e8f0] pb-3 max-[767px]:flex-col gap-y-[20px] max-[576px]:justify-center items-center">
        <div className="appoinment_heading">
          <h3 className="text-[26px] leading-none font-semibold text-[#272b41] capitalize max-[767px]:text-[20px]">
            today appoinments ( 5 / 40){" "}
          </h3>
        </div>
        <div className="button_content">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex items-center gap-2 capitalize font-medium text-[#ff5200] border border-[#ff5200] rounded-[5px] px-5 py-2"
            >
              <LuRefreshCw />
              refresh
            </button>
            <div className="relative inline-flex w-full">
              <button
                type="button"
                onClick={toggleDropdown}
                className="py-2.5 mt-0 px-2 capitalize flex items-center justify-between gap-x-2 text-sm font-medium rounded-sm border border-gray-200 bg-white text-gray-800"
              >
                Today
                {isDropdownOpen ? (
                  <i className="fa fa-chevron-up ml-3 text-[10px]"></i>
                ) : (
                  <i className="fa fa-chevron-down ml-3 text-[10px]"></i>
                )}
              </button>

              <div
                className={`w-full absolute top-11 z-10 mt-0 bg-white border border-gray-200 rounded-sm transition-all duration-300 ease-in-out ${
                  isDropdownOpen
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="p-0 space-y-0.5">
                  <Link
                    className="block py-2 px-3 text-sm font-medium text-gray-800 hover:bg-gray-100 capitalize"
                    to=""
                  >
                    yesterday
                  </Link>
                  <Link
                    className="block py-2 px-3 text-sm font-medium text-gray-800 hover:bg-gray-100 capitalize"
                    to=""
                  >
                    tomorrow
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BookingDetails/>
      <BookingProgress/>
    </div>
  );
};

export default Appoinments;

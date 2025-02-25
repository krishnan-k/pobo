import React from "react";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import one from "../../assets/1.png";
import two from "../../assets/2.png";
import three from "../../assets/3.png";
import four from "../../assets/4.png";
import five from "../../assets/5.png";
import six from "../../assets/6.png";
import seven from "../../assets/7.png";
import eight from "../../assets/8.png";
import nine from "../../assets/9.png";
import { Link } from "react-router";
const BookingDetails = () => {
  return (
    <>
      <div
        className="flex items-end justify-between flex-wrap gap-y-[20px] px-6 py-6.5 mt-5 rounded-[12px] max-[767px]:flex-col max-[767px]:items-start max-[767px]:pl-5 max-[767px]:py-4 max-[767px]:pr-3.5 max-[767px]:gap-y-[0px] responsive_box"
        style={{ boxShadow: "rgba(149, 157, 165, 0.1) 0px 21px 35px" }}
      >
        <div className="profile_character flex items-center justify-start gap-2 flex-row basis-44 max-[767px]:basis-auto max-[767px]:pb-4">
          <div className="profile_avatar w-[50px] h-[50px] bg-[#ff5200] flex items-center justify-center rounded-xl">
            <p className="text-white font-bold uppercase text-xl">sa</p>
          </div>
          <div className="">
            <p className="profile_tag text-[#5462d5] font-semibold text-xs">
              #487
            </p>
            <p className="profile_name font-bold capitalize text-base pt-1">
              sanjai
            </p>
          </div>
        </div>

        <div className="booking_date">
          <div className="booking_date_time">
            <p className="text-[#334155] uppercase font-normal flex items-center justify-between gap-1 text-[15px] mb-1">
              <MdOutlineAccessTimeFilled className="text-[#272b41]" />
              21-feb-2025 12:00 PM
            </p>
            <p className="text-[#272b41] text-[14px] font-medium capitalize">
              direct visit
            </p>
          </div>
        </div>
        <div className="booking_status max-[767px]:w-full max-[767px]:pt-2 max-[767px]:mt-4 max-[767px]:border-t-[1px] max-[767px]:border-[#e2e8f0]">
          <div className="flex items-center justify-between mb-1 flex-wrap gap-y-[5px]">
            <div className="accept px-3.5 flex items-center justify-between gap-2 border-r-[2px] border-gray-200 max-[767px]:pl-0 max-[767px]:border-r-[0px] max-[767px]:pl-0">
              <i className="fa fa-check text-[#0f9500]" aria-hidden="true"></i>
              <p className="capitalize font-medium text-[#0f9500] text-[15px] underline">
                accept
              </p>
            </div>
            <div className="reject px-3.5 flex items-center justify-between gap-2 border-r-[1.5px] border-gray-200 max-[767px]:border-r-[0px] max-[767px]:pl-0">
              <i className="fa fa-close text-[#d30d47]" aria-hidden="true"></i>
              <p className="capitalize font-medium text-[#d30d47] text-[15px] underline">
                reject
              </p>
            </div>
            <div className="missed px-3.5 flex items-center justify-between gap-2 border-r-[1.5px] border-gray-200 max-[767px]:border-r-[0px] max-[767px]:pl-0">
              <i className="fa-solid fa-pause text-[#ffbc34]"></i>
              <p className="capitalize font-medium text-[#ffbc34] text-[15px] underline">
                missed
              </p>
            </div>
            <div className="start_now px-3.5 pr-0 flex items-center justify-between gap-2 relative max-[767px]:pl-0">
              <i className="fa-solid fa-play"></i>
              <div className="book_status">
                <div className="absolute right-0 -top-[26px] bg-[#009efb] px-2 py-1 rounded-lg max-[767px]:relative max-[767px]:top-0">
                  <p className="text-xs capitalize font-bold text-white text-center">
                    booked
                  </p>
                </div>
                <div className="book_now">
                  <p className="capitalize font-medium text-[15px] underline">
                    start now
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="pl-8.5 pr-6.5 pb-5 pt-6 rounded-[12px] border border-[#e2e8f0] my-4 max-[767px]:pl-5 max-[767px]:pr-5 max-[767px]:my-4 max-[767px]:pb-3.5 responsive_box1"
        style={{ boxShadow: "rgba(149, 157, 165, 0.15) 0px 8px 24px" }}
      >
        <div className="appoinment_details_section flex items-start justify-between flex-wrap gap-y-[20px] max-[767px]:flex-col max-[767px]:gap-y-[0px]">
          <div className="appoinment_information max-[767px]:w-full max-[767px]:pb-4 max-[767px]:mb-4 max-[767px]:border-b-[1px] max-[767px]:border-[#e2e8f0]">
            <div className="flex items-center justify-start gap-2 pb-2.5">
              <img src={one} alt="image" className="ml-1" />
              {/* <i
                class="fa-regular fa-address-book text-[#6b72a1] text-lg"
                aria-hidden="true"
              ></i> */}
              <p className="capitalize font-bold text-[#ff5200]">
                #487 - sanjai m
              </p>
            </div>
            <div className="flex items-center justify-start gap-2 pb-2.5">
              <img src={two} alt="image" />
              {/* <i class="fa-solid fa-envelope text-[#6b72a1] text-lg"></i> */}
              <>
                <Link to="mailto: sanjaikumar.pobo@gmail.com">
                  <p className="text-[#686767] font-normal text-[15px] hover:text-[#ff5200] transition">
                    sanjaikumar.pobo@gmail.com
                  </p>
                </Link>
              </>
            </div>
            <div className="flex items-center justify-start gap-2">
              {/* <i
                class="fa fa-mobile text-[#6b72a1] text-lg"
                aria-hidden="true"
              ></i> */}
              <img src={three} alt="image" className="ml-1" />
              <>
                <Link to="tel: 9655770823" className="link">
                  <p className="text-[#686767] font-normal text-[15px] resposive_mobile hover:text-[#ff5200] transition">
                    9655770823
                  </p>
                </Link>
              </>
            </div>
          </div>
          <div className="booking_consulation pl-6.5 max-[767px]:pl-0 max-[767px]:w-full max-[767px]:pb-4 max-[767px]:mb-4 max-[767px]:border-b-[1px] max-[767px]:border-[#e2e8f0]">
            <div className="flex items-center justify-start gap-2 pb-2.5">
              {/* <i class="far fa-calendar-check text-[#6b72a1] text-lg"></i> */}
              <img src={four} alt="image" />
              <p className="text-[#686767] font-semibold uppercase">
                21-feb-2025 12:00 pm
              </p>
            </div>
            <div className="flex items-center justify-start gap-2 pb-2.5 consul">
              {/* <i class="fa fa-stethoscope text-[#6b72a1] text-lg"></i> */}
              <img src={five} alt="image" className="ml-.5" />
              <p className="text-[#686767] font-normal capitalize text-[15px]">
                consultation
              </p>
            </div>
            <div className="flex items-center justify-start gap-2">
              {/* <i class="fa fa-hospital text-[#6b72a1] text-lg"></i> */}
              <img src={six} alt="image" />
              <p className="text-[#686767] font-normal capitalize text-[15px]">
                direct visit
              </p>
            </div>
          </div>
          <div className="booking_icon flex-row basis-43 max-[767px]:basis-auto">
            <div className="flex items-center justify-start gap-2 pb-2.5">
              {/* <i class="fa-solid fa-bookmark text-[#6b72a1] text-lg"></i> */}
              <img src={seven} alt="image" />
              <p className="capitalize font-bold text-[#009efb] text-[15px]">
                booked
              </p>
            </div>
            <div className="flex items-center justify-start gap-2 pb-2.5">
              {/* <i
                class="fa fa-inr text-[#000] text-lg"
                aria-hidden="true"
              ></i> */}
              <img src={eight} alt="image" />
              <p className="text-[#6b72a1] font-normal text-[15px]">1500</p>
            </div>
            <div className="flex items-center justify-start gap-2">
              {/* <i class="far fa-check-circle text-[#000] text-lg"></i> */}
              <img src={nine} alt="image" className="-ml-1.5" />
              <p className="capitalize text-[#6b72a1] text-[15px]">paid</p>
            </div>
          </div>
        </div>
        <div className="booking_status pt-6 mt-5 border-t-[1px] border-[#e2e8f0] max-[767px]:pt-3.5 max-[767px]:mt-3.5">
          <div className="flex items-center justify-end mb-1 max-[767px]:justify-start flex-wrap gap-y-[5px]">
            <div className="accept px-5.5 flex items-center justify-between gap-2 border-r-[2px] border-gray-200 max-[767px]:pl-0 max-[767px]:border-r-[0px]">
              <i className="fa fa-check text-[#0f9500]" aria-hidden="true"></i>
              <p className="capitalize font-bold text-[#0f9500] text-[15px] underline">
                accept
              </p>
            </div>
            <div className="reject px-5.5 flex items-center justify-between gap-2 border-r-[1.5px] border-gray-200 max-[767px]:pl-0 max-[767px]:border-r-[0px]">
              <i className="fa fa-close text-[#d30d47]" aria-hidden="true"></i>
              <p className="capitalize font-bold text-[#d30d47] text-[15px] underline">
                reject
              </p>
            </div>
            <div className="missed px-5.5 flex items-center justify-between gap-2 border-r-[1.5px] border-gray-200 max-[767px]:pl-0 max-[767px]:border-r-[0px]">
              <i className="fa-solid fa-pause text-[#ffbc34]"></i>
              <p className="capitalize font-bold text-[#ffbc34] text-[15px] underline">
                missed
              </p>
            </div>
            <div className="missed px-5.5 flex items-center justify-between gap-2 border-r-[1.5px] border-gray-200 max-[767px]:pl-0 max-[767px]:border-r-[0px]">
              <i className="fa-solid fa-play text-[#009efb]"></i>
              <p className="capitalize font-bold text-[#009efb] text-[15px] underline">
                open now
              </p>
            </div>
            <div className="start_now px-5.5 pr-0 flex items-center justify-between gap-2 relative max-[767px]:pl-0">
              <i className="fa fa-check text-[#10ce62]"></i>
              <div className="book_status">
                <div className="book_now">
                  <p className="capitalize font-bold text-[#10ce62] text-[15px] underline">
                    completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingDetails;

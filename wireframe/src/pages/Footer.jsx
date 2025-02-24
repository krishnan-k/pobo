import React from "react";
import footerLogo from "../assets/footerlogo.png";
import ten from "../assets/ten.png";
import phone from "../assets/11.png";
import mail from "../assets/12.png";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  const facebook = "https://facebook.com/";
  const instagram = "https://www.instagram.com/";
  const twitter = "https://x.com/";
  const linkedin = "https://www.linkedin.com/";
  return (
    <>
      <div className="footer_section bg-[#f9fafb] py-15 max-[1199px]:py-7">
        <div className="footer_content max-w-[1320px] m-auto pl-4 pr-4 flex justify-between max-[767px]:flex-col max-[1199px]:flex-wrap max-[1199px]:gap-8 max-[767px]:gap-2">
          <div className="flex justify-start gap-10 max-[767px]:flex-col max-[767px]:gap-5">
            <div className="footer_logo flex-row basis-72 max-[767px]:basis-auto">
              <img src={footerLogo} alt="footer-logo" />
              <p className="pt-6 text-sm">
                Effortlessly schedule your medical appoinments with QPOBO.
                Connect with healthcare professionals, manage appoinments &
                prioritize your well being
              </p>
            </div>
            <div className="contact_us">
              <h2 className="capitalize font-semibold text-[18px] pb-5 max-[1199px]:pb-2.5">
                contact us
              </h2>
              <div className="flex items-center justify-start gap-2 pb-3.5">
                <img src={ten} alt="image" />
                <p className="capitalize text-[14px]">thillai nagar, Trichy</p>
              </div>
              <div className="flex items-center justify-start gap-2 pb-3.5">
                <img src={phone} alt="image" />
                <Link to='tel: +91 96299 12381' className="link"><p className="capitalize text-[14px] hover:text-[#ff5200] transition">+91 96299 12381</p></Link>
                
              </div>
              <div className="flex items-center justify-start gap-2 pb-3.5">
                <img src={mail} alt="image" />
                <Link to='mailto: qpobosales@pobotechnologies.com'><p className="text-[14px] hover:text-[#ff5200] transition">qpobosales@pobotechnologies.com</p></Link>
                
              </div>
            </div>
          </div>
          <div className="w-[25rem] max-[576px]:w-full">
            <h2 className="capitalize font-semibold text-[18px] pb-5 max-[1199px]:pb-2.5">
              join our newsletter
            </h2>
            <div className="btn-section">
              <form>
                <div className="mt-0 flex max-w-md relative max-[576px]:gap-3 max-[576px]:flex-col">
                  <label for="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    className="bg-white min-w-0 flex-auto rounded-md border border-[#e2e8f0] px-3.5 py-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-700 placeholder:capitalize placeholder:font-medium placeholder:font-[16px] focus:outline-2 focus:-outline-offset-2 focus:outline-[#ff5200] sm:text-sm/6"
                    placeholder="Enter email address"
                  />
                  <button
                    type="submit"
                    className="h-[48px] font-[16px] flex-none capitalize absolute top-1/2 -translate-y-1/2 right-0 rounded-tl-none rounded-tr-[5px] rounded-bl-none rounded-br-[5px] transition
                     bg-[#ff5200] px-4 py-3 text-sm font-semibold text-white shadow-xs hover:bg-[#009efb] focus-visible:outline-2 
                     focus-visible:outline-offset-2 focus-visible:outline-[#ff5200] max-[576px]:relative max-[576px]:inset-auto max-[576px]:transform-none max-[576px]:translate-none
                     max-[576px]:rounded-[5px]"
                  >
                    submit
                  </button>
                </div>
              </form>
            </div>
            <div className="social-icons flex items-center justify-start gap-4 pt-5">
              <Link to={facebook} target="blank" className="w-[38px] h-[38px] flex items-center justify-center bg-[#e5e7eb] rounded-full">
                <FaFacebook className="text-[20px]"/>
              </Link>
              <Link to={instagram} target="blank" className="w-[38px] h-[38px] flex items-center justify-center bg-[#e5e7eb] rounded-full">
                <FaInstagram className="text-[20px]"/>
              </Link>
              <Link to={twitter} target="blank" className="w-[38px] h-[38px] flex items-center justify-center bg-[#e5e7eb] rounded-full">
                <FaXTwitter className="text-[20px]"/>
              </Link>
              <Link to={linkedin} target="blank" className="w-[38px] h-[38px] flex items-center justify-center bg-[#e5e7eb] rounded-full">
                <FaLinkedinIn className="text-[20px]"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom bg-[#f3f4f6] py-4">
        <div className="max-w-[1320px] m-auto pl-4 pr-4 flex items-center justify-between max-[767px]:flex-col max-[767px]:gap-2">
          <div className="footer-bottom-content container">
            <p className="text-sm text-[#858383] max-[767px]:text-center">
              Copyright © 2025 QPOBO. All Rights Reserved, Development - V.1.4.6
            </p>
          </div>
          <div className="policy_links flex items-center justify-end w-full max-[767px]:justify-center max-[576px]:flex-col max-[576px]:gap-1.5 max-[767px]:flex-wrap">
            <Link to=""><p className="text-sm text-[#303030] capitalize border-r-[1px] border-gray-400 px-3.5 max-[576px]:border-r-[0px] hover:text-[#ff5200] transition">privacy policy </p></Link>
            <Link to=""><p className="text-sm text-[#303030] capitalize border-r-[1px] border-gray-400 px-3.5 max-[576px]:border-r-[0px] hover:text-[#ff5200] transition">Terms and Conditions</p></Link>
            <Link to=""><p className="text-sm text-[#303030] capitalize px-3.5 pr-0 hover:text-[#ff5200] transition">Refund Policy</p></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

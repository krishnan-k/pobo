import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import user from "../assets/user.png";

const Navbar = () => {
  const [isHospitalsOpen, setIsHospitalsOpen] = useState(false);
  const [activeState, setActiveState] = useState(1);

  const toggleDropdown = () => {
    setIsHospitalsOpen(!isHospitalsOpen);
  };

  const handleMouseOver = (index) => {
    setActiveState(index);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsHospitalsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const menuItems = [
    {
      href: "/hospitals", label: "hospitals",
      submenu: [{ href: "/", label: "Home" }],
    },
    { 
      href: "/doctors", label: "doctors",
      submenu: [{ href: "/", label: "Home" }],
    },
    { 
      href: "/whoweare", label: "who we are?",
      submenu: [{ href: "/", label: "Home" }],
    },
  ];

  return (
    <div className="bg-[#f9fcff]">
      <div className="header_section max-w-[1320px] m-auto flex items-center justify-between pt-7 pb-7 pr-1 pl-1 md_screen">
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="logo" style={{ width: "160px",objectFit: "contain" }}/>
          </Link>
        </div>
        <div className="navigation">
          <nav>
            <ul className="flex">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`${
                  activeState === index ? "active" : ""} mr-8 relative dropdown`}
                  onClick={() => handleMouseOver(index)}
                >
                  <Link
                    className={`${activeState === index ? "text-[#ff5200]" : "text-[#1f2937]"} 
                    capitalize font-medium text-[15px] flex items-center transition`}
                    to={item.href}
                    onClick={item.submenu? (e) => {e.preventDefault();toggleDropdown();}: undefined}>
                    {item.label}
                    {item.submenu && (
                    <i className="fa fa-chevron-down ml-3 text-[10px]"></i>
                    )}
                  </Link>

                  {item.submenu && isHospitalsOpen && (
                    <ul className="absolute left-0 mt-2 bg-white border rounded shadow-lg w-40">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex} className="p-2 hover:bg-gray-200">
                          <Link to={subItem.href}>{subItem.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="user_icon flex items-center">
          <img src={user} alt="user" className="border" style={{ width: "35px", height: "35px", objectFit: "contain", borderRadius: "50%" }}/>
          <i className="fa fa-chevron-down ml-2 text-[10px]"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

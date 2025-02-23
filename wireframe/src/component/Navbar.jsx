import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoIosCloseCircle } from "react-icons/io";
import "../component-css/Navbar.css";
import { IoMenuSharp } from "react-icons/io5";
const Navbar = () => {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [activeState, setActiveState] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  // const handleMouseOver = (index) => {
  //   setActiveState(index);
  //   setDrawerOpen(!drawerOpen);
  // };
  const toggleDropdown = (index) => {
    setOpenSubmenu((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setOpenSubmenu(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const menuItems = [
    {
      href: "/hospitals",
      label: "hospitals",
    },
    {
      href: "/doctors",
      label: "doctors",
    },
    {
      href: "/whoweare",
      label: "who we are?",
    },
  ];

  return (
    <div className={`navbar-section ${drawerOpen ? 'active' : ''} bg-[#f9fcff]`}>
      <div className="header_section max-w-[1320px] m-auto flex items-center justify-between pt-7 pb-7 pr-1 pl-1 md_screen">
        <div className="header-logo">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              style={{ width: "160px", objectFit: "contain" }}
            />
          </Link>
        </div>
        <button className="drawer-toggle ml-auto cursor-pointer" onClick={toggleDrawer}>
          <IoMenuSharp className="w-[35px] h-[35px] mr-4" />
        </button>
        <div className={`nav-content ${drawerOpen ? "open" : ""}`}>
          <button className="drawer-close p-2" onClick={toggleDrawer}>
            <IoIosCloseCircle className="w-[35px] h-[35px] text-[#ff5200]"/>
          </button>
          <nav>
            <ul className="flex">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`relative dropdown mr-10 ${
                    activeState === index ? "active" : ""
                  }`}
                  onMouseEnter={() => setOpenSubmenu(index)}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  <Link
                    className={`capitalize font-medium text-[15px] flex items-center transition ${
                      activeState === index
                        ? "text-[#ff5200]"
                        : "text-[#1f2937]"
                    }`}
                    to={item.href}
                    onClick={(e) => {
                      if (item.submenu) {
                        e.preventDefault();
                        toggleDropdown(index);
                      } else {
                        navigate(item.href);
                      }
                    }}
                  >
                    {item.label}
                    {item.submenu && (
                      <i className="fa fa-chevron-down ml-3 text-[10px]"></i>
                    )}
                  </Link>

                  {item.submenu && openSubmenu === index && (
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
          <img
            src={user}
            alt="user"
            className="border"
            style={{
              width: "35px",
              height: "35px",
              objectFit: "contain",
              borderRadius: "50%",
            }}
          />
          <i className="fa fa-chevron-down ml-2 text-[10px]"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import LogoImg from "../../assets/logo-givni.jpg";
import { BsThreeDots } from "react-icons/bs";
import Sidebar from "./Sidebar";
import NavModel from "./NavModel";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";

const Navbar = () => {
  const [openSidebar, SetopenSidebar] = useState(false);
  const [openNavModal, SetopenNavModal] = useState(false);

  const handleSidebar = () => {
    SetopenSidebar(!openSidebar);
    if(openNavModal){
      SetopenNavModal(false)
    }
  }

  const handleCloseNavNodel = () => {
    SetopenSidebar(false);
    SetopenNavModal(false)
  }

  const handleNavModal = () => {
    SetopenNavModal(!openNavModal);
    if(openSidebar){
      SetopenSidebar(false)
    }
  }

  return (
    <div onClick={handleCloseNavNodel}>
    <nav className="fixed top-0 w-full z-20 bg-white border-b-[1px] border-gray-500">
    <ul className="bg-blue-600 flex justify-between px-3 py-1 text-white gap-2 flex-wrap" >
        <li className="flex items-center justify-center gap-2"><span><HiOutlineMail/></span> example@gmail.com</li>
        <li className="hidden md:flex  items-center justify-center gap-2"><span><FaPhoneAlt/></span> +91-98359 42411 , +91-9430 455055 </li>
        <li className="hidden md:flex  items-center justify-center gap-2"><span><FaRegClock/></span> Opening: Mon-Sat: 09-07</li>
      </ul>
      <ul className="flex justify-between items-center px-3 py-1">
        <li>
          <img src={LogoImg} alt="logo givni" width="100%" className="w-14" />
        </li>
        <ul className="flex gap-2">
          <li className="hidden lg:block">
          <Sidebar/>
          </li>
          <li className="hidden lg:block">
          <NavModel/>
          </li>
          
          <li className="lg:hidden" onClick={((e) =>{e.stopPropagation(); handleNavModal();})}>
            <BsThreeDots className="text-3xl text-blue-600" />
          </li>
          <li className="lg:hidden" onClick={((e) =>{e.stopPropagation(); handleSidebar();})}>
            <FaBars className="text-3xl" />
          </li>
        </ul>
      </ul>
    </nav>
      <div className={` fixed top-24 h-full ${openSidebar ? "w-full" : "w-0 -left-72 lg:hidden"} transition-all duration-500`}>
        <Sidebar handleSidebar={handleSidebar} />
      </div>
      <div className={`lg:hidden fixed top-24 h-full ${openNavModal ? "w-full" : "w-0 -top-44 -left-72 lg:hidden"} transition-all duration-500`}>
        <NavModel handleSidebar={handleNavModal} />
      </div>
    </div>
  );
};

export default Navbar;

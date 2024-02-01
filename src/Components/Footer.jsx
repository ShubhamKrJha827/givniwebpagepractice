import React from "react";
import { CiLocationOn} from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { PiCopyrightThin } from "react-icons/pi";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { LiaGooglePlus } from "react-icons/lia";
import { IoLogoInstagram } from "react-icons/io";
import LogoImg from "../assets/logo-givni.jpg";

const Footer = () => {
    




  const DiscoverItems = [
    {
      items: "About Us",
      a: "#",
    },
    {
      items: "Services",
      a: "#",
    },
    {
      items: "Our Projects",
      a: "#",
    },
    {
      items: "Product",
      a: "#",
    },
    {
      items: "Register",
      a: "#",
    },

  ];

  const studyMaterials = [

    {
      items: "Blog",
      a: "#",
    },
    {
      items: "Privacy Policy",
      a: "#",
    },
    {
      items: "FAQ's",
      a: "#",
    },
    {
      items: "Terms & Condition",
      a: "#",
    },
    {
      items: "Contact",
      a: "#",
    },
  ]

  const ContactItems = [
    {
      items: "Office Sector 15 Noida D-35 2nd Floor Noida U.P 201301 India",
      a: "#",
      icon: CiLocationOn,
    },
    {
      items: "+91-9835942411",
      a: "#",
      icon: IoCallOutline,
    },
    {
      items: "+91-9835942411",
      a: "#",
      icon: IoCallOutline,
    },
    {
      items: "Email: givniinfo@gmail.com",
      a: "#",
      icon: AiOutlineMail,
    },
  ];
  return (
    <footer className="flex flex-wrap px-8 gap-6 bg-[#B5E1D4] bg-opacity-50 py-4">
        <div className="">
        <section className="space-y-4 md:space-y-0 md:flex w-full justify-center flex-wrap">
      <aside className="w-full md:w-3/12 ml-auto space-y-3">
        <img src={LogoImg} alt="givni logo" className="rounded-full" />
        <p className="text-blue-950 text-sm font-medium w-full">
        Givni is the best design and development Company in Patna Bihar, Noida, Kolkata. Our Experts always best web,
         App Service in Bangalore , Patna , Noida, Kolkata, Ranchi.
            </p>
      </aside>
      <aside className="w-full md:w-2/12 ml-auto space-y-3">
        <h4 className="text-xl font-semibold text-blue-950">Company</h4>
        <ul className="flex flex-wrap gap-2 justify-center">
          {DiscoverItems.map((item, index) => (
            <li key={index} className="text-blue-950 font-medium w-full">
              <div>{item.items}</div>
            </li>
          ))}
        </ul>
      </aside>
      <aside className="w-full md:w-2/12 ml-auto space-y-3">
        <h4 className="text-xl font-semibold text-blue-950">Support</h4>
        <ul className="flex flex-wrap gap-2">
          {studyMaterials.map((item, index) => (
          <li key={index} className="text-blue-950 font-medium w-full">
          <div>{item.items}</div>
        </li>
          ))}
        </ul>
      </aside>
      <aside className="w-full md:w-3/12 ml-auto space-y-3">
        <h4 className="text-xl font-semibold text-blue-950">Contact Us</h4>
        <ul className="flex flex-wrap gap-2">
          {ContactItems.map((item, index) => (
            <li
              key={index}
              className="text-blue-950 font-medium w-full flex  gap-2"
            >
              <span className="pt-2">
                <item.icon />
              </span>
              <div>{item.items}</div>
            </li>
          ))}
        </ul>
      </aside>
      </section>
      </div>
      <aside className="w-full space-y-3 md:pt-4">
        <div className="flex items-center gap-2 text-sm justify-center">
          <span>
            <PiCopyrightThin className="text-lg" />
          </span>
          <p className="text-sm">Givni - All rights reserved</p>
        </div>
        <div className="flex justify-between text-sm gap-8 w-full max-w-sm mx-auto md:justify-center">
          <p className="">Privacy</p>
          <p className="">Terms and conditions</p>
          <p className="">Contact</p>
        </div>
      </aside>
      <aside className="w-full space-y-2">
        <div className="flex text-sm gap-8 w-full justify-center md:justify-center">
         <div>
            {" "}
            <FiFacebook className="text-xl" />
          </div>
         <div>
            {" "}
            <FiTwitter className="text-xl" />
          </div>
         <div>
            {" "}
            <LiaGooglePlus className="text-xl" />
          </div>
         <div>
            {" "}
            <LiaGooglePlus className="text-xl" />
          </div>
         <div>
            {" "}
            <IoLogoInstagram className="text-xl" />
          </div>
        </div>
      </aside>
    </footer>
  );
};

export default Footer;
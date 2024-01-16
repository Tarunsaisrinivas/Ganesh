import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  let Links = [
    {
      name: "HOME",
      link: "#home",
    },
    {
      name: "ABOUT",
      link: "#about",
    },
    {
      name: "PORTFOLIO",
      link: "#portfolio",
    },
    {
      name: "SERVICES",
      link: "#service",
    },
    {
      name: "EXPERIENCE",
      link: "/",
    },
  ];

  return (
    <div className="shadow-md w-full sticky top-0 left-0 z-10 bg-white">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800">
          <span className="text-3xl text-indigo-600 ">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          <Link to="/"> Ganesh</Link>
        </div>
        <ul className="md:flex md:items-center ">
          {Links.map((link, index) => (
            <li key={index} className="md:ml-8 text-xl">
              <a
                href={link.link}
                className="text-gray-800 font-bold hover:text-blue-700 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <Link to="https://github.com/Ganesh-Alla" target="_blank">
          <button className="p-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-md">
            Github
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

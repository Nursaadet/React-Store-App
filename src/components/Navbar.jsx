import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { FaSignOutAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const navigation = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Products",
    path: "/products",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="h-auto pt-4 bg-slate-400 py-2">
      <div>
        <div className="md:hidden flex justify-between p-5">
          <Link to="https://clarusway.com" target="true">
            <FcHome />
          </Link>
          <button
            onClick={() => setShow(!show)}
            className="menu-btn text-cyan-900 hover:text-gray-100 text-label"
          >
            {" "}
            {show ? <MdClose /> : <GiHamburgerMenu />}
          </button>
        </div>
        <div
          className={` ${
            show ? "flex flex-col items-center justify-center" : "hidden"
          } md:flex md:justify-start md:items-center gap-10 ml-10 text-label font-bold`}
        >
          <div
            className="max-md:text-center md:items-center md:text-end
                 "
          >
            <ul className="md:flex gap-5 justify-start w-[90vw]  m-5 ">
              {navigation.map((item) => (
                <li
                  key={item.title}
                  className="hover:bg-orange-300 hover:inline-block rounded-2xl ps-1 hover:cursor-pointer text-cyan-950 pe-1 "
                >
                  <NavLink to={item.path} element={item.title} />
                  {item.title}
                </li>
              ))}
            </ul>
            <NavLink
              to="/"
              className="bg-cyan-900 text-orange-300 rounded-xl font-montepasifico px-2 py-1"
            >
              LogOut
              <FaSignOutAlt className="inline-block ms-3" />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

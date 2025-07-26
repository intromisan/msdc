"use client";
import { useState } from "react";
import MobileNav from "./MobileNav";
import { navigationLinks } from "../../data";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <button
        type="button"
        className="items-center p-2 w-10 h-10 justify-center text-sm md:hidden"
        onClick={handleClick}
      >
        <span className="sr-only">Open main menu</span>
        <span
          className={"bg-secondary block h-0.5 w-6 rounded-sm my-1 "}
        ></span>
        <span className={"bg-secondary block h-0.5 w-6 rounded-sm my-1"}></span>
        <span
          className={"bg-secondary block  h-0.5 w-6 rounded-sm my-1"}
        ></span>
      </button>
      <MobileNav isOpen={isOpen} onClose={handleClick} />
      <div
        className="hidden w-full md:w-auto md:flex items-center"
        id="navbar-default"
      >
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
          {navigationLinks.map((link) => {
            return (
              <li key={link.path}>
                <a
                  href={link.path}
                  className="block py-2 px-3 text-white hover:text-primary md:bg-transparent md:text-dark md:p-0 md:font-sans border-b-3 border-transparent hover:border-primary transition-all duration-15"
                  aria-current="page"
                >
                  {link.title}
                </a>
              </li>
            );
          })}
        </ul>

        <button className="bg-secondary font-sans text-white rounded-lg py-2.5 px-6 ml-8">
          Оставить заявку
        </button>
      </div>
    </nav>
  );
};

export default Nav;

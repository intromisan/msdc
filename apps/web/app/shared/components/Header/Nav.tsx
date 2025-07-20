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
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          {navigationLinks.map((link) => {
            return (
              <li key={link.path}>
                <a
                  href={link.path}
                  className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  {link.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

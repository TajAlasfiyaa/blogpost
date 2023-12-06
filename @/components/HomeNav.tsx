"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "./logo.png";
import links from "../../config/links.json";
import clsx from "clsx";
import me from "../../public/images/me.svg";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaVoicemail,
  FaYoutube,
} from "react-icons/fa";
import { ButtonGhost } from "./ButtonGhost";
import { ModeToggle } from "./ui/ModeToggle";
import { cn } from "@/lib/utils";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className=" border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-1 rtl:space-x-reverse"
        >
          <Image
            width={80}
            height={80}
            src={me}
            className="h-8 w-8"
            alt="TajAlasfiyaa Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            TajAlasfiyaa
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <ModeToggle />
          <button
            onClick={() => {
              setToggle(!toggle);
            }}
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={cn(
            "items-center justify-between  w-full md:flex md:w-auto md:order-1",
            toggle ? "" : "hidden"
          )}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   dark:border-gray-700">
            {/* <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li> */}
            {[
              ["Home", "/"],
              ["Blog", "/blog"],
            ].map((link) => (
              <li>
                <ButtonGhost key={link[1]}>
                  <Link
                    className={clsx("text-xl font-semibold")}
                    href={link[1]}
                  >
                    {link[0]}
                  </Link>
                </ButtonGhost>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
// const NavBar = () => {
//   return (
//     <div className="border-b-2  sticky backdrop-filter backdrop-blur-lg top-0 w-full z-10 justify-between border-gray-400 h-20 flex  items-center px-10 mb-3  gap-3 ">
//       <div className="flex items-center gap-2 ">
//         <div>
//           <Image height={100} width={100} alt="website logo" src={logo} />
//         </div>
//         {/* Navgaition */}
//         <div className="flex gap-1 text-2xl font-bold ">
//           {[
//             ["Home", "/"],
//             ["Blog", "/blog"],
//           ].map((link) => (
//             <ButtonGhost key={link[1]}>
//               <Link className={clsx("text-xl font-semibold")} href={link[1]}>
//                 {link[0]}
//               </Link>
//             </ButtonGhost>
//           ))}
//         </div>
//       </div>

//       {/* Soical Icons */}
//       <div className="flex gap-1 ">
//         <Icon href={links.github} title="GitHub">
//           <FaGithub />
//         </Icon>
//         <Icon href={links.twitter} title="Twitter">
//           <FaTwitter />
//         </Icon>
//         <Icon href={links.linkedn} title="LinkedIn">
//           <FaLinkedin />
//         </Icon>
//         <Icon href={links.youtube} title="YouTube">
//           <FaYoutube />
//         </Icon>
//         <Icon href={links.email} title="Email">
//           <FaVoicemail />
//         </Icon>
//       </div>
//     </div>
//   );
// };

// const Icon = ({ children, href, title, className = "" }) => {
//   return (
//     <a
//       title={title}
//       target="_blank"
//       href={href}
//       className={clsx(
//         "hover:fill-amber-600 hover:text-blue-700 text-xl ",
//         className
//       )}
//     >
//       {children}
//     </a>
//   );
// };
export default NavBar;

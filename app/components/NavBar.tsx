import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "./logo.png";
import links from "../../config/links.json";
import clsx from "clsx";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaVoicemail,
  FaYoutube,
} from "react-icons/fa";
import { ButtonGhost } from "./ButtonGhost";

const NavBar = () => {
  return (
    <div className="border-b-2  sticky backdrop-filter backdrop-blur-lg top-0 w-full z-10 justify-between border-gray-400 h-20 flex  items-center px-10 mb-3  gap-3 ">
      <div className="flex items-center gap-2 ">
        <div>
          <Image height={100} width={100} alt="website logo" src={logo} />
        </div>
        {/* Navgaition */}
        <div className="flex gap-1 text-2xl font-bold ">
          {[
            ["Home", "/"],
            ["Blog", "/blog"],
          ].map((link) => (
            <ButtonGhost key={link[1]}>
              <Link className={clsx("text-xl font-semibold")} href={link[1]}>
                {link[0]}
              </Link>
            </ButtonGhost>
          ))}
        </div>
      </div>

      {/* Soical Icons */}
      <div className="flex gap-1 ">
        <Icon href={links.github} title="GitHub">
          <FaGithub />
        </Icon>
        <Icon href={links.twitter} title="Twitter">
          <FaTwitter />
        </Icon>
        <Icon href={links.linkedn} title="LinkedIn">
          <FaLinkedin />
        </Icon>
        <Icon href={links.youtube} title="YouTube">
          <FaYoutube />
        </Icon>
        <Icon href={links.email} title="Email">
          <FaVoicemail />
        </Icon>
      </div>
    </div>
  );
};

const Icon = ({ children, href, title, className = "" }) => {
  return (
    <a
      title={title}
      target="_blank"
      href={href}
      className={clsx(
        "hover:fill-amber-600 hover:text-blue-700 text-xl ",
        className
      )}
    >
      {children}
    </a>
  );
};
export default NavBar;

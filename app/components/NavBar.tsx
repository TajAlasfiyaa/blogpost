import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="border-b-2 border-gray-400 h-20 flex  items-center px-10 mb-3  gap-3 ">
      <Button href="/">TAplus</Button>
      <Button href="/blog">Blog</Button>
      <br />
    </div>
  );
};

const Button = ({ children, href }) => {
  return (
    <Link
      className={"text-black-300  text-4xl font-bold hover:text-amber-500"}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavBar;

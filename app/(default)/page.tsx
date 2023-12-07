import clsx from "clsx";
import { ButtonGhost } from "../../@/components/ButtonGhost";
import { reader } from "./reader";
import Link from "next/link";
import { Button } from "../../@/components/ui/button";
import Image from "next/image";
import taj from "../public/assets/me.svg";
import { ModeToggle } from "@/components/ui/ModeToggle";
import Home from "@/components/Home";
export default async function Homepage() {
  const posts = await reader.collections.posts.all();

  return (
    <>
      <Home />
      {/* <div className="w-full flex flex-row-reverse p-3  ">
        {[
          ["Blog", "/blog"],
          ["Home", "/"],
        ].map((link) => (
          <Button asChild variant="link" key={link[1]}>
            <Link className="text-xl font-bold " href={link[1]}>
              {link[0]}
            </Link>
          </Button>
        ))}
        <ModeToggle />
      </div> */}

      {/* Hero
      <div className="m-auto  max-w-5xl  ">
        <div className="flex flex-col md:flex-row items-center">
          <Image
            alt="tajalasfiya victor photo "
            src={taj}
            height={400}
            width={400}
            className="w-60 md:w-[25rem]"
          />
          <div className=" flex flex-col items-center justify-center">
            <p>Hello I'm</p>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              TajAlasfiyaa Ishag ⚡️
            </h1>
            <h2 className="scroll-m-20 text-1xl font-bold my-5 tracking-tight lg:text-5xl">
              Frontend Developer
            </h2>
            <div>
              <Button>Download CV</Button>
              <Button variant="secondary">Contact Info</Button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

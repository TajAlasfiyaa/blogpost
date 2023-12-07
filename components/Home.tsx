import Image from "next/image";
import Link from "next/link";
import me from "@/public/assets/me.svg";
import NavBar from "./NavBar";
import HomeNav from "./HomeNav";

export default function Component() {
  return (
    <div className="    ">
      <HomeNav />
      <main className="">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative dark:left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0178a8] to-[#00b7ff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="max-h-[90vh]">
          <section className="w-full flex flex-col sm:flex-row items-center justify-center pt-12 md:pt-24 lg:pt-32  ">
            <Image src={me} alt="tajalasfiyaa" height={350} width={350} />
            <div className="px-4 md:px-6">
              <h1 className="lg:leading-tighter text-5xl font-bold tracking-tighter sm:text-6xl md:text-8xl xl:text-[6.4rem] 2xl:text-[3.75rem] text-center">
                TajAlasifyaa
              </h1>
              <p className="mx-auto max-w-[700px] text-blue-600 md:text-xl  text-center">
                Front End Developer | Open Source Contributer
              </p>
              <div className="flex justify-center">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </section>
          <svg
            width="300"
            height="300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className=""
          >
            <path d="M12 15a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L12 12.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4A1 1 0 0 1 12 15z" />
          </svg>
        </div>
        {/* <section className="w-full py-12 md:py-24 lg:py-32" id="about">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center">About</h2>
            <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mt-6 text-center">
              A passionate Full Stack Software Developer and Mobile App
              Developer, skilled in Dart, Flutter, Firebase, Node.js, MongoDB,
              and Java. I have a solid understanding of the software development
              life cycle and Agile methodologies.
            </p>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
          id="timeline"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center">Timeline</h2>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Contact Me
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                If you like my work and have some cool project to work on, just
                send me a direct message or contact me through social sites
                listed below.
              </p>
            </div>
          </div>
        </section> */}
      </main>
      {/* <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © John Doe. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer> */}
    </div>
  );
}

function IconUser(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

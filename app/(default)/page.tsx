import Home from "@/components/Home";
import { AdaptiveLink } from "@/components/adaptive-link";
import { ContainerSection } from "@/components/container-section";
import { getBasicRenderers } from "@/components/keystatic/basic-renderers";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { links } from "@/constants/links";
import { getHomeSingleton } from "@/server/keystatic";
import { DocumentRenderer } from "@keystatic/core/renderer";
export default async function Homepage() {
  const query = await getHomeSingleton();
  const content = await query.content();
  const renderer = getBasicRenderers();
  return (
    <ContainerSection className="relative flex flex-col items-start">
      <h1 className="mb-2 text-4xl font-bold">TajAlasfiyaa Ishag</h1>
      <p className="mb-8 text-2xl">
        Software engineer specialized in frontend development
      </p>
      <DocumentRenderer document={content} renderers={renderer} />
      <ul className="[&_a:hover]:text-primary-600 dark:[&_a:hover]:text-primary-500 flex items-center gap-x-4">
        {links.map(({ href, Icon, label }) => (
          <li key={label}>
            <Tooltip disableHoverableContent>
              <TooltipTrigger asChild>
                <AdaptiveLink href={href} rel="me">
                  <Icon
                    aria-label={label}
                    aria-hidden="true"
                    className="h-5 w-5"
                  />
                </AdaptiveLink>
              </TooltipTrigger>
              <TooltipContent sideOffset={8}>{label}</TooltipContent>
            </Tooltip>
          </li>
        ))}
      </ul>
    </ContainerSection>
  );
}
// <>
//   <Home />
//   {/* <divd className="w-full flex flex-row-reverse p-3  ">
//     {[
//       ["Blog", "/blog"],
//       ["Home", "/"],
//     ].map((link) => (
//       <Button asChild variant="link" key={link[1]}>
//         <Link className="text-xl font-bold " href={link[1]}>
//           {link[0]}
//         </Link>
//       </Button>
//     ))}
//     <ModeToggle />
//   </div> */}

//   {/* Hero
//   <div className="m-auto  max-w-5xl  ">
//     <div className="flex flex-col md:flex-row items-center">
//       <Image
//         alt="tajalasfiya victor photo "
//         src={taj}
//         height={400}
//         width={400}
//         className="w-60 md:w-[25rem]"
//       />
//       <div className=" flex flex-col items-center justify-center">
//         <p>Hello I'm</p>
//         <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
//           TajAlasfiyaa Ishag ⚡️
//         </h1>
//         <h2 className="scroll-m-20 text-1xl font-bold my-5 tracking-tight lg:text-5xl">
//           Frontend Developer
//         </h2>
//         <div>
//           <Button>Download CV</Button>
//           <Button variant="secondary">Contact Info</Button>
//         </div>
//       </div>
//     </div>
//   </div> */}
// </>

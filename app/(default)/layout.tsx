import { TooltipProvider } from "@/components/ui/tooltip";
import "../styles.css";

import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/utils/ui";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        <main
          className={cn(
            "relative flex-grow overflow-x-hidden",
            "before:fixed before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full",

            "before:bg-[url(/beams.png)] before:bg-[-839px_-520px] before:bg-no-repeat",
            "before:transition-[background-position] before:duration-1000 before:ease-out",

            "motion-safe:before:[background-position:_var(--beams-x,-839px)_var(--beams-y,-520px)]",
            "motion-safe:before:animate-beams"
          )}
        >
          {children}
        </main>
        <Navbar className="sticky bottom-0 left-0 z-50" />
      </TooltipProvider>
    </ThemeProvider>
  );
}

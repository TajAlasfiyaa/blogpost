import NavBar from "../@/components/NavBar";
import "./styles.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "../@/lib/utils";
import { ThemeProvider } from "../@/components/theme-provider";
import Head from "next/head";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={cn(fontSans.variable, "dark:bg-[#0f172a]")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

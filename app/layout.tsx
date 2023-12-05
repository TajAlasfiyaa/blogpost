import NavBar from "./components/NavBar";
import "./styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#ebebeb]">
        <div>{children}</div>
      </body>
    </html>
  );
}

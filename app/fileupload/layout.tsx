import "../globals.css";
import Header from "../component/header/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div className="relative w-full h-screen">
          {/* Header on top */}
          <div  className="absolute top-0 left-0 w-full z-10">
          <Header />
          </div>

          {/* Children in the background */}
          <div className="absolute inset-0 z-0">{children}</div>
        </div>
  );
}

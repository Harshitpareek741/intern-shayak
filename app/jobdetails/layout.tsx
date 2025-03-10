
import Header from "../component/header/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div className="relative w-full h-screen overflow-x-hidden overflow-y-hidden">
          {/* Header on top */}
          <div  className="absolute top-0 left-0 w-full z-10">
          <Header />
          </div>

          {/* Children in the background */}
          <div className="">{children}</div>
        </div>

  );
}

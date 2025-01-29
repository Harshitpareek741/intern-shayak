

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
        <div className="relative w-full h-screen overflow-x-hidden overflow-y-hidden">
          {/* Header on top */}

          {/* Children in the background */}
          <div className="">{children}</div>
        </div>
 
  );
}

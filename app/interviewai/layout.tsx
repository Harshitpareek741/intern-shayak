

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div className="relative w-full h-screen overflow-x-hidden overflow-y-hidden">
          <div className="">{children}</div>
        </div>
  );
}

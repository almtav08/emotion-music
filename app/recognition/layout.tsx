export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main
        className={`w-full h-full main flex justify-center items-center`}>
        {children}
      </main>
  );
}

import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <main>
        SIDEBAR
        {children}
      </main>
    </html>
  );
}

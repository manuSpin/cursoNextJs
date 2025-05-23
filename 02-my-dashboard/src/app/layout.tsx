import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Dashboard",
  description: "Home application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}

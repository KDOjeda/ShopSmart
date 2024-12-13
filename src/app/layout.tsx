"use client";

import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import "./globals.css";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import CartProvider from "../../providers/CartProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "ShopSmart",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const excludeNavBarRoutes = ["/sign-in", "/sign-up"];
  const shouldShowNavBar = !excludeNavBarRoutes.includes(pathname);

  return (
    <html lang="en">
      <body
      
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <head>
        <title>ShopSmart</title>
        <meta name="description" content="Generated by create next app" />
      </head>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            {shouldShowNavBar && <NavBar />}
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}

// Every page gets put into this file: loads the font, sets browser tab title, 
// puts the nav on top and socials icons on the bottom, sets the page width

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Nav from "@/components/Nav";
import Socials from "@/components/Socials";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "amanpreet saggi",
  description: "portfolio : amanpreet saggi",
};

// applies the saved theme before first paint so there is no flash
const themeScript = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":true;document.documentElement.classList.toggle("dark",d);}catch(e){document.documentElement.classList.add("dark");}})();`;

// sets nav bar on top and socials on bottom of the page (centered column)
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} dark h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full">
        <div className="flex flex-col max-w-2xl mx-auto font-extralight px-6 py-14 sm:py-20">
          <Nav />
          <main>{children}</main>
          <Socials />
        </div>
      </body>
    </html>
  );
}

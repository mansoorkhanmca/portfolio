'use client'
import { useEffect, useLayoutEffect, useState } from "react";
//import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Portfolio",
//   description: "My Porfolio App",
//  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  function useWindowSize() {
    const [size, setSize] = useState([993, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }
  const [deviceWidth, deviceHeight] = useWindowSize();
  useEffect(() => {
    document.title = "Portfolio";
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full flex">
          {
            deviceWidth > 992 && <>
              <div className="inline-block w-1/6 fixed side-nav">
                <Header />
              </div>
              <div className="inline-block w-1/6 side-nav" >
              </div>
            </>
          }
          <div className=" w-1/6 fixed side-nav overlay">
            <Header />
          </div>
          <div className={`inline-block ml-1 ${deviceWidth > 992 ? 'w-10/12' : 'w-full'}`}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

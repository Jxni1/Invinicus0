"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/general/Header";
import Footer from "../components/general/Footer";
import SplashScreenProvider from "../components/general/SplashScreenProvider";
import Snowfall from "react-snowfall";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = { title: "Invinicus GmbH", description: "" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SplashScreenProvider>
          <div className="absolute inset-0 pointer-events-none z-0">
            <Snowfall
              color="#0069D1"
              snowflakeCount={100}
              radius={[0.5, 3.0]} // size of flakes
              speed={[0.5, 3.0]} // speed of flakes
              wind={[-0.5, 2.0]} // wind direction
            />
          </div>
          <Header />
          {children}
          <Footer />
        </SplashScreenProvider>
      </body>
    </html>
  );
}

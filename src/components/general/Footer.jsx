"use client";

import Image from "next/image";
// import logo from "../../../public/images/logo.svg";
// import logo1 from "../../../public/images/logo10.svg";
import ig from "../../../public/images/ig.svg";
import tiktok from "../../../public/images/tiktok.svg";
import linkedin from "../../../public/images/linkedin.svg";
// import footerBg from "../../../public/images/footerBg.png";
import tel from "../../../public/images/tel.svg";
import mail from "../../../public/images/mail.svg";
import home from "../../../public/images/home.svg";
import Link from "next/link";
import flower1 from "../../../public/images/flower1.svg";
import group1 from "../../../public/images/group1.svg";
import { useState, useRef } from "react";

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const svgRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="bg-[#F8FDFF] w-full px-4 lg:px-0 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background SVG with mouse highlight effect */}
      <div className="absolute inset-0 w-full h-full z-0">
        <svg
          ref={svgRef}
          className="w-full h-full"
          viewBox="0 0 1919 734"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Radial gradient that follows mouse */}
            <radialGradient
              id="mouseGradient"
              cx={mousePosition.x}
              cy={mousePosition.y}
              r="150"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0%"
                stopColor="#03A8E2"
                stopOpacity={isHovering ? "0.8" : "0"}
              />
              <stop
                offset="50%"
                stopColor="#0069D1"
                stopOpacity={isHovering ? "0.4" : "0"}
              />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>

          <mask
            id="mask0_229_4348"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="-1"
            y="0"
            width="1920"
            height="734"
          >
            <rect x="-1" width="1920" height="734" fill="#F8FDFF" />
          </mask>
          <g mask="url(#mask0_229_4348)">
            {/* Base shapes with normal fill */}
            <path
              d="M938.677 1212.9L721.987 1174.83L505.297 1212.9L641.46 501.33L667.814 479.368H774.695L801.05 501.33L937.213 1212.9H938.677Z"
              fill="#03A8E2"
              fillOpacity="0.05"
              stroke="url(#mouseGradient)"
              strokeWidth={isHovering ? "3" : "0"}
              className="transition-all duration-200"
            />
            <path
              d="M568.255 420.803L562.398 454.478L13.3512 927.391L-61.3188 720.948L-201.875 552.574L481.871 313.922L514.082 325.635L566.791 417.874L568.255 420.803Z"
              fill="#0069D1"
              fillOpacity="0.05"
              stroke="url(#mouseGradient)"
              strokeWidth={isHovering ? "3" : "0"}
              className="transition-all duration-200"
            />
            <path
              d="M568.261 119.194L515.553 211.434L483.342 223.147L-200.405 -15.5052L-59.8492 -183.88L14.8217 -390.321L563.869 82.5913L569.725 116.266L568.261 119.194Z"
              fill="#0069D1"
              fillOpacity="0.05"
              stroke="url(#mouseGradient)"
              strokeWidth={isHovering ? "3" : "0"}
              className="transition-all duration-200"
            />
            <path
              d="M938.683 -672.896L802.52 38.6683L776.165 60.6302H669.285L642.93 38.6683L506.766 -672.896L723.456 -634.829L940.148 -672.896H938.683Z"
              fill="#0069D1"
              fillOpacity="0.05"
              stroke="url(#mouseGradient)"
              strokeWidth={isHovering ? "3" : "0"}
              className="transition-all duration-200"
            />
            <path
              d="M1647.32 -14.0464L963.574 224.607L931.363 212.893L878.655 120.653L884.511 86.9786L1433.56 -385.934L1508.23 -179.492L1648.78 -11.118L1647.32 -14.0464Z"
              fill="#0069D1"
              fillOpacity="0.05"
              stroke="url(#mouseGradient)"
              strokeWidth={isHovering ? "3" : "0"}
              className="transition-all duration-200"
            />
            <path
              d="M1647.32 554.035L1506.76 722.41L1432.09 928.851L883.042 455.939L877.186 422.264L929.895 330.023L962.106 318.311L1645.85 556.963L1647.32 554.035Z"
              fill="#0069D1"
              fillOpacity="0.05"
              stroke="url(#mouseGradient)"
              strokeWidth={isHovering ? "3" : "0"}
              className="transition-all duration-200"
            />
            <path
              d="M782.019 166.053H661.961L601.932 270.005L661.961 373.958H782.019L842.048 270.005L782.019 166.053Z"
              fill="#03A8E2"
              fillOpacity="0.05"
              stroke="url(#mouseGradient)"
              strokeWidth={isHovering ? "3" : "0"}
              className="transition-all duration-200"
            />
          </g>
        </svg>
      </div>

      {/* Mouse spotlight effect overlay */}
      {/* <div
        className="pointer-events-none absolute z-[5] rounded-full transition-opacity duration-300"
        style={{
          width: "600px",
          height: "600px",
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(3, 168, 226, 0.15) 0%, rgba(3, 168, 226, 0.05) 40%, transparent 70%)",
          opacity: isHovering ? 1 : 0,
          transition: "left 0.15s ease-out, top 0.15s ease-out, opacity 0.3s",
        }}
      /> */}

      {/* Content wrapper with relative positioning and z-index */}
      <div className="relative z-10">
        <div className="container mx-auto flex items-center justify-start pt-10 lg:pt-16">
          <Link href="/">
            <div className="group flex flex-row items-center justify-start gap-6">
              <Image
                src={flower1}
                alt="flower"
                className="w-12 h-16 lg:w-14 lg:h-18 transition-transform duration-900 group-hover:rotate-[360deg]"
              />
              <Image src={group1} alt="group" className="w-40 lg:w-56" />
            </div>
          </Link>
        </div>

        <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between w-full py-16 lg:py-24 gap-12 lg:gap-0">
          {/* Left Column: Logo & Description */}
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-between gap-5 pr-0 lg:pr-20">
            <h1 className="text-[#121921] font-bold text-[20px]">
              Für Sie erreichbar
            </h1>
            <p className="text-[#121921] text-[18px]">
              Montag bis Freitag: 08:00 Uhr is 12:00 Uhr und 13:00 Uhr bis 17:00
              Uhr. Für alle anderen Uhrzeiten und Wochentage kontaktieren Sie
              uns bitte per E-Mail oder über das Kontaktformular. Ziele, Wünsche
              und Lebensphasen anpassen. Persönlich. Transparent.
              Zukunftssicher.
            </p>
            <div>
              <Link href="/kontakt">
                <button className="bg-[#294062] hover:bg-[#1a2a40] px-5 py-3 mt-5 text-white rounded-full">
                  Kontakt aufnehmen
                </button>
              </Link>
            </div>
          </div>

          {/* Right Section: Contact & Pages */}
          <div className="w-full lg:w-1/2 flex flex-col md:flex-row items-start justify-between gap-12 md:gap-0">
            {/* Contact Info */}
            <div className="flex flex-col items-start justify-between gap-5 w-full md:w-2/3">
              <h1 className="text-[#121921] font-semibold text-[24px]">
                So erreichen Sie uns
              </h1>
              <div className="flex flex-col items-start gap-8 justify-between">
                {/* Phone */}
                <div className="flex flex-row items-center justify-between gap-5">
                  <Image src={tel} alt="telephone" className="w-8 h-8" />
                  <div className="flex flex-col items-start justify-between gap-1 px-5 border-l border-l-[#121921]">
                    <h1 className="text-[20px] font-medium text-[#121921]">
                      Kontaktnummer
                    </h1>
                    <a
                      href="tel:+411234567"
                      className="text-[#595E64] hover:underline"
                    >
                      +41 12 345 67
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-row items-center justify-between gap-5">
                  <Image src={mail} alt="email" className="w-8 h-8" />
                  <div className="flex flex-col items-start justify-between gap-1 px-5 border-l border-l-[#121921]">
                    <h1 className="text-[20px] font-medium text-[#121921]">
                      Support kontaktieren
                    </h1>
                    <a
                      href="mailto:invinicus@gmail.com"
                      className="text-[#595E64] hover:underline"
                    >
                      invinicus@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex flex-row items-center justify-between gap-5">
                  <Image src={home} alt="Home" className="w-8 h-8" />
                  <div className="flex flex-col items-start justify-between gap-1 px-5 border-l border-l-[#121921]">
                    <a href="https://www.google.com/maps/place/Schachenfeldstrasse+19,+8967+Widen,+Switzerland/@47.366008,8.364311,347m/data=!3m1!1e3!4m6!3m5!1s0x47900e115fdff74d:0x9ff0a67bfac2eefa!8m2!3d47.3661988!4d8.3640914!16s%2Fg%2F11m_gkj9vs?hl=en-US&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D">
                      {" "}
                      <h1 className="font-medium text-[#595E64] hover:underline">
                        Schachenfeldstrasse 19 <br /> 8967 Widen
                      </h1>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Pages Links */}
            <div className="flex flex-col items-start justify-between gap-5 w-full md:w-1/3">
              <h1 className="text-[#121921] text-[24px] font-semibold">
                Überblick
              </h1>
              <div className="flex flex-col items-start justify-between gap-5">
                <Link
                  href="/unsereGeschichte"
                  className="text-[#121921] font-medium hover:underline"
                >
                  Unsere Geschichte
                </Link>
                <Link
                  href="/dienstleistungen"
                  className="text-[#121921] font-medium hover:underline"
                >
                  Dienstleistungen
                </Link>
                <Link
                  href="/impressum"
                  className="text-[#121921] font-medium hover:underline"
                >
                  Impressum
                </Link>
                <Link
                  href="/karriere"
                  className="text-[#121921] font-medium hover:underline"
                >
                  Karriere
                </Link>
                <Link
                  href="/kontakt"
                  className="text-[#121921] font-medium hover:underline"
                >
                  Beratung vereinbaren
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto flex flex-col items-start w-full justify-between gap-16 lg:gap-30 pb-10">
          <div className="flex flex-col items-start">
            <h1 className="text-[#121921] font-bold text-[20px]">
              Folge uns auf unseren Sozialen Medien
            </h1>
            <div className="flex flex-row items-center justify-start gap-5 mt-5">
              <Image src={ig} alt="instagramLogo" />
              <Image src={tiktok} alt="tiktokLogo" />
              <Image src={linkedin} alt="linkedinLogo" />
            </div>
          </div>
          <div className="flex flex-row items-center justify-center w-full">
            <p className="text-[#121921] text-center text-sm md:text-base">
              Urheberrecht © {new Date().getFullYear()} Invinicus | Gestaltet
              von Syntech Solutions AG
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

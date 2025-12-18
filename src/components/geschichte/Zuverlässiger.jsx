import React from "react";
import Image from "next/image";
import tag1 from "../../../public/images/tag1.svg";
import tag2 from "../../../public/images/tag2.svg";
import section1 from "../../../public/images/section1.png";
// import frame13 from "../../../public/images/frame2.svg";
// import tik from "../../../public/images/tik.svg";
import incon from "../../../public/images/incon.svg";
import Link from "next/link";
import flower2 from "../../../public/images/flower2.svg";

const Zuverlässiger = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-20 lg:py-40 px-4 lg:px-0 gap-10 lg:gap-0">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start">
        <div className="relative w-full max-w-md lg:max-w-none lg:w-[80%]">
          <Image
            src={section1}
            alt="section1"
            className="rounded-tr-[40px] lg:rounded-tr-[80px] rounded-bl-[40px] lg:rounded-bl-[80px] w-full"
          />
          <Image
            src={tag1}
            alt="tag1"
            className="absolute -left-5 lg:-left-10 top-1/4 lg:top-50w-auto"
          />
          <Image
            src={tag2}
            alt="tag2"
            className="absolute -right-5 bottom-1/4 lg:bottom-50 w-auto"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-start gap-6 lg:gap-10 justify-between">
        {/* Badge */}
        <div className="flex flex-row items-center justify-start gap-3 bg-[#03A8E233] rounded-full px-3 py-2 group hover:shadow-md transition-shadow">
          <Image
            src={flower2}
            alt="flower2"
            className="transition-transform duration-900 group-hover:rotate-360 w-5 lg:w-auto"
          />
          <h1 className="text-[#0069D1] text-[14px] lg:text-[16px]">
            Geschichte
          </h1>
        </div>

        {/* Heading */}
        <h2 className="text-[#011222] text-[32px] md:text-[48px] lg:text-[58px] leading-tight lg:leading-16">
          08/15? Nicht mit uns!
        </h2>

        {/* Paragraphs */}
        <p className="text-[#5B6B7A] text-[16px] lg:text-[18px] leading-relaxed">
          Die Idee zu Invinicus entstand aus einer einfachen, aber
          tiefgreifenden Beobachtung: Jede Lebensgeschichte ist anders – warum
          sollten dann Versicherungen von der Stange für uns passen? Klassische
          Versicherungsmodelle ignorieren oft die spezifischen Wünsche,
          Bedürfnisse und Ziele der Menschen. Das wollten wir ändern.
        </p>
        <p className="text-[#5B6B7A] text-[16px] lg:text-[18px] leading-relaxed">
          Mit Invinicus haben wir eine Plattform geschaffen, auf der der Mensch
          im Mittelpunkt steht. Im persönlichen Gespräch nehmen wir uns Zeit,
          die individuelle Lebenssituation, Wünsche und Pläne jedes Kunden
          kennenzulernen. Auf dieser Basis entwickeln wir maßgeschneiderte
          Versicherungskonzepte, die sich flexibel an Veränderungen im Leben
          anpassen lassen.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col items-start justify-between gap-4 w-full lg:w-auto">
          <Link href="/dienstleistungen" className="w-full lg:w-auto">
            <div className="flex flex-row items-center justify-center lg:justify-start gap-3 bg-[#0069D1] px-5 py-3 rounded-full mt-6 lg:mt-10 cursor-pointer group hover:bg-[#03A8E2] transition-all duration-300 hover:shadow-lg hover:shadow-[#0069D1]/30 hover:-translate-y-0.5 w-full lg:w-auto">
              <h1 className="text-white uppercase group-hover:tracking-wider transition-all duration-300 text-[14px] lg:text-[16px]">
                JETZT PLANEN
              </h1>
              <Image
                src={incon}
                alt="arrow1"
                className="group-hover:translate-x-1 transition-transform duration-300 w-4 lg:w-auto"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Zuverlässiger;

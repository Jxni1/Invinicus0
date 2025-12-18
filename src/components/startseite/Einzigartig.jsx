import React from "react";
import Image from "next/image";
import flower2 from "../../../public/images/flower2.svg";
import man from "../../../public/images/man.png";
import groupp from "../../../public/images/group.svg";
import group2 from "../../../public/images/group2.png";
import star from "../../../public/images/star.svg";
import incon from "../../../public/images/incon.svg";
import Link from "next/link";

const Einzigartig = () => {
  return (
    <div className="bg-[#B8E4FF1A] w-full h-full">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between w-full pt-35 lg:pt-70 pb-10 lg:pb-30 px-4 lg:px-0 gap-8 lg:gap-0">
        <div className="w-full lg:w-[50%] flex flex-col items-start justify-between gap-6 lg:gap-10">
          <div className="flex flex-row items-center justify-start gap-3 bg-[#03A8E233] rounded-full px-3 py-2 group hover:shadow-md transition-shadow ">
            <Image
              src={flower2}
              alt="flower2"
              className="transition-transform duration-900 group-hover:rotate-360"
            />
            <h1 className="text-[#0069D1] text-[12px] md:text-[16px]">
              Willkommen bei Invinicus
            </h1>
          </div>

          <h1 className="text-[#121921] text-[24px] md:text-[28px] xl:text-[45px] font-semibold leading-tight">
            So einzigartig wie du: Dein
            <br className="hidden md:block" /> Plan. Dein Schutz. Dein Ziel.
          </h1>

          <p className="text-[#5C7A84] text-[16px] lg:text-[20px] text-start">
            Ob Berufsstart, Familiengründung, Selbstständigkeit, Vermögensaufbau
            oder Ruhestand – Invinicus begleitet dich auf jedem Abschnitt in
            deinem Leben. Wir glauben: Nur wer wirklich versteht, kann wirklich
            schützen.
          </p>

          <div className="w-full bg-[#EDF5FA] relative p-3 rounded-lg flex flex-row items-center justify-between gap-4 sm:gap-8 overflow-hidden">
            <div className="shrink-0">
              <Image src={man} alt="man" className="w-auto" />
            </div>

            <div className="flex flex-col items-start justify-center gap-2 sm:gap-4">
              <h1 className="text-[#2B363A] text-[16px] sm:text-[18px] font-semibold">
                John Davison Rockefeller
              </h1>
              <p className="text-[#5C7A84] text-[14px] sm:text-[16px]">
                &ldquo;Es ist besser, einen Tag im Monat über sein Geld
                nachzudenken, als einen ganzen Monat dafür zu arbeiten.&rdquo;
              </p>
            </div>
            <div className="absolute bottom-0 right-0 opacity-50 sm:opacity-100">
              <Image src={groupp} alt="group" />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[50%] flex flex-col relative items-center justify-center mt-8 lg:mt-0">
          <Image src={group2} alt="group" className="w-[90%]" />
          <Link href="/dienstleistungen">
            <div className="flex flex-row items-center justify-start gap-3 bg-[#0069D1] px-5 py-3 rounded-full mt-10 cursor-pointer group hover:bg-[#03A8E2] transition-all duration-300 hover:shadow-lg hover:shadow-[#0069D1]/30 hover:-translate-y-0.5">
              <h1 className="text-white uppercase group-hover:tracking-wider transition-all duration-300">
                JETZ PLANEN
              </h1>
              <Image
                src={incon}
                alt="arrow1"
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </div>
          </Link>

          <Image
            src={star}
            alt="star"
            className="w-8 lg:w-10 absolute top-0 left-5 lg:left-10 animate-spin-slow"
          />
          <Image
            src={star}
            alt="star"
            className="w-8 lg:w-10 absolute bottom-10 right-5 lg:right-10 animate-spin-slow-reverse"
          />
        </div>
      </div>
    </div>
  );
};

export default Einzigartig;

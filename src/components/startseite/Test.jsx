import React from "react";
import Image from "next/image";
import photo1 from "../../../public/images/photo1.png";
const Test = () => {
  return (
    <div className="relative bg-blue-200  md:my-[80px] my-[40px]">
      <div className="container mx-auto flex lg:flex-row flex-col gap-8 lg:gap-0">
        <div className="lg:w-[45%] w-full flex flex-col itmes-center  px-4 lg:px-0">
          <h1 className="text-[#121921] 2xl:text-[52px] xl:text-[42px] lg:text-[36px] md:text-[32px] text-[28px] leading-tight">
            Vorsorge & Zukunft
          </h1>
          <p>
            Heute planen, morgen profitieren: Wir beraten Sie zu individueller
            Altersvorsorge und unterstützen Sie beim Vermögensaufbau. Mit einem
            massgeschneiderten Plan schaffen wir finanzielle Sicherheit für
            Ihren Ruhestand – transparent, flexibel und nachhaltig.
          </p>
          <button>more</button>
        </div>
        <div className="lg:absolute lg:w-1/2 w-full lg:right-0 lg:h-full px-4 lg:px-0">
          <div className="relative h-full">
            <Image src={photo1}></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;

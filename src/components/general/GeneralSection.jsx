"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const GeneralSection = ({ content }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const {
    heroSection,
    featureSection1,
    featureSection2,
    imageComposition,
    ctaSection,
  } = content;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSection.cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroSection.cards.length]);

  const getCardStyles = (index) => {
    const totalCards = heroSection.cards.length;
    const position = (index - activeIndex + totalCards) % totalCards;

    if (position === 0) {
      return "top-0 scale-100 z-30 opacity-100 translate-y-0";
    } else if (position === 1) {
      return "top-[25px] scale-95 z-20 opacity-90 translate-y-0";
    } else {
      return "top-[50px] scale-90 z-10 opacity-80 translate-y-0";
    }
  };

  const getBgColor = (index) => {
    const totalCards = heroSection.cards.length;
    const position = (index - activeIndex + totalCards) % totalCards;

    if (position === 0) return "bg-white shadow-xl";
    if (position === 1) return "bg-gray-50 shadow-md border border-gray-100";
    return "bg-gray-100 shadow-sm border border-gray-100";
  };

  return (
    <div className="container mx-auto py-50">
      <div className="flex flex-col items-center justify-between gap-20">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
          <div className="w-full lg:w-1/2 h-[600px] relative rounded-tr-[30px] rounded-bl-[30px] overflow-hidden group">
            <Image
              src={heroSection.mainImage}
              alt="hero-main"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            <div className="absolute bottom-18 right-8 pointer-events-none">
              <div className="relative w-[340px] h-[120px]">
                {heroSection.cards.map((card, index) => (
                  <div
                    key={card.id}
                    className={`absolute left-0 right-0 transition-all duration-700 ease-in-out ${getCardStyles(
                      index
                    )}`}
                  >
                    <div
                      className={`${getBgColor(
                        index
                      )} rounded-3xl px-8 py-6 transition-colors duration-700`}
                    >
                      <div className="flex flex-row items-center justify-start gap-4">
                        <Image
                          src={card.icon}
                          alt={card.title}
                          className="w-12 h-12 object-contain"
                        />
                        <div
                          className={`flex flex-col items-start justify-between gap-1 transition-opacity duration-500 ${
                            (index - activeIndex + heroSection.cards.length) %
                              heroSection.cards.length ===
                            0
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        >
                          <h1 className="text-[#181818] font-bold text-xl">
                            {card.title}
                          </h1>
                          <p className="text-[#646464] text-[14px]">
                            {card.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-between gap-10">
            <Image src={featureSection1.icon} alt="section-icon-1" />
            <h2 className="text-[#181818] text-[48px] font-bold leading-tight">
              {featureSection1.title}
            </h2>
            <p className="text-[#646464] text-[18px] leading-relaxed">
              {featureSection1.description}
            </p>
            <div className="flex flex-col items-start justify-between gap-6">
              {featureSection1.listItems.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-row items-start justify-start gap-4"
                >
                  <Image src={item.icon} alt="check" className="mt-1" />
                  <div>
                    <h1 className="text-[#5C7A84] text-[16px] font-bold mb-1">
                      {item.title}
                    </h1>
                    <p className="text-[#5C7A84] text-[15px] leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-10 mt-10 lg:mt-20">
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-between gap-10">
            <Image src={featureSection2.icon} alt="section-icon-2" />
            <h2 className="text-[#181818] text-[48px] leading-tight">
              {featureSection2.title}
            </h2>
            <p className="text-[#646464] text-[18px] leading-relaxed">
              {featureSection2.description}
            </p>
            <div className="flex flex-col items-start justify-between gap-6">
              {featureSection2.listItems.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-row items-start justify-start gap-4"
                >
                  <Image src={item.icon} alt="check" className="mt-1" />
                  <div>
                    <h1 className="text-[#5C7A84] text-[16px] font-bold mb-1">
                      {item.title}
                    </h1>
                    <p className="text-[#5C7A84] text-[15px] leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative h-[600px]">
            <Image
              src={imageComposition.mainImage}
              alt="composition-main"
              fill
              className="object-cover rounded-tr-[30px] w-[50%] relative rounded-bl-[30px]"
            />
            <Image
              src={imageComposition.floatingIcon1}
              alt="icon-float-1"
              className="absolute -bottom-5 -right-5"
            />
            <Image
              src={imageComposition.floatingIcon2}
              alt="icon-float-2"
              className="absolute top-50 -right-20"
            />
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-[48px] md:text-[69px] text-black text-center w-full mx-auto mb-10">
          {ctaSection.title}
        </h2>
        <div className="bg-[#F2F7FD] flex flex-col lg:flex-row items-stretch justify-between w-full p-8 lg:p-10 rounded-[30px] gap-10">
          <div className="w-full lg:w-[30%] flex flex-col items-start justify-between gap-10 lg:gap-0 py-5">
            <h2 className="text-[#07133B] text-[32px] uppercase  leading-tight">
              {ctaSection.boxTitle}
            </h2>
            <button className="text-[18px] w-full bg-[#07133B] hover:bg-[#0a1b52] transition-colors py-4 rounded-xl text-white font-medium">
              {ctaSection.buttonText}
            </button>
          </div>

          <div className="w-full lg:w-[65%] bg-[#07133B] flex flex-col md:flex-row items-start justify-between gap-10 p-8 lg:p-12 rounded-[30px] relative overflow-hidden">
            <div className="absolute h-full w-[1px] left-1/2 -translate-x-1/2 bg-white/20 top-0 bottom-0 hidden md:block"></div>

            <div className="flex flex-col items-start gap-4 w-full md:w-1/2 md:pr-8">
              {ctaSection.leftList.map((text, i) => (
                <div
                  key={`l-${i}`}
                  className="flex flex-row items-center justify-start gap-3"
                >
                  <Image
                    src={ctaSection.listIcon}
                    alt="check"
                    className="w-5 h-5 shrink-0"
                  />
                  <h1 className="text-white text-[16px] font-medium text-left">
                    {text}
                  </h1>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-start gap-4 w-full md:w-1/2 md:pl-12">
              {ctaSection.rightList.map((text, i) => (
                <div
                  key={`r-${i}`}
                  className="flex flex-row items-center justify-start gap-3"
                >
                  <Image
                    src={ctaSection.listIcon}
                    alt="check"
                    className="w-5 h-5 shrink-0"
                  />
                  <h1 className="text-white text-[16px] font-medium text-left">
                    {text}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralSection;

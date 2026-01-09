import React from "react";
import Image from "next/image";
// import partner from "../../../public/images/partner.svg";
import icon1 from "../../../public/images/icon1.png";
import icon2 from "../../../public/images/icon2.png";
import icon3 from "../../../public/images/icon3.png";
import icon4 from "../../../public/images/icon4.png";
import icon5 from "../../../public/images/icon5.png";
import icon6 from "../../../public/images/icon6.png";
import icon7 from "../../../public/images/icon7.png";
import icon8 from "../../../public/images/icon8.png";
import icon9 from "../../../public/images/icon9.png";
import icon10 from "../../../public/images/icon10.png";
import icon11 from "../../../public/images/icon11.png";
import icon12 from "../../../public/images/icon12.png";
import flower2 from "../../../public/images/flower2.svg";

const partners = [
  {
    id: 1,
    src: icon1,
    padding: "p-0",
    name: "Partner 1",
    description: "Zuverlässiger Partner für Versicherungslösungen",
  },
  {
    id: 2,
    src: icon2,
    padding: "p-1",
    name: "Partner 2",
    description: "Innovative Lösungen für Ihre Zukunft",
  },
  {
    id: 3,
    src: icon3,
    padding: "p-5",
    name: "Partner 3",
    description: "Experten im Versicherungsbereich",
  },
  {
    id: 4,
    src: icon4,
    padding: "p-5",
    name: "Partner 4",
    description: "Vertrauen und Qualität seit Jahren",
  },
  {
    id: 5,
    src: icon5,
    padding: "p-[70px]",
    name: "Partner 5",
    description: "Ihr Partner für maßgeschneiderte Konzepte",
  },
  {
    id: 6,
    src: icon6,
    padding: "p-[65px]",
    name: "Partner 6",
    description: "Professionelle Beratung auf höchstem Niveau",
  },
  {
    id: 7,
    src: icon7,
    padding: "p-5",
    name: "Partner 7",
    description: "Gemeinsam für Ihre Sicherheit",
  },
  {
    id: 8,
    src: icon8,
    padding: "p-[70px]",
    name: "Partner 8",
    description: "Innovative Versicherungsprodukte",
  },
  {
    id: 9,
    src: icon9,
    padding: "p-5",
    name: "Partner 9",
    description: "Kompetenz und Erfahrung vereint",
  },
  {
    id: 10,
    src: icon10,
    padding: "p-5",
    name: "Partner 10",
    description: "Transparente Lösungen für jeden",
  },
  {
    id: 11,
    src: icon11,
    padding: "p-[15px]",
    name: "Partner 11",
    description: "Verlässlicher Service rund um die Uhr",
  },
  {
    id: 12,
    src: icon12,
    padding: "p-[25px]",
    name: "Partner 12",
    description: "Partnerschaft auf Augenhöhe",
  },
];

const Geschäftspartner = () => {
  return (
    <div className="w-full bg-[#F8FCFF]">
      <div className="container mx-auto py-[120px] px-4">
        {/* Section Label */}
        <button className="flex flex-row items-center justify-start gap-3 bg-[#03A8E233] rounded-full px-3 py-2 mb-5 group hover:shadow-md transition-shadow">
          <Image
            src={flower2}
            alt="flower2"
            className="transition-transform duration-900 group-hover:rotate-360 w-5 lg:w-auto"
          />
          <h1 className="text-[#0069D1] text-[14px] lg:text-[16px]">
            Geschäftspartner
          </h1>
        </button>

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-40 w-full mb-16">
          <h1 className="text-[#011222] text-[40px] lg:text-[54px] w-full lg:w-1/2 leading-tight">
            Geschäftspartner
          </h1>
          <p className="text-[#5C7A84] font-medium text-[18px] lg:text-[20px] w-full lg:w-1/2">
            Partnerschaften, die auf Vertrauen und Qualität bauen – gemeinsam
            schaffen wir Lösungen, die Visionen Wirklichkeit werden lassen.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {partners.map((item) => (
            <div
              key={item.id}
              // Added 'group' and 'overflow-hidden'
              className="group h-80 w-full bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div
                className={`w-full h-full flex items-center justify-center ${item.padding}`}
              >
                <Image
                  src={item.src}
                  alt={item.name}
                  // Added 'group-hover:scale-110' and transition classes
                  className="object-contain max-h-full w-auto transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Geschäftspartner;

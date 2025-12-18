"use client";

import React, { useState, useEffect } from "react";
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
import flower1 from "../../../public/images/flower1.svg";

// ✅ Move partners array outside component
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
  const [currentFlippedCard, setCurrentFlippedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Don't auto-flip if a card is being hovered
      if (hoveredCard === null) {
        // Select a random card
        const randomIndex = Math.floor(Math.random() * partners.length);
        const randomCard = partners[randomIndex];

        setCurrentFlippedCard(randomCard.id);

        // Flip it back after 2 seconds
        setTimeout(() => {
          setCurrentFlippedCard(null);
        }, 2000);
      }
    }, 500); // Try to flip a new card every 3 seconds

    return () => clearInterval(interval);
  }, [hoveredCard]);

  const isFlipped = (id) => {
    // If hovered, always show front (logo)
    if (hoveredCard === id) return true;
    // If this is the currently auto-flipped card, show front (logo)
    if (currentFlippedCard === id) return true;
    // Otherwise show back (white info card)
    return false;
  };

  return (
    <div className="w-full bg-[#F8FCFF]">
      <div className="container mx-auto py-[120px] px-4">
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

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-40 w-full mb-16">
          <h1 className="text-[#011222] text-[40px] lg:text-[54px] w-full lg:w-1/2 leading-tight">
            Geschäftspartner
          </h1>
          <p className="text-[#5C7A84] font-medium text-[18px] lg:text-[20px] w-full lg:w-1/2">
            Partnerschaften, die auf Vertrauen und Qualität bauen – gemeinsam
            schaffen wir Lösungen, die Visionen Wirklichkeit werden lassen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {partners.map((item) => (
            <div
              key={item.id}
              className="perspective-1000 h-80 cursor-pointer"
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className="relative w-full h-full transition-transform duration-700"
                style={{
                  transformStyle: "preserve-3d",
                  transform: isFlipped(item.id)
                    ? "rotateY(0deg)"
                    : "rotateY(180deg)",
                }}
              >
                {/* Front Side - Logo (shows when flipped) */}
                <div
                  className={`absolute inset-0 bg-white flex items-center justify-center shadow-sm hover:shadow-lg transition-shadow duration-300 ${item.padding}`}
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <Image
                    src={item.src}
                    alt={`Partner icon ${item.id}`}
                    className="object-contain max-h-full w-auto"
                  />
                </div>

                {/* Back Side - White Info Card (default/upside down state) */}
                <div
                  className="absolute inset-0 bg-white flex flex-col items-center justify-center p-8 shadow-sm border border-gray-100"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br  flex items-center justify-center mb-5">
                    <Image src={flower1} alt="flower icon"></Image>
                  </div>
                  <h3 className="text-[#011222] text-xl font-semibold mb-3 text-center">
                    {item.name}
                  </h3>
                  {/* <p className="text-[#5C7A84] text-center text-sm leading-relaxed">
                    {item.description}
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default Geschäftspartner;

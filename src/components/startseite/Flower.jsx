"use client";
import React, { useState } from "react";

const Flower = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndexMobile, setActiveIndexMobile] = useState(null);

  const items = [
    {
      id: 0,
      title: "Beratungstermin vereinbaren",
      text: "Erster Schritt zur individuellen Lösung: einfach Termin vereinbaren und beraten lassen.",
      positionClass: "absolute  -right-80 xl:-right-90 top-8 text-left",
      angle: -35,
      step: 1,
    },
    {
      id: 1,
      title: "Bedarfsanalyse durchführen",
      text: "Gemeinsam analysieren wir Ihre aktuelle Situation und definieren Ihre Ziele und Prioritäten",
      positionClass:
        "absolute -right-100 xl:-right-110 top-1/2 -translate-y-1/2 text-left",
      angle: 0,
      step: 2,
    },
    {
      id: 2,
      title: "Strategieplanung erstellen",
      text: "Auf Basis der Analyse entwickeln wir ein massgeschneidertes Konzept für Ihre Bedürfnisse",
      positionClass: "absolute -right-80 xl:-right-90 bottom-8 text-left",
      angle: 30,
      step: 3,
    },
    {
      id: 3,
      title: "Entscheidung treffen",
      text: "Sie wählen die passende Lösung transparent, verständlich und ohne Druck.",
      positionClass: "absolute -left-50 xl:-left-90 bottom-8 text-right",
      angle: 152,
      step: 4,
    },
    {
      id: 4,
      title: "Umsetzung einleiten",
      text: "Wir setzen die vereinbarte Strategie effizient und professionell in die Praxis um.",
      positionClass:
        "absolute -left-60 xl:-left-110 top-1/2 -translate-y-1/2 text-right",
      angle: 185,
      step: 5,
    },
    {
      id: 5,
      title: "Betreuung sicherstellen",
      text: "Langfristige Begleitung und regelmässige Überprüfung, damit alles optimal bleibt.",
      positionClass: "absolute -left-50 xl:-left-90 top-8 text-right",
      angle: 221,
      step: 6,
    },
  ];

  const rotationAngle =
    hoveredIndex !== null ? items[hoveredIndex].angle + 90 : 0;

  return (
    <div className="bg-[#EDF5FA] relative min-h-screen overflow-x-hidden">
      <div className="container mx-auto flex flex-col items-center py-10 md:py-20 px-4">
        <h2 className="text-[28px] md:text-[48px] text-[#121921] text-center font-medium">
          Rundumbetreuung
        </h2>

        {/* Desktop Version - Hidden on mobile */}
        <div className="hidden lg:block mt-28 relative">
          <div className="relative w-[480px] h-[480px] flex items-center justify-center">
            <div className="absolute inset-4 rounded-full border border-[#D7E6F5]" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {items.map((item, index) => (
                <div
                  key={`line-${index}`}
                  className="absolute origin-left flex items-center transition-all duration-500 ease-out"
                  style={{
                    transform: `rotate(${item.angle}deg)`,
                    left: "50%",
                    top: "50%",
                    width: "0px",
                    opacity: hoveredIndex === index ? 1 : 0,
                    zIndex: 0,
                  }}
                >
                  <div
                    className="h-[2px] bg-[#03A8E2] relative"
                    style={{
                      marginLeft: "145px",
                      width: "155px",
                    }}
                  ></div>
                </div>
              ))}
            </div>
            <div
              className="relative pointer-events-none transition-transform duration-700 ease-in-out z-10"
              style={{
                transform: `rotate(${rotationAngle}deg)`,
              }}
            >
              <svg
                width="285"
                height="291"
                viewBox="0 0 285 291"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all duration-500"
              >
                <path
                  d="M175.645 0L154.676 109.803L150.617 113.192H134.158L130.099 109.803L109.13 0L142.5 5.87422L175.871 0H175.645Z"
                  fill="#03A8E2"
                  fillOpacity={hoveredIndex !== null ? "1" : "0.4"}
                  className="transition-all duration-500"
                />

                <g className="transition-all duration-500">
                  <path
                    d="M175.644 291L142.274 285.126L108.904 291L129.873 181.198L133.931 177.809H150.391L154.45 181.198L175.419 291H175.644Z"
                    fill="#0069D1"
                    fillOpacity={hoveredIndex !== null ? "1" : "0.4"}
                  />

                  <path
                    d="M152.195 129.413H133.707L124.462 145.454L133.707 161.495H152.195L161.44 145.454L152.195 129.413Z"
                    fill="#03A8E2"
                    fillOpacity={hoveredIndex !== null ? "1" : "0.4"}
                  />

                  <path
                    d="M118.599 168.77L117.697 173.966L33.1446 246.942L21.6455 215.086L0 189.104L105.296 152.277L110.257 154.084L118.374 168.318L118.599 168.77Z"
                    fill="#0069D1"
                    fillOpacity={hoveredIndex !== null ? "1" : "0.4"}
                  />

                  <path
                    d="M118.6 122.227L110.483 136.461L105.523 138.268L0.226318 101.441L21.8718 75.4593L33.3711 43.603L117.924 116.579L118.826 121.775L118.6 122.227Z"
                    fill="#0069D1"
                    fillOpacity={hoveredIndex !== null ? "1" : "0.4"}
                  />

                  <path
                    d="M284.775 101.67L179.478 138.497L174.518 136.689L166.401 122.455L167.303 117.259L251.856 44.2832L263.355 76.1394L285 102.122L284.775 101.67Z"
                    fill="#0069D1"
                    fillOpacity={hoveredIndex !== null ? "1" : "0.4"}
                  />

                  <path
                    d="M284.774 189.333L263.128 215.315L251.629 247.171L167.076 174.195L166.174 168.999L174.291 154.765L179.252 152.958L284.548 189.784L284.774 189.333Z"
                    fill="#0069D1"
                    fillOpacity={hoveredIndex !== null ? "1" : "0.4"}
                  />
                </g>
              </svg>
            </div>

            {items.map((item, index) => (
              <div
                key={item.id}
                className={`${
                  item.positionClass
                } z-20 w-90 cursor-pointer transition-all duration-300 ${
                  hoveredIndex === index ? "scale-105" : "opacity-90"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <h3
                  className={`font-semibold text-[15px] w-[60%] xl:w-full xl:text-[16px] transition-colors duration-300 ${
                    hoveredIndex === index ? "text-[#03A8E2]" : "text-[#121921]"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-[13px] xl:text-[15px] w-[60%] xl:w-full mt-2 leading-relaxed transition-colors duration-300 ${
                    hoveredIndex === index ? "text-[#121921]" : "text-[#5A6A7C]"
                  }`}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Version - Vertical List */}
        <div className="lg:hidden w-full mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-5 shadow-sm border border-[#D7E6F5] hover:border-[#03A8E2] hover:shadow-md transition-all duration-300"
            >
              {/* Step Number */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#0069D1] flex items-center justify-center text-white font-bold text-sm">
                  {item.step}
                </div>
                <div className="h-px flex-1 bg-[#D7E6F5]"></div>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-[15px] text-[#121921] mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] text-[#5A6A7C] leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flower;

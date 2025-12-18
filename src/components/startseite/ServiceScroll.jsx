"use client";
import React from "react";
import Image from "next/image";
import photo1 from "../../../public/images/photo1.jpg";
import photo2 from "../../../public/images/photo2.jpg";
import photo3 from "../../../public/images/photo3.jpg";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Berufsstart",
    description:
      "Mia startet ins Berufsleben und möchte finanzielle Stabilität ohne Ballast. Wir entwickeln eine individuelle Roadmap, reduzieren unnötige Kosten und integrieren eine passende Absicherung – damit sie sicher durchs Leben geht und mehr für die Zukunft übrig hat.",
    buttonText: "Details anzeigen",
    image: photo1,
    bgColor: "bg-[#F8FDFF]",
  },
  {
    id: 2,
    title: "Familiengründung",
    description:
      "Jonas und Lea möchten Geld sparen, ohne Familien ziele zu vernachlässigen. Wir erstellen eine klare Planung und sichern die Zukunft ihrer Kinder - damit Eigenheim, Reisen und Bildung greifbar bleiben.",
    buttonText: "Details anzeigen",
    image: photo2,
    bgColor: "bg-[#FEFEE5]",
  },
  {
    id: 3,
    title: "Ruhestand",
    description:
      "Klaus möchte die kommenden Jahre entspannt genießen. Wir entwickeln eine nachhaltige Planungsstrategie, die Kosten überschaubar hält und Gesundheits- sowie Vermögensrisiken absichert – damit er den Lebensabend sorgenfreier gestalten kann",
    buttonText: "Details anzeigen",
    image: photo3,
    bgColor: "bg-[#DEFFF2]",
  },
];

const ServiceScroll = () => {
  return (
    <>
      <div
        className="hidden lg:block relative mt-15"
        style={{ height: `${services.length * 110}vh` }}
      >
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`sticky h-screen flex items-center overflow-hidden ${service.bgColor}`}
            style={{ top: `${index * 40}px` }}
          >
            <div className="w-full flex flex-row items-center">
              <div className="flex-1 flex justify-center items-center">
                <div className="max-w-lg mx-auto flex flex-col justify-center gap-6 px-4">
                  <h1 className="text-[#121921] text-5xl font-semibold leading-tight">
                    {service.title}
                  </h1>
                  <p className="text-[#121921] text-xl leading-relaxed">
                    {service.description}
                  </p>
                  <div className="pt-4">
                    <Link href="/dienstleistungen">
                      <button className="border border-[#121921] px-5 py-3 rounded-full hover:bg-[#121921] hover:text-white transition-colors">
                        {service.buttonText}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="w-1/2 relative h-screen">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="lg:hidden relative mt-15 mb-2 px-4"
        style={{ height: `${services.length * 100}vh` }}
      >
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`sticky rounded-2xl overflow-hidden shadow-lg ${service.bgColor}`}
            style={{
              top: `${80 + index * 30}px`,
              height: "650px",
              marginBottom: index < services.length - 1 ? "20px" : "0",
            }}
          >
            <div className="relative h-64 md:h-100  w-full">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            <div
              className="p-6 space-y-6 overflow-y-auto"
              style={{ maxHeight: "calc(100% - 256px)" }}
            >
              <h2 className="text-[#121921] text-2xl font-semibold leading-tight">
                {service.title}
              </h2>
              <p className="text-[#121921] text-base leading-relaxed">
                {service.description}
              </p>
              <Link href="/dienstleistungen">
                <button className="border border-[#121921] px-5 py-3 rounded-full hover:bg-[#121921] hover:text-white transition-colors w-full">
                  {service.buttonText}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServiceScroll;

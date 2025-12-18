import React from "react";
import Image from "next/image";
import tag4 from "../../../public/images/tag4.svg";
// import arrow1 from "../../../public/images/arrow 1.svg";
// import arrow2 from "../../../public/images/arrow 2.svg";
import part1 from "../../../public/images/part1.jpg";
import part2 from "../../../public/images/part2.jpg";
import part3 from "../../../public/images/part3.jpg";
import part4 from "../../../public/images/part4.png";
import part5 from "../../../public/images/part5.jpg";
import part6 from "../../../public/images/part6.jpg";

const Beratung = () => {
  const services = [
    {
      id: 1,
      title: "Gesundheitsvorsorge",
      description:
        "In der Schweiz setzt sich das Krankenkassensystem aus zwei wesentlichen Komponenten zusammen: der obligatorischen Grundversicherung und einer Vielzahl von Zusatzversicherungen.",
      image: part1,
      bgColor: "bg-[#F2F7FD]",
      textColor: "text-[#5B6B7A]",
      imagePosition: "left",
    },
    {
      id: 2,
      title: "Altersvorsorge",
      description:
        "Die private Vorsorge spielt eine entscheidende Rolle, um Ihren individuellen Lebensstandard in der Zukunft zu sichern. Möchten Sie Ihre 1. und 2. Säule erweitern, um nach der Pensionierung zusätzliches Geld zu erhalten? Dann sollten Sie in Erwägung ziehen, eine 3. Säule einzurichten.",
      image: part2,
      bgColor: "bg-[#07133B]",
      textColor: "text-white",
      titleColor: "text-[#33E47A]",
      imagePosition: "right",
    },
    {
      id: 3,
      title: "Hausrat- und Haftpflichtversicherung",
      description:
        "Eine Hausratversicherung sowie eine Privathaftpflichtversicherung sind in der Schweiz zwar nicht gesetzlich vorgeschrieben, jedoch äußerst empfehlenswert. Die Hausratversicherung deckt Schäden an Ihrem Eigentum, die durch Diebstahl, Raub, Feuer, Wasser oder andere Elementarereignisse entstehen. Die Privathaftpflichtversicherung hingegen übernimmt die finanziellen Schäden, die Sie versehentlich Dritten zufügen, einschließlich Schäden an Gegenständen oder Objekten in Ihrer Mietwohnung.",
      image: part3,
      bgColor: "bg-[#F2F7FD]",
      textColor: "text-[#5B6B7A]",
      imagePosition: "left",
    },
    {
      id: 4,
      title: "Rechtsschutz",
      description:
        "Eine Rechtsschutzversicherung bietet umfassenden Schutz vor den Kosten, die aus rechtlichen Konflikten entstehen können. Sie gewährt Unterstützung durch Anwälte und deckt die anfallenden Gerichtskosten. Diese Versicherung wird in verschiedenen Bereichen angeboten, darunter Privat-Rechtsschutz, Verkehrs-Rechtsschutz und für Unternehmen. Obwohl sie nicht verpflichtend ist, wird sie besonders empfohlen, wenn das Budget für Anwaltskosten begrenzt ist.",
      image: part4,
      bgColor: "bg-[#07133B]",
      textColor: "text-white",
      titleColor: "text-[#33E47A]",
      imagePosition: "right",
    },
    {
      id: 5,
      title: "Fahrzeugversicherung",
      description:
        "In der Schweiz sind Autoversicherungen gesetzlich notwendig, um Schäden an Dritten abzudecken. Schäden am eigenen Fahrzeug können hingegen optional durch Teilkasko- oder Vollkaskoversicherungen abgedeckt werden. Ob man sich für Teil- oder Vollkasko entscheidet, hängt von unterschiedlichen Aspekten ab, darunter das Alter des Fahrzeugs und persönliche finanzielle Erwägungen.",
      image: part5,
      bgColor: "bg-[#F2F7FD]",
      textColor: "text-[#5B6B7A]",
      imagePosition: "left",
    },
    {
      id: 6,
      title: "Reiseversicherung",
      description:
        "Reisen Sie oft ins Ausland und sind Sie häufig unterwegs? Eine Reiseversicherung ist genau das, was Sie brauchen – sie bietet Schutz vor Planänderungen oder -absagen aufgrund unvorhergesehener Ereignisse wie Unfällen, Krankheiten oder Naturkatastrophen.",
      image: part6,
      bgColor: "bg-[#07133B]",
      textColor: "text-white",
      titleColor: "text-[#33E47A]",
      imagePosition: "right",
    },
  ];

  return (
    <div className="container mx-auto py-10 lg:py-20 px-4 lg:px-0">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center w-full gap-6 lg:gap-10">
        <Image src={tag4} alt="tag4" className="w-auto" />
        <h2 className="text-[#121921] text-[28px] md:text-[38px] lg:text-[48px] text-center leading-tight">
          Professionelle Beratung - Individuelle{" "}
          <br className="hidden lg:block" /> Absicherung
        </h2>
        <p className="text-[#5C7A84] text-[16px] lg:text-[20px] text-center leading-relaxed max-w-4xl">
          Ihre Absicherung, klar und unkompliziert – aus einer Hand. Wir
          beraten, vergleichen und managen Ihre{" "}
          <br className="hidden lg:block" /> Versicherungen, damit Sie sich auf
          das Wesentliche konzentrieren können.
        </p>
      </div>

      <div
        className="hidden lg:block relative mt-40"
        style={{ height: `${services.length * 80}vh` }}
      >
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`sticky ${service.bgColor} rounded-tl-[60px] rounded-br-[60px] overflow-hidden`}
            style={{
              top: `${160 + index * 40}px`,
              marginBottom: index < services.length - 1 ? "40px" : "0",
            }}
          >
            <div
              className={`flex flex-row items-center justify-between w-full ${
                service.imagePosition === "right" ? "flex-row-reverse" : ""
              }`}
            >
              <Image
                src={service.image}
                alt={service.title}
                className={`w-1/2 object-cover h-[600px] ${
                  service.imagePosition === "left"
                    ? "rounded-tl-[60px]"
                    : "rounded-br-[60px]"
                }`}
              />
              <div className="w-1/2 p-10 flex flex-col items-start justify-between h-full gap-10">
                <h1
                  className={`${
                    service.titleColor || service.textColor
                  } text-[38px] uppercase font-semibold`}
                >
                  {service.title}
                </h1>
                <p className={service.textColor}>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="lg:hidden relative mt-10"
        style={{ height: `${services.length * 60}vh` }}
      >
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`sticky ${service.bgColor} rounded-tl-[40px] rounded-br-[40px] overflow-hidden shadow-lg`}
            style={{
              top: `${80 + index * 55}px`,
              marginBottom: index < services.length - 1 ? "20px" : "0",
            }}
          >
            <Image
              src={service.image}
              alt={service.title}
              className="w-full h-52 sm:h-80 object-cover"
            />
            <div className="p-6 flex flex-col items-start justify-between gap-4">
              <h2
                className={`${
                  service.titleColor || service.textColor
                } text-[22px] md:text-[26px] uppercase font-semibold leading-tight`}
              >
                {service.title}
              </h2>
              <p className={`${service.textColor} text-[13px] leading-relaxed`}>
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Beratung;

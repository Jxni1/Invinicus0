import React from "react";
import Image from "next/image";

import image1 from "../../../public/images/image1.png";
import image2 from "../../../public/images/image2.png";
import image3 from "../../../public/images/image3.png";
import image4 from "../../../public/images/image4.png";

export default function TimelineSection() {
  const steps = [
    {
      id: "01",
      title: "Berufsstart",
      description:
        "Lisa ist 25 und startet gerade ins Berufsleben. Gemeinsam mit ihr entwickeln wir einen Plan, der ihre wichtigsten Risiken abdeckt, aber auch Raum für ihre Träume lässt – wie eine spätere Weltreise oder den Wunsch nach Selbstständigkeit.",
      // Use the imported object for local images
      image: image1,
      theme: "light",
    },
    {
      id: "02",
      title: "Familiengründung",
      description:
        "Thomas und Julia erwarten ihr erstes Kind. Wir passen ihren Versicherungsschutz an die neue Lebenssituation an, denken an Absicherung der Familie und sorgen dafür, dass sie sich ganz auf das Abenteuer Familie konzentrieren können.",
      // Use string URL for external images
      image: image2,
      theme: "dark",
    },
    {
      id: "03",
      title: "Selbstständigkeit",
      description:
        "Ahmed gründet sein eigenes Unternehmen. Wir stehen ihm als Partner zur Seite und helfen, die passenden Versicherungen für seine berufliche und private Zukunft zu finden – und bei Bedarf später flexibel anzupassen.",
      image: image3,
      theme: "light",
    },
    {
      id: "04",
      title: "Vermögensaufbau & Ruhestand",
      description:
        "Maria denkt mit 50 Jahren an die Zukunft. Wir beraten sie zu optimalem Schutz und unterstützen ihren Vermögensaufbau, damit sie ihren Ruhestand sorgenfrei genießen können.",
      image: image4,
      theme: "dark",
    },
  ];

  return (
    <section className="w-full py-20 bg-[#f8faff]">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-500 text-sm font-medium mb-6">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Timeline
          </span>
          <h2 className="text-3xl md:text-4xl font-medium text-[#0f172a] leading-tight">
            Begleitung Durch Alle Lebensphasen
            <br />
            Beispiele Aus Dem Alltag
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 border-l-2 border-dashed border-gray-200 hidden md:block" />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={step.id}
                  className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0"
                >
                  {/* Center Circle */}
                  <div
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white font-medium z-10 border-4 border-[#f8faff] hidden md:flex ${
                      step.theme === "dark" ? "bg-[#60a5fa]" : "bg-[#0f172a]"
                    }`}
                  >
                    {step.id}
                  </div>

                  {/* LEFT COLUMN */}
                  <div className="w-full md:w-1/2 md:pr-16 flex justify-center md:justify-end">
                    {isEven ? (
                      // Text Card (Light)
                      <div className="bg-white p-8 flex flex-col gap-4 rounded-tl-[32px] rounded-br-[32px] shadow-sm w-full max-w-lg text-left p-18 relative">
                        <div className="text-[#34d399] font-medium flex items-center gap-2 text-[18px]">
                          <span>•</span> {step.title} <span>•</span>
                        </div>
                        <p className="text-[#5B6B7A] text-[16px] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    ) : (
                      // Image Card
                      <div className="w-full max-w-lg h-64 md:h-80 rounded-tr-[32px] rounded-bl-[32px] overflow-hidden shadow-sm relative">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>

                  {/* RIGHT COLUMN */}
                  <div className="w-full md:w-1/2 md:pl-16 flex justify-center md:justify-start">
                    {isEven ? (
                      // Image Card
                      <div className="w-full max-w-lg h-64 md:h-80 rounded-tr-[32px] rounded-bl-[32px]  overflow-hidden shadow-sm relative">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      // Text Card (Dark)
                      <div className="bg-[#0f172a] p-8 flex flex-col gap-4 rounded-tr-[32px] rounded-bl-[32px] shadow-sm w-full max-w-lg text-left p-18 relative text-white">
                        <div className="text-[#34d399] font-medium flex items-center gap-2 text-sm">
                          <span>•</span> {step.title} <span>•</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

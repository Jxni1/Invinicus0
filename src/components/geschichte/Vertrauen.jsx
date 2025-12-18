import React from "react";
import Image from "next/image";
import tag from "../../../public/images/tag.svg";
import tag3 from "../../../public/images/tag3.svg";
import section2 from "../../../public/images/section2.png";

const Vertrauen = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-5 w-full py-10 lg:py-20 relative px-4 lg:px-0">
      {/* Content Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-between gap-6 lg:gap-10">
        <Image src={tag} alt="tag" className="w-auto" />
        <h1 className="text-[32px] md:text-[40px] lg:text-[48px] text-[#011222] leading-tight lg:leading-15">
          Wie steht es um unser <br className="hidden lg:block" /> Vertrauen?
        </h1>
        <p className="text-[14px] lg:text-[16px] text-[#5B6B7A] leading-relaxed">
          In einer Welt, die sich ständig verändert, ist Vertrauen der Boden,
          auf dem alle nachhaltigen Ergebnisse wachsen. Bei der Invincus GmbH
          betrachten wir Vertrauen nicht als einmalige Entscheidung, sondern als
          fortlaufende Praxis: in der Art, wie wir zuhören, wie wir denken, wie
          wir handeln und wie wir Ergebnisse greifbar machen.
        </p>

        <div className="flex flex-col items-start justify-between gap-5 w-full">
          <div className="bg-[#07133B] hover:bg-[#F7F8FF] group px-6 lg:px-10 py-5 flex flex-col items-start justify-between gap-3 rounded-tr-[40px] rounded-bl-[40px] transition-all duration-500 ease-in-out w-full">
            <h1 className="text-[#33E47A] group-hover:text-[#5B6B7A] font-semibold text-[18px] lg:text-[20px] uppercase transition-colors duration-500 ease-in-out">
              UNSERE VISION
            </h1>
            <p className="text-[13px] lg:text-[14px] text-white group-hover:text-[#5B6B7A] transition-colors duration-500 ease-in-out leading-relaxed">
              Die Invincus GmbH gestaltet eine Welt, in der jeder Mensch Zugang
              zu verständlichen, praxisnahen und nachhaltigen Konzepten hat, die
              Lebensqualität erhöhen und Selbstbestimmung stärken – unabhängig
              von Alter, Herkunft oder Lebensumständen. Durch empathische
              Beratung, datenbasierte Erkenntnisse und kreative Umsetzung
              schaffen wir sichere Wegweiser für eine lebenswerte Zukunft.
            </p>
          </div>
          <div className="bg-[#F7F8FF] hover:bg-[#07133B] group px-6 lg:px-10 py-5 flex flex-col items-start justify-between gap-3 rounded-tr-[40px] rounded-bl-[40px] transition-all duration-500 ease-in-out w-full">
            <h1 className="text-[#5B6B7A] group-hover:text-[#33E47A] font-semibold text-[18px] lg:text-[20px] uppercase transition-colors duration-500 ease-in-out">
              UNSERE MISSION
            </h1>
            <p className="text-[13px] lg:text-[14px] text-[#5B6B7A] group-hover:text-white transition-colors duration-500 ease-in-out leading-relaxed">
              Wir schaffen die Brücke zwischen modernster Methoden und
              menschlicher Begleitung: Konzepte, die heute funktionieren und
              morgen noch tragen – für alle Lebensphasen, überall.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-row items-center justify-center relative mt-8 lg:mt-0">
        <div className="relative w-full max-w-md lg:max-w-none">
          <Image
            src={section2}
            alt="section2"
            className="w-full lg:w-[70%] rounded-tl-[40px] rounded-br-[40px] mx-auto"
          />
          <Image
            src={tag3}
            alt="tag3"
            className="absolute top-10 lg:top-20 left-10 lg:left-20 w-16 lg:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Vertrauen;

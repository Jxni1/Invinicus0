import React from "react";
import uber7 from "../../../public/images/uber7.svg";
import pop13 from "../../../public/images/pop13.svg";
import pop14 from "../../../public/images/pop14.svg";
import Efrahren2 from "../../components/general/Efrahren2";
import Mach from "../../components/karriere/Mach";
import Passt from "../../components/karriere/Passt";

const page = () => {
  const heroContent = {
    title: "Werde Teil unseres Teams",
    subtitle:
      "Wir verbinden Menschen, Ideen und Zukunft. Finde offene Positionen, die zu deinem Talent passen und starte deine Karriere bei der Invinicus.",
    icon: uber7,
    iconAlt: "uber uns icon",
    popupImages: [pop13, pop14],
  };
  return (
    <div>
      <Efrahren2 content={heroContent} />
      <Mach />
      <Passt />
    </div>
  );
};

export default page;

import React from "react";
import Efrahren from "../../components/general/Efrahren";
import uber2 from "../../../public/images/uber2.svg";
import pop3 from "../../../public/images/pop3.svg";
import pop4 from "../../../public/images/pop4.svg";
import Beratung from "../../components/dienstleistungen/Beratung";

const page = () => {
  const heroContent = {
    title: "Unsere Dienstleistungen",
    subtitle: "Ihr Erfolg beginnt hier: Unterstützende Services von A bis Z",
    icon: uber2,
    iconAlt: "uber uns icon",
    popupImages: [pop3, pop4],
  };
  return (
    <div>
      <Efrahren content={heroContent} />
      <Beratung />
    </div>
  );
};

export default page;

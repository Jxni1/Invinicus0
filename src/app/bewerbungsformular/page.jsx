import React from "react";
import uber8 from "../../../public/images/uber8.svg";
import pop15 from "../../../public/images/pop15.svg";
import pop16 from "../../../public/images/pop16.svg";
import Efrahren from "../../components/general/Efrahren";
import BewerbungsFormular1 from "../../components/kontakt/BewerbungsFormular1";

const page = () => {
  const heroContent = {
    title: "Willkommen bei Invinicus: Deine Reise beginnt hier.",
    subtitle:
      "Wir zeigen dir den Weg zu deiner Entwicklung | 20. Februar 2024 ",
    icon: uber8,
    iconAlt: "uber uns icon",
    popupImages: [pop15, pop16],
  };
  return (
    <div>
      <Efrahren content={heroContent} />
      <BewerbungsFormular1 />
    </div>
  );
};

export default page;

import React from "react";
import Efrahren from "../../components/general/Efrahren";
import uber6 from "../../../public/images/uber6.svg";
import pop11 from "../../../public/images/pop11.svg";
import pop12 from "../../../public/images/pop12.svg";
import KontaktForm from "../../components/kontakt/KontaktForm";
import Kontaktieren from "../../components/kontakt/Kontaktieren";

const page = () => {
  const heroContent = {
    title: "Noch Fragen?",
    subtitle: (
      <>
        Haben Sie Fragen oder benötigen Sie persönliche Beratung? Wir sind hier,
        um zu helfen. Buchen Sie eine <br /> Beratung mit unserem Team –
        schnell, einfach und vollständig auf Ihre Bedürfnisse zugeschnitten.
      </>
    ),
    icon: uber6,
    iconAlt: "uber uns icon",
    popupImages: [pop11, pop12],
  };

  return (
    <div>
      <Efrahren content={heroContent} />
      <KontaktForm />
      <Kontaktieren />
    </div>
  );
};

export default page;

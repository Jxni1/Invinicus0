import React from "react";
import Efrahren from "../../components/general/Efrahren";
// import TestimonialSection from "../../components/general/TestimonialSection";
// import Subscribe from "../../components/general/Subscribe";
import Zuverlässiger from "../../components/geschichte/Zuverlässiger";
// import TimelineSection from "../../components/geschichte/TimelineSetion";
import Geschäftspartner from "../../components/geschichte/Geschäftspartner";
import Vertrauen from "../../components/geschichte/Vertrauen";
import uber from "../../../public/images/uber.svg";
import pop1 from "../../../public/images/pop1.svg";
import pop2 from "../../../public/images/pop2.svg";

const page = () => {
  const heroContent = {
    title: "Unsere Geschichte",
    subtitle:
      "Aus Ideen wurden Werte, aus Wurzeln Wachstum.\nUnsere Geschichte in wenigen Sätzen",
    icon: uber,
    iconAlt: "uber uns icon",
    popupImages: [pop1, pop2],
  };

  return (
    <div>
      <Efrahren content={heroContent} />

      <Zuverlässiger />

      {/* <TimelineSection /> */}
      {/* <TestimonialSection /> */}
      {/* <Subscribe /> */}

      <Geschäftspartner />
      <Vertrauen />
    </div>
  );
};

export default page;

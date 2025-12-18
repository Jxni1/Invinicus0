"use client";

import React, { useEffect } from "react";
import Script from "next/script";

const Page = () => {
  useEffect(() => {
    // Ensure Calendly script is loaded
    if (window.Calendly) {
      window.Calendly.initInlineWidget({
        url: "https://calendly.com/blendelezii04/kaegi",
        parentElement: document.getElementById("calendly-embed"),
      });
    }
  }, []);

  return (
    <>
      {/* Load Calendly Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      <div className="container mx-auto px-4 pt-32 md:pt-40 lg:pt-42">
        {/* Heading Section */}
        <div className="max-w-5xl mx-auto mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] text-center font-bold leading-tight">
            Vereinbare jetzt einfach deinen Termin -
            <br className="hidden md:block" />
            online oder telefonisch.
          </h1>
          <h2 className="text-[#5C7A84] text-base sm:text-lg md:text-xl lg:text-[20px] mt-4 md:mt-5 text-center">
            Wir freuen uns darauf, von dir zu hören!
          </h2>
        </div>

        {/* Calendly Widget */}
        <div className="max-w-5xl mx-auto">
          <div
            id="calendly-embed"
            className="calendly-inline-widget w-full"
            data-url="https://calendly.com/blendelezii04/kaegi"
            style={{ minWidth: "320px", height: "700px" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Page;

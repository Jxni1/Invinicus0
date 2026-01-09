"use client";

import React, { useState, useEffect } from "react";
import Script from "next/script";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if Calendly is loaded
    const checkCalendly = setInterval(() => {
      if (window.Calendly) {
        clearInterval(checkCalendly);
        window.Calendly.initInlineWidget({
          url: "https://calendly.com/invinicus-info/30min",
          parentElement: document.getElementById("calendly-embed"),
        });
        // Hide loading after a short delay to ensure widget renders
        setTimeout(() => setIsLoading(false), 800);
      }
    }, 100);

    return () => clearInterval(checkCalendly);
  }, []);

  return (
    <>
      {/* Load Calendly Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          // Additional fallback when script loads
          if (window.Calendly) {
            setTimeout(() => setIsLoading(false), 800);
          }
        }}
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

        {/* Calendly Widget Container */}
        <div className="max-w-5xl mx-auto relative">
          {/* Loading Screen */}
          {isLoading && (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-lg"
              style={{ minHeight: "1100px" }}
            >
              <div className="flex flex-col items-center gap-4">
                {/* Spinner */}
                <div className="w-12 h-12 border-4 border-[#B8E4FF] border-t-[#0069D1] rounded-full animate-spin"></div>
                {/* Loading Text */}
                <p className="text-[#5C7A84] text-lg font-medium">
                  Kalender wird geladen...
                </p>
              </div>
            </div>
          )}

          {/* Calendly Widget */}
          <div
            id="calendly-embed"
            className={`calendly-inline-widget w-full transition-opacity duration-500 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
            data-url="https://calendly.com/invinicus-info/30min"
            style={{ minWidth: "320px", height: "1100px" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Page;

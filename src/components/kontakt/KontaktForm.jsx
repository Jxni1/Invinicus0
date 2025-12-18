import React from "react";
import Image from "next/image";
import tag6 from "../../../public/images/tag6.svg";
// arrow3 was imported but not used in your snippet, keeping it just in case
// import arrow3 from "../../../public/images/arrow3.svg";

const KontaktForm = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-stretch justify-between gap-10 lg:gap-20 px-4 lg:px-0 py-12 md:py-22">
      {/* Left Side - Map Section */}
      <div className="w-full lg:w-1/2 min-h-[500px] relative rounded-tl-[40px] rounded-br-[40px] overflow-hidden shadow-lg">
        {/* Google Maps Iframe */}
        <div className="absolute inset-0 z-0">
          <iframe
            src="https://www.google.com/maps?q=Schachenfeldstrasse+19,+8967+Widen&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Location"
            className="w-full h-full"
          ></iframe>
        </div>
        {/* Floating Address Card */}
        {/* <div className="absolute top-8 left-8 z-10 bg-white rounded-xl p-6 shadow-md max-w-xs w-full">
          <div className="space-y-1">
            <p className="text-[#011222] font-medium text-lg">
              Schachenfeldstrasse 19,
            </p>
            <p className="text-[#011222] font-medium text-lg">8967 Widen</p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-1">
              <span className="text-[#0069D1] font-bold text-lg">4.9</span>
              <div className="flex text-[#FBBF24]">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Directions Link */}
        {/* <a
              href="https://www.google.com/maps/dir/?api=1&destination=Schachenfeldstrasse+19,+8967+Widen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#66BB6A] hover:text-[#55a059] font-medium text-sm flex items-center gap-1"
            >
              RICHTUNG
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div> */}{" "}
        {/* Center Pin Icon overlay */}
      </div>

      {/* Right Side - Form Section */}
      <div className="w-full lg:w-1/2">
        <Image src={tag6} alt="tag6" className="mb-4" />
        <h2 className="text-[#011222] text-4xl lg:text-[50px] font-medium leading-tight mb-10">
          Wir freuen uns auf <br /> Ihre Nachricht!
        </h2>

        <form className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-[#4B5563] text-lg">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="w-full border border-gray-200 rounded-xl px-6 py-4 text-[#011222] placeholder-gray-300 focus:outline-none focus:border-[#011222] focus:ring-1 focus:ring-[#011222] transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[#4B5563] text-lg">
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="E-Mail"
                className="w-full border border-gray-200 rounded-xl px-6 py-4 text-[#011222] placeholder-gray-300 focus:outline-none focus:border-[#011222] focus:ring-1 focus:ring-[#011222] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="service" className="text-[#4B5563] text-lg">
                Dienstleistung
              </label>
              <input
                type="text"
                id="service"
                placeholder="z.B. Lebensversicherung"
                className="w-full border border-gray-200 rounded-xl px-6 py-4 text-[#011222] placeholder-gray-300 focus:outline-none focus:border-[#011222] focus:ring-1 focus:ring-[#011222] transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-[#4B5563] text-lg">
              Nachricht
            </label>
            <textarea
              id="message"
              rows={6}
              placeholder="Nachricht"
              className="w-full border border-gray-200 rounded-xl px-6 py-4 text-[#011222] placeholder-gray-300 focus:outline-none focus:border-[#011222] focus:ring-1 focus:ring-[#011222] transition-colors resize-none"
            />
          </div>

          <div className="flex bg-[#0069D1] w-fit px-8 py-4 rounded-full flex-row items-center justify-start gap-3 mt-2 hover:bg-[#005bb5] transition-colors cursor-pointer">
            <button
              type="submit"
              className="text-white uppercase font-medium tracking-wide"
            >
              Absenden
            </button>
            <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0069D1"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default KontaktForm;

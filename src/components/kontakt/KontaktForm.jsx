"use client";
import React, { useState } from "react";
import Image from "next/image";
import tag6 from "../../../public/images/tag6.svg";

const KontaktForm = () => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formspree.io/f/xzdzlllw", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus({
          type: "success",
          message: "Ihre Nachricht wurde erfolgreich gesendet!",
        });
        e.target.reset();
      } else {
        const data = await res.json();
        throw new Error(data.error || "Failed to send message");
      }
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message:
          "Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-stretch justify-between gap-10 lg:gap-20 px-4 lg:px-0 py-12 md:py-22">
      {/* Map Section */}
      <div className="w-full lg:w-1/2 min-h-[500px] relative rounded-tl-[40px] rounded-br-[40px] overflow-hidden shadow-lg">
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
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2">
        <Image src={tag6} alt="tag6" className="mb-4" />
        <h2 className="text-[#011222] text-4xl lg:text-[50px] font-medium leading-tight mb-10">
          Wir freuen uns auf <br /> Ihre Nachricht!
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-[#4B5563] text-lg">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
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
                name="email"
                placeholder="E-Mail"
                required
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
                name="service"
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
              name="message"
              rows={6}
              placeholder="Nachricht"
              required
              className="w-full border border-gray-200 rounded-xl px-6 py-4 text-[#011222] placeholder-gray-300 focus:outline-none focus:border-[#011222] focus:ring-1 focus:ring-[#011222] transition-colors resize-none"
            />
          </div>

          {status && (
            <div
              className={`p-4 rounded-lg ${
                status.type === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex bg-[#0069D1] w-fit px-8 py-4 rounded-full flex-row items-center justify-start gap-3 mt-2 hover:bg-[#005bb5] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="text-white uppercase font-medium tracking-wide">
              {loading ? "Senden..." : "Absenden"}
            </span>
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
          </button>
        </form>
      </div>
    </div>
  );
};

export default KontaktForm;

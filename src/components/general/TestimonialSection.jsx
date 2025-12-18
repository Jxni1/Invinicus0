"use client";
import React, { useState } from "react";
import Image from "next/image";
import arrow from "../../../public/images/arrow.svg";
import image1 from "../../../public/images/client1.png";
import image2 from "../../../public/images/client2.png";
import image3 from "../../../public/images/client3.png";

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      stars: 5,
      title: "Endlich jemand, der zuhört!",
      text: "Ich fühlte mich vom ersten Gespräch an verstanden. Keine Standardlösung, sondern eine Versicherung, die wirklich zu meinem Leben passt.",
      name: "Laura Meier",
      role: "CEO at Miro",
      image: image1,
      bgColor: "bg-[#effbfe]",
    },
    {
      id: 2,
      stars: 5,
      title: "Schnell, transparent und persönlich.",
      text: "Mein Anliegen wurde sofort bearbeitet – ohne Papierkram, ohne Stress. Ich wusste jederzeit, woran ich bin.",
      name: "Sarah Baumann",
      role: "Founder at Zira",
      image: image2,
      bgColor: "bg-[#fdf5fc]",
    },
    {
      id: 3,
      stars: 5,
      title: "Vertrauen, das bleibt.",
      text: "Nach einem Schadenfall wurde ich kompetent und freundlich begleitet. So stelle ich mir moderne Versicherung vor.",
      name: "John Lee",
      role: "CEO at Zoho",
      image: image3,
      bgColor: "bg-[#fffaf5]",
    },
    // {
    //   id: 4,
    //   stars: 5,
    //   title: "Endlich jemand, der zuhört!",
    //   text: "Ich fühlte mich vom ersten Gespräch an verstanden. Keine Standardlösung, sondern eine Versicherung, die wirklich zu meinem Leben passt.",
    //   name: "Laura Meier",
    //   role: "CEO at Miro",
    //   image: "https://i.pravatar.cc/150?img=5",
    //   bgColor: "bg-[#effbfe]", // Light Cyan
    // },
    // {
    //   id: 5,
    //   stars: 5,
    //   title: "Schnell, transparent und persönlich.",
    //   text: "Mein Anliegen wurde sofort bearbeitet – ohne Papierkram, ohne Stress. Ich wusste jederzeit, woran ich bin.",
    //   name: "Sarah Baumann",
    //   role: "Founder at Zira",
    //   image: "https://i.pravatar.cc/150?img=9",
    //   bgColor: "bg-[#fdf5fc]", // Light Purple
    // },
    // {
    //   id: 6,
    //   stars: 5,
    //   title: "Vertrauen, das bleibt.",
    //   text: "Nach einem Schadenfall wurde ich kompetent und freundlich begleitet. So stelle ich mir moderne Versicherung vor.",
    //   name: "John Lee",
    //   role: "CEO at Zoho",
    //   image: "https://i.pravatar.cc/150?img=13",
    //   bgColor: "bg-[#fffaf5]", // Light Orange
    // },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight leading-tight">
              Was unsere
              <br />
              Kunden sagen
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              „Echte Geschichten von Menschen, die wir stolz geschützt haben.
            </p>
          </div>

          <div className=" flex-row items-center hidden md:flex justify-between md:justify-start gap-4">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-14 h-14 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <Image src={arrow} alt="arrow" className="rotate-180" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-14 h-14 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <Image src={arrow} alt="arrow" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {getVisibleTestimonials().map((item) => (
            <div
              key={item.id}
              className={`${item.bgColor} rounded-3xl p-8 flex flex-col h-full transition-transform hover:-translate-y-1 duration-300`}
            >
              <div className="flex gap-2 text-yellow-400">
                {[...Array(item.stars)].map((_, i) => (
                  <div key={i} className="">
                    <span className="text-[40px]">★</span>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8 grow">
                {item.text}
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover bg-gray-200"
                />
                <div>
                  <p className="font-bold text-gray-900 text-sm">{item.name}</p>
                  <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

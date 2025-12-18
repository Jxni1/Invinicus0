"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const FloatingImage = ({ id, x, y, src, duration, onComplete }) => {
  return (
    <div
      className="absolute w-22 h-22 md:w-32 md:h-32 z-20 animate-pop-fade pointer-events-none opacity-70"
      style={{
        top: `${y}%`,
        left: `${x}%`,
        animationDuration: `${duration}s`,
      }}
      onAnimationEnd={() => onComplete(id)}
    >
      <Image
        src={src}
        alt="floating bubble"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

const Efrahren = ({ content }) => {
  const [floatingImages, setFloatingImages] = useState([]);

  // Destructure popupImages from content, defaulting to an empty array
  const {
    title = "Unsere Geschichte",
    subtitle = "Aus Ideen wurden Werte, aus Wurzeln Wachstum.\nUnsere Geschichte in wenigen Sätzen",
    icon,
    iconAlt = "icon",
    popupImages = [], // Now receiving images from props
  } = content || {};

  useEffect(() => {
    // Only start the interval if we actually have images to pop
    if (!popupImages || popupImages.length === 0) return;

    const interval = setInterval(() => {
      const newId = Date.now();

      // Select random image from the props array
      const randomImg =
        popupImages[Math.floor(Math.random() * popupImages.length)];

      const newImage = {
        id: newId,
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
        src: randomImg,
        duration: 2 + Math.random() * 3, // Calculate duration here
      };

      setFloatingImages((prev) => [...prev, newImage]);
    }, 800);

    return () => clearInterval(interval);
  }, [popupImages]); // Re-run if the image list changes

  const handleAnimationComplete = (id) => {
    setFloatingImages((prev) => prev.filter((img) => img.id !== id));
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#B8E4FF1A]">
      <style>{`
        @keyframes popFade {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(0); opacity: 0; }
        }
        .animate-pop-fade {
          animation-name: popFade;
          animation-timing-function: ease-in-out;
          animation-fill-mode: forwards;
        }
      `}</style>

      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {floatingImages.map((img) => (
          <FloatingImage
            key={img.id}
            id={img.id}
            x={img.x}
            y={img.y}
            src={img.src}
            duration={img.duration}
            onComplete={handleAnimationComplete}
          />
        ))}
      </div>

      <div className="container relative z-0 mx-auto flex flex-col items-center justify-between gap-10 py-24 md:py-48">
        {icon && (
          <div className="relative">
            <Image src={icon} alt={iconAlt} className="h-auto w-auto" />
          </div>
        )}

        <h2 className="text-center text-[#121921] text-4xl md:text-[80px] leading-tight">
          {title}
        </h2>

        <p className="text-[#5C7A84] text-[20px] text-center whitespace-pre-line">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Efrahren;

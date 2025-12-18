"use client";

import React from "react";
import { motion } from "framer-motion";

const Flexibel = () => {
  const heading = "In jeder Lebensphase entdecken wir die passende Lösung";
  const subtext =
    "Unsere Lösungen passen sich Ihrem Leben an - nicht umgekehrt";

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-15 py-20 md:py-40">
      <h2 className="text-[#121921] text-[32px] md:text-[38px] xl:text-[48px] text-center">
        {heading.split(" ").map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </h2>
      <motion.p
        className="text-[16px] md:text-[20px] text-[#5C7A84] text-center px-4 md:px-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        {subtext}
      </motion.p>
    </div>
  );
};

export default Flexibel;

"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  AnimatePresence,
} from "framer-motion";
import Snowfall from "react-snowfall";

export default function SplashScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  // Motion values
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + "%");
  // Slightly adjust fill mapping to ensure it looks fully full at 100%
  const fillProgress = useTransform(count, [0, 100], [0, 1.2]);

  useEffect(() => {
    if (!isLoading || !isHome) return;

    // Lock scroll
    document.body.style.overflow = "hidden";

    // 1. Start "fake" loading to 90%
    const controls = animate(count, 90, { duration: 2, ease: "easeInOut" });

    // 2. Wait for window load
    const onPageLoad = () => {
      controls.stop();
      animate(count, 100, {
        duration: 0.8,
        ease: "easeOut",
        onComplete: () => {
          setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "";
          }, 500); // slightly longer pause to see 100%
        },
      });
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, [isLoading, isHome, count]);

  return (
    <>
      {/* SPLASH SCREEN */}
      <AnimatePresence mode="wait">
        {isLoading && isHome && (
          <motion.div
            key="splash"
            // Exit animation for the whole screen (fade up)
            exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-gradient-to-br from-white to-blue-50"
          >
            {/* 1. Snowfall Effect */}
            <div className="absolute inset-0 pointer-events-none z-0 opacity-60">
              <Snowfall
                color="#0069D1"
                snowflakeCount={120}
                radius={[0.5, 3.0]}
                speed={[0.5, 2.5]}
                wind={[-0.5, 1.0]}
              />
            </div>

            {/* 2. Visuals Container */}
            <div className="relative z-10 flex flex-col items-center justify-center">
              {/* Glow Effect behind logo */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-[#0069D1] blur-[80px] rounded-full opacity-20 w-64 h-64 mx-auto my-auto"
              />

              {/* Logo & SVG */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                <svg
                  // Increased base size via Tailwind classes, removed fixed width/height attributes to allow scaling
                  className="w-[320px] h-[320px] md:w-[450px] md:h-[450px] drop-shadow-xl"
                  viewBox="0 0 285 291"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient
                      id="center-fill"
                      cx="142.5"
                      cy="145.5"
                      r="210"
                      gradientUnits="userSpaceOnUse"
                    >
                      <motion.stop offset={fillProgress} stopColor="#0069D1" />
                      <motion.stop
                        offset={fillProgress}
                        stopColor="rgba(255,255,255,0.1)"
                      />
                    </radialGradient>
                  </defs>

                  {/* Added stroke to paths for better definition before fill */}
                  <g stroke="#0069D1" strokeWidth="0.5" strokeOpacity="0.2">
                    <path
                      d="M175.644 291L142.274 285.126L108.904 291L129.873 181.198L133.931 177.809H150.391L154.45 181.198L175.419 291H175.644Z"
                      fill="url(#center-fill)"
                    />
                    <path
                      d="M118.599 168.77L117.698 173.966L33.1447 246.942L21.6456 215.086L0.00012207 189.104L105.296 152.277L110.257 154.084L118.374 168.318L118.599 168.77Z"
                      fill="url(#center-fill)"
                    />
                    <path
                      d="M118.6 122.227L110.483 136.461L105.523 138.268L0.226379 101.441L21.8718 75.4593L33.3711 43.603L117.924 116.579L118.826 121.775L118.6 122.227Z"
                      fill="url(#center-fill)"
                    />
                    <path
                      d="M175.645 0L154.676 109.803L150.617 113.192H134.158L130.099 109.803L109.13 0L142.5 5.87422L175.871 0H175.645Z"
                      fill="url(#center-fill)"
                    />
                    <path
                      d="M284.775 101.67L179.478 138.497L174.518 136.689L166.401 122.455L167.303 117.259L251.856 44.2832L263.355 76.1394L285 102.122L284.775 101.67Z"
                      fill="url(#center-fill)"
                    />
                    <path
                      d="M284.774 189.333L263.128 215.315L251.629 247.171L167.076 174.195L166.174 168.999L174.292 154.765L179.252 152.958L284.548 189.784L284.774 189.333Z"
                      fill="url(#center-fill)"
                    />
                  </g>
                </svg>

                {/* Percentage Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col items-center"
                  >
                    <motion.span className="text-xl md:text-2xl font-black text-[#0069D1] tracking-tighter drop-shadow-sm">
                      {rounded}
                    </motion.span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HIDDEN MAIN CONTENT */}
      <div
        className={
          isLoading && isHome ? "invisible opacity-0 h-0 overflow-hidden" : ""
        }
      >
        {children}
      </div>
    </>
  );
}

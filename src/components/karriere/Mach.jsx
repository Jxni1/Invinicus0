import Image from "next/image";
import tag7 from "../../../public/images/tag7.svg";
import group10 from "../../../public/images/group10.svg";

const Mach = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-end justify-between py-10 lg:py-20 px-4 lg:px-0 gap-10 lg:gap-0">
      <div className="flex flex-col items-start justify-between gap-6 lg:gap-10 w-full lg:w-1/2">
        <Image src={tag7} alt="tag7" className="w-auto" />
        <h2 className="text-[#011222] text-[32px] md:text-[48px] lg:text-[64px] text-left leading-tight">
          Mach Invinicus Zu Deinem <br className="hidden lg:block" /> Nächsten
          Arbeitgeber.
        </h2>
        <p className="text-[#5B6B7A] text-[15px] lg:text-[18px] leading-relaxed">
          Du willst echten Mehrwert schaffen? Als Berater/in bei Invinicus
          gestaltest du maßgeschneiderte Strategien, die die Ziele unserer
          Kunden optimal unterstützen. Wir bieten eine strukturierte
          Einarbeitung, laufende Weiterbildung und eine Kultur der offenen
          Kommunikation. Deine Beratungen sind kostenlos und unverbindlich –
          persönlich oder online. Bewirb dich und werde Teil eines dynamischen
          Teams, das Einfachheit, Kosteneffizienz und Schnelligkeit in den
          Mittelpunkt stellt.
        </p>
        <div className="flex flex-col items-start justify-between gap-5 w-full">
          {/* Item 1 */}
          <div className="flex flex-row items-start justify-start gap-4 lg:gap-5 group cursor-pointer">
            <svg
              className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] flex-shrink-0"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="30"
                cy="30"
                r="30"
                className="fill-[#07133B] transition-colors duration-300 group-hover:fill-[#6FB9FE]"
              />
              <path
                d="M39.7836 42.0684H21.6503V27.3457H19.8496V43.8691H41.5843V27.3457H39.7836V42.0684Z"
                fill="white"
              />
              <path
                d="M30.764 14.9751L25.5887 18.5729V15.184H19.8444V22.5633L15.375 25.6714L16.4014 27.1516L30.7207 17.1972L44.2946 27.3605L45.375 25.9199L30.764 14.9751ZM21.6487 16.9847H23.7916V19.8226L21.6487 21.31V16.9847Z"
                fill="white"
              />
              <path
                d="M25.1504 32.9173C25.1504 35.3302 26.5009 37.7 28.5069 38.82L30.711 40.0481L32.9151 38.82C34.9247 37.7 36.2716 35.3302 36.2716 32.9173V28.3939L30.711 26.4995L25.1504 28.3939V32.9173ZM29.4181 31.6028L30.5057 32.82L32.2632 30.8537L33.4337 31.8981L30.5057 35.1754L28.2476 32.6472L29.4181 31.6028Z"
                fill="white"
              />
              <path
                d="M32.8495 21.4214H29.1328V23.2221H32.8495V21.4214Z"
                fill="white"
              />
            </svg>
            <div className="flex flex-col items-start justify-start flex-1">
              <h2 className="text-[#5B6B7A] text-[20px] lg:text-[24px] transition-colors duration-300 group-hover:text-[#6FB9FE]">
                Berate Kunden online
              </h2>
              <p className="text-[#5B6B7A] text-[14px] lg:text-[18px] leading-relaxed">
                Arbeite mit Privatkunden über Videoanrufe und digitale Werkzeuge
                anstelle von klassischer Papierarbeit und persönlichen Meetings.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-row items-start justify-start gap-4 lg:gap-5 group cursor-pointer">
            <svg
              className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] flex-shrink-0"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="30"
                cy="30"
                r="30"
                className="fill-[#07133B] transition-colors duration-300 group-hover:fill-[#6FB9FE]"
              />
              <g clipPath="url(#clip0_631_419)">
                <path
                  d="M44.8374 29.2135C44.2797 25.7233 42.4896 22.5249 39.797 20.2075C37.2972 18.056 34.1585 16.7931 30.8777 16.6013V15H29.1222V16.6013C25.8414 16.7931 22.7025 18.056 20.2029 20.2075C17.5104 22.5249 15.7203 25.7233 15.1625 29.2135L15 30.2298H17.0002L17.2504 29.7752C17.9189 28.5608 19.1936 27.8064 20.5772 27.8064C21.961 27.8064 23.2356 28.5608 23.9042 29.7752L24.1543 30.2298H26.423L26.6732 29.7752C27.3417 28.5608 28.6164 27.8064 30 27.8064C31.3836 27.8064 32.6584 28.5608 33.3268 29.7752L33.5769 30.2298H35.8458L36.096 29.7752C36.7643 28.5608 38.0392 27.8064 39.4228 27.8064C40.8064 27.8064 42.0812 28.5608 42.7496 29.7752L42.9997 30.2298H44.9999L44.8374 29.2135ZM20.5772 26.0509C19.4888 26.0509 18.4467 26.3699 17.5637 26.941C19.1762 22.5888 22.9504 19.4092 27.5276 18.5575C26.2738 20.0967 25.3658 22.1203 24.8595 24.5368C24.6142 25.7075 24.5002 26.7842 24.4491 27.626C23.427 26.6308 22.0443 26.0509 20.5772 26.0509ZM30 26.0509C28.5745 26.0509 27.2287 26.5983 26.2156 27.5425C26.3834 25.1493 27.1023 20.9033 29.9997 18.5474C32.888 20.8978 33.6108 25.1447 33.7815 27.54C32.769 26.5974 31.4241 26.0509 30 26.0509ZM39.4228 26.0509C37.9557 26.0509 36.573 26.6308 35.5508 27.626C35.4998 26.7842 35.3858 25.7075 35.1406 24.5368C34.6341 22.1203 33.7264 20.0967 32.4723 18.5575C37.0497 19.4092 40.8238 22.5888 42.4362 26.941C41.5532 26.3699 40.5111 26.0509 39.4228 26.0509Z"
                  fill="white"
                />
                <path
                  d="M32.8753 32.5933H27.1249V35.9017H23.8164V41.6519H27.1249V44.9606H32.8753V41.6519H36.1838V35.9017H32.8753V32.5933ZM34.4283 37.6573V39.8964H31.1198V43.2049H28.8804V39.8964H25.5719V37.6573H28.8804V34.3488H31.1198V37.6573H34.4283Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_631_419">
                  <rect
                    width="30"
                    height="30"
                    fill="white"
                    transform="translate(15 15)"
                  />
                </clipPath>
              </defs>
            </svg>

            <div className="flex flex-col items-start justify-start flex-1">
              <h2 className="text-[#5B6B7A] text-[20px] lg:text-[24px] transition-colors duration-300 group-hover:text-[#6FB9FE]">
                Arbeite mit modernen Produkten
              </h2>
              <p className="text-[#5B6B7A] text-[14px] lg:text-[18px] leading-relaxed">
                Von Versicherungslösungen über Anlageprodukte bis hin zu
                digitalen Vermögenswerten – du bietest den Kunden transparente,
                zukunftsorientierte Konzepte an.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex flex-row items-start justify-start gap-4 lg:gap-5 group cursor-pointer">
            <svg
              className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] flex-shrink-0"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="30"
                cy="30"
                r="30"
                className="fill-[#07133B] transition-colors duration-300 group-hover:fill-[#6FB9FE]"
              />
              <g clipPath="url(#clip0_631_425)">
                <path
                  d="M40.3951 24.8923C41.4551 24.0088 42.1301 22.6799 42.1301 21.1956C42.1301 18.5426 39.9722 16.384 37.319 16.384C34.6658 16.384 32.5072 18.5426 32.5072 21.1956C32.5072 22.6799 33.1828 24.0088 34.2421 24.8923C33.7887 25.0909 33.3579 25.3324 32.9556 25.6119C32.4335 24.5437 31.336 23.806 30.0691 23.806C29.144 23.806 28.309 24.1992 27.7231 24.8273C27.3013 24.5467 26.8517 24.304 26.38 24.1049C27.5544 23.1679 28.3079 21.7255 28.3079 20.11C28.3079 17.2923 26.0149 15 23.1979 15C20.3801 15 18.0874 17.2923 18.0874 20.11C18.0874 21.7255 18.8409 23.1679 20.015 24.1049C17.0707 25.35 15 28.2674 15 31.6599V36.3744H29.5335C29.6958 37.9102 30.1964 39.3949 31.0043 40.722C32.0045 42.3656 33.4364 43.7009 35.1457 44.5846L35.9367 44.9936L36.7278 44.5846C38.4364 43.7009 39.8685 42.3656 40.8685 40.722C41.6766 39.3949 42.177 37.9102 42.3399 36.3744H45V31.9306C45 28.7883 43.1033 26.0806 40.3951 24.8923ZM34.265 21.1956C34.265 19.5117 35.6351 18.1419 37.319 18.1419C39.0024 18.1419 40.3722 19.5117 40.3722 21.1956C40.3722 22.879 39.0024 24.2491 37.319 24.2491C35.6351 24.2491 34.265 22.879 34.265 21.1956ZM40.64 35.27C40.64 35.6426 40.6167 36.0111 40.5702 36.3744C40.2152 39.1981 38.5078 41.6789 35.9367 43.0142C33.365 41.6789 31.6576 39.1981 31.3026 36.3744C31.2657 36.0851 31.2433 35.7914 31.2357 35.4955C31.2339 35.4206 31.2328 35.3455 31.2328 35.27V34.2691C31.2872 34.2421 31.3417 34.2146 31.395 34.186C32.0966 33.8139 32.7017 33.2925 33.1712 32.6608C33.3405 32.4335 33.4916 32.192 33.6241 31.9382H38.2489C38.7767 32.9526 39.6135 33.7681 40.64 34.2691V35.27ZM26.9144 34.6165V33.2162C26.9144 31.7116 28.033 30.4623 29.4827 30.2573C29.5958 30.2408 29.7105 30.2314 29.8272 30.2284C29.8524 30.228 29.8782 30.2273 29.9039 30.2273H30.2344C30.6107 30.2273 30.9702 30.2971 31.3026 30.4248C31.3909 30.4582 31.4772 30.4962 31.561 30.5386C31.7766 30.6452 31.9769 30.7775 32.1593 30.9315C31.9734 31.347 31.7132 31.7184 31.395 32.0302C31.0231 32.3952 30.5706 32.6788 30.065 32.8553L29.6372 33.0041L29.4749 33.0604V34.6165H26.9144ZM29.079 25.9547C29.3385 25.7121 29.6864 25.5638 30.0691 25.5638C30.8315 25.5638 31.4584 26.1539 31.5163 26.9021C31.52 26.9403 31.5216 26.9783 31.5216 27.017C31.5216 27.597 31.1801 28.098 30.6878 28.3308C30.6258 28.3605 30.5612 28.3857 30.4951 28.4056C30.3603 28.4473 30.2174 28.4695 30.0691 28.4695C29.2676 28.4695 28.616 27.8181 28.616 27.017C28.616 26.5981 28.7943 26.2196 29.079 25.9547ZM19.8452 20.11C19.8452 18.262 21.3492 16.7578 23.1979 16.7578C25.0459 16.7578 26.5501 18.262 26.5501 20.11C26.5501 21.9587 25.0459 23.4622 23.1979 23.4622C21.3492 23.4622 19.8452 21.9587 19.8452 20.11ZM16.7578 34.6165V31.6599C16.7578 28.1092 19.6465 25.22 23.1979 25.22C24.5824 25.22 25.8662 25.6595 26.9167 26.4059C26.8781 26.6039 26.8581 26.8078 26.8581 27.017C26.8581 27.7956 27.1365 28.5104 27.5999 29.0666C26.1433 29.8787 25.1566 31.4344 25.1566 33.2162V34.6165H16.7578ZM43.2422 34.6165H42.3978V33.0604L41.8085 32.8553C40.8071 32.506 40.0154 31.7372 39.6375 30.7459L39.4212 30.1804H33.8807C33.5069 29.7318 33.051 29.3532 32.5376 29.0666C32.8693 28.6681 33.1062 28.1889 33.214 27.6633C34.2796 26.638 35.7269 26.0069 37.319 26.0069C40.5849 26.0069 43.2422 28.664 43.2422 31.9306V34.6165Z"
                  fill="white"
                />
                <path
                  d="M38.2676 34.3066L37.947 34.6165L36.1276 36.3744L35.5453 36.9374L34.9488 36.3744L34.0951 35.5682L33.3338 36.3744L32.8887 36.8461L35.5593 39.3686L38.6572 36.3744L39.4892 35.5705L38.567 34.6165L38.2676 34.3066Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_631_425">
                  <rect
                    width="30"
                    height="30"
                    fill="white"
                    transform="translate(15 15)"
                  />
                </clipPath>
              </defs>
            </svg>

            <div className="flex flex-col items-start justify-start flex-1">
              <h2 className="text-[#5B6B7A] text-[20px] lg:text-[24px] transition-colors duration-300 group-hover:text-[#6FB9FE]">
                Flexibilität
              </h2>
              <p className="text-[#5B6B7A] text-[14px] lg:text-[18px] leading-relaxed">
                Die Möglichkeit, von zu Hause oder von unserem Büro aus zu
                arbeiten.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <Image
          src={group10}
          alt="group"
          className="w-full max-w-md lg:max-w-none lg:w-[70%]"
        />
      </div>
    </div>
  );
};

export default Mach;

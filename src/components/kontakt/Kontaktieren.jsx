import React from "react";
import Image from "next/image";
import frame71 from "../../../public/images/frame71.svg";

const Kontaktieren = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-6 md:gap-8 lg:gap-10 bg-[#F8FCFF] container mx-auto py-12 md:py-20 lg:py-30 px-4 md:px-6">
      <div className="">
        <Image src={frame71} alt="frame71" className="w-full h-auto" />
      </div>

      <div className="w-full">
        <h2 className="text-[#011222] text-3xl md:text-4xl lg:text-5xl xl:text-[64px] text-center font-medium px-4">
          Kontaktieren Sie uns
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-stretch justify-between w-full gap-6 md:gap-8 lg:gap-12 xl:gap-[70px] md:px-8 lg:px-12 xl:px-20">
        {/* Location Card */}
        <div className="group flex flex-col items-center justify-around py-6 md:py-4 bg-white w-full min-h-[180px] md:h-[200px] rounded-tr-[40px] rounded-bl-[40px] hover:bg-[#07133B] hover:text-white transition-colors duration-300 shadow-sm">
          <svg
            width="60"
            height="60"
            className="flex-shrink-0"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="30"
              cy="30"
              r="30"
              className="fill-[#07133B] group-hover:fill-[#6FB9FE] transition-colors duration-300"
            />
            <path
              d="M35.655 37.7251C33.7275 40.0951 31.9425 41.7751 31.5225 42.1576C31.1025 42.5401 30.5625 42.7501 30 42.7501C29.4375 42.7501 28.8975 42.5401 28.485 42.1576C28.065 41.7751 26.28 40.0951 24.345 37.7251C22.8 38.3551 21.75 39.2926 21.75 40.5001C21.75 42.9376 26.0025 44.2501 30 44.2501C33.9975 44.2501 38.25 42.9376 38.25 40.5001C38.25 39.2926 37.2 38.3551 35.655 37.7251Z"
              className="fill-white transition-colors duration-300"
            />
            <path
              d="M35.25 25.5C35.25 22.6055 32.8945 20.25 30 20.25C27.1055 20.25 24.75 22.6055 24.75 25.5C24.75 28.3945 27.1055 30.75 30 30.75C32.8945 30.75 35.25 28.3945 35.25 25.5ZM27.2197 28.2803C26.9268 27.9873 26.9268 27.5127 27.2197 27.2197L28.9395 25.5L27.2197 23.7803C26.9268 23.4873 26.9268 23.0127 27.2197 22.7197C27.5127 22.4268 27.9873 22.4268 28.2803 22.7197L30 24.4395L31.7197 22.7197C32.0127 22.4268 32.4873 22.4268 32.7803 22.7197C33.0732 23.0127 33.0732 23.4873 32.7803 23.7803L31.0605 25.5L32.7803 27.2197C33.0732 27.5126 33.0732 27.9872 32.7804 28.2801C32.5049 28.5557 32.0126 28.5731 31.7197 28.2803L30 26.5605C30 26.5605 28.2835 28.277 28.2803 28.2803C28.0052 28.5553 27.5116 28.5722 27.2197 28.2803Z"
              className="fill-white transition-colors duration-300"
            />
            <path
              d="M29.4932 41.053C29.7788 41.3138 30.2216 41.3135 30.5068 41.053C30.884 40.7065 39.75 32.4998 39.75 25.5C39.75 20.124 35.376 15.75 30 15.75C24.624 15.75 20.25 20.124 20.25 25.5C20.25 32.4998 29.116 40.7065 29.4932 41.053ZM23.25 25.5C23.25 21.7778 26.2778 18.75 30 18.75C33.7222 18.75 36.75 21.7778 36.75 25.5C36.75 29.2222 33.7222 32.25 30 32.25C26.2778 32.25 23.25 29.2222 23.25 25.5Z"
              className="fill-white transition-colors duration-300"
            />
          </svg>
          <a href="https://www.google.com/maps/place/Schachenfeldstrasse+19,+8967+Widen,+Switzerland/@47.366008,8.364311,347m/data=!3m1!1e3!4m6!3m5!1s0x47900e115fdff74d:0x9ff0a67bfac2eefa!8m2!3d47.3661988!4d8.3640914!16s%2Fg%2F11m_gkj9vs?hl=en-US&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D">
            <div className="flex flex-col items-center justify-between gap-2">
              <h1 className="text-[#7A92A8] text-base md:text-lg font-semibold text-center group-hover:text-white transition-colors duration-300">
                Standort
              </h1>

              <h1 className="text-[#5B6B7A] hover:underline text-sm md:text-base lg:text-[18px] text-center group-hover:text-white transition-colors duration-300 px-4">
                Schachenfeldstrasse 19, <br />
                8967 Widen
              </h1>
            </div>
          </a>
        </div>

        {/* Phone Card */}
        <div className="group flex flex-col items-center justify-around py-6 md:py-4 bg-white w-full min-h-[180px] md:h-[200px] rounded-tr-[40px] rounded-bl-[40px] hover:bg-[#07133B] hover:text-white transition-colors duration-300 shadow-sm">
          <svg
            width="60"
            height="60"
            className="flex-shrink-0"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="30"
              cy="30"
              r="30"
              className="fill-[#07133B] group-hover:fill-[#6FB9FE] transition-colors duration-300"
            />
            <path
              d="M28.1647 23.9569C28.3748 23.6644 28.3447 23.2519 28.0822 22.9894L23.3123 18.2194C23.0197 17.9269 22.5397 17.9269 22.2472 18.2194L20.6572 19.8094L26.7622 25.9144L28.1647 23.9569Z"
              className="fill-white transition-colors duration-300"
            />
            <path
              d="M33.0397 35.0495C30.9397 35.7245 28.5847 35.162 27.0247 33.602C25.4572 32.0345 24.8947 29.6795 25.5772 27.5795L25.8772 27.1595L19.5922 20.8745L18.5347 21.932C18.4373 22.0295 18.3697 22.157 18.3398 22.292C18.2498 22.6595 16.3147 31.3745 22.7797 37.847C23.0122 38.072 27.7447 42.707 34.7048 42.707C35.8597 42.707 37.0672 42.5795 38.3272 42.287C38.4622 42.257 38.5898 42.182 38.6873 42.0845L39.7447 41.027L33.4672 34.7495L33.0397 35.0495Z"
              className="fill-white transition-colors duration-300"
            />
            <path
              d="M37.6301 32.537C37.3676 32.282 36.9625 32.2445 36.6626 32.462L34.7051 33.857L40.81 39.962L42.4 38.372C42.6925 38.0795 42.6925 37.607 42.4 37.3145L37.6301 32.537Z"
              className="fill-white transition-colors duration-300"
            />
          </svg>
          <a href="tel:+41784019290">
            <div className="flex flex-col items-center justify-between gap-2">
              <h1 className="text-[#7A92A8] text-base md:text-lg font-semibold text-center group-hover:text-white transition-colors duration-300">
                Telefonnummer
              </h1>
              <h1 className="text-[#5B6B7A] hover:underline text-sm md:text-base lg:text-[18px] text-center group-hover:text-white transition-colors duration-300 px-4">
                +41 78 401 92 90
              </h1>
            </div>
          </a>
        </div>

        {/* Email Card */}
        <div className="group flex flex-col items-center justify-around py-6 md:py-4 bg-white w-full min-h-[180px] md:h-[200px] rounded-tr-[40px] rounded-bl-[40px] hover:bg-[#07133B] hover:text-white transition-colors duration-300 shadow-sm">
          <svg
            width="60"
            height="60"
            className="flex-shrink-0"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="30"
              cy="30"
              r="30"
              className="fill-[#07133B] group-hover:fill-[#6FB9FE] transition-colors duration-300"
            />
            <path
              d="M15.75 28.9014V43.0986L26.398 36L15.75 28.9014Z"
              className="fill-white transition-colors duration-300"
            />
            <path
              d="M33.6016 36L44.2495 43.0987V28.9014L33.6016 36Z"
              className="fill-white transition-colors duration-300"
            />
            <path
              d="M20.2496 26.0127L16.5723 27.6471L20.2496 30.0986V26.0127Z"
              className="fill-white transition-colors duration-300"
            />
            <path
              d="M39.75 26.0127V30.0986L43.4273 27.6471L39.75 26.0127Z"
              className="fill-white transition-colors duration-300"
            />
            <path
              d="M30.4155 38.124C30.1749 38.2845 29.8372 38.2929 29.5835 38.124L27.7495 36.9014L16.7266 44.25H43.2723L32.2495 36.9014L30.4155 38.124ZM26.9995 42C26.5853 42 26.2495 41.6642 26.2495 41.25C26.2495 40.8358 26.5853 40.5 26.9995 40.5C27.4137 40.5 27.7495 40.8358 27.7495 41.25C27.7495 41.6642 27.4137 42 26.9995 42ZM29.9995 42C29.5853 42 29.2495 41.6642 29.2495 41.25C29.2495 40.8358 29.5853 40.5 29.9995 40.5C30.4137 40.5 30.7495 40.8358 30.7495 41.25C30.7495 41.6642 30.4137 42 29.9995 42ZM32.9995 40.5C33.4137 40.5 33.7495 40.8358 33.7495 41.25C33.7495 41.6642 33.4137 42 32.9995 42C32.5853 42 32.2495 41.6642 32.2495 41.25C32.2495 40.8358 32.5853 40.5 32.9995 40.5Z"
              className="fill-white transition-colors duration-300"
            />
            <path
              d="M28.1643 35.3749L30 36.5988L31.8333 35.3766C31.8356 35.375 31.8378 35.3735 31.8402 35.372L38.25 31.0987V16.5C38.25 16.0858 37.9142 15.75 37.5 15.75H22.5C22.0858 15.75 21.75 16.0858 21.75 16.5V31.0987L28.1611 35.3728L28.1643 35.3749ZM24.75 19.5H35.25C35.6645 19.5 36 19.8358 36 20.25C36 20.6642 35.6645 21 35.25 21H24.75C24.3358 21 24 20.6642 24 20.25C24 19.8358 24.3358 19.5 24.75 19.5ZM24.75 22.5H35.25C35.6645 22.5 36 22.8358 36 23.25C36 23.6642 35.6645 24 35.25 24H24.75C24.3358 24 24 23.6642 24 23.25C24 22.8358 24.3358 22.5 24.75 22.5ZM24.75 25.5H35.25C35.6645 25.5 36 25.8358 36 26.25C36 26.6642 35.6645 27 35.25 27H24.75C24.3358 27 24 26.6642 24 26.25C24 25.8358 24.3358 25.5 24.75 25.5ZM24 29.25C24 28.8358 24.3358 28.5 24.75 28.5H35.25C35.6645 28.5 36 28.8358 36 29.25C36 29.6642 35.6645 30 35.25 30H24.75C24.3358 30 24 29.6642 24 29.25Z"
              className="fill-white transition-colors duration-300"
            />
          </svg>
          <a href="mailto:info@invinicus.ch">
            <div className="flex flex-col items-center justify-between gap-2">
              <h1 className="text-[#7A92A8] text-base md:text-lg font-semibold text-center group-hover:text-white transition-colors duration-300">
                E-Mail
              </h1>
              <h1 className="text-[#5B6B7A] hover:underline text-sm md:text-base lg:text-[18px] text-center group-hover:text-white transition-colors duration-300 px-4 break-all">
                info@invinicus.ch
              </h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Kontaktieren;

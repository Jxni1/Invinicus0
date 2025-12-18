import React from "react";
import Image from "next/image";
import mask from "../../../public/images/Mask.png";
import arrowDown from "../../../public/images/arrowDown.svg";

const Page = () => {
  return (
    <div className="w-full">
      <div className="relative w-full  mb-16">
        <Image
          src={mask}
          alt="Mask"
          className="object-cover h-[300px] md:h-[500px] lg:h-[400px] xl:h-auto rounded-none lg:rounded-b-[90%]"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-5 z-10 text-white top-30">
          <h1 className="text-2xl md:text-5xl font-bold ">Impressum</h1>
          <Image src={arrowDown} alt="Arrow Down" width={24} height={24} />
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-3xl space-y-8">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl  text-gray-900">
            Impressum von <span className="font-bold">Invinicus GmbH</span>
          </h1>

          {/* Company Name */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Invinicus GmbH
            </h2>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">Adresse</h3>
            <a
              href="https://www.google.com/maps/place/Schachenfeldstrasse+19/@47.3661697,8.3641021,694m/data=!3m1!1e3!4m7!3m6!1s0x47900e115fdff74d:0x9ff0a67bfac2eefa!4b1!8m2!3d47.3661988!4d8.3640914!16s%2Fg%2F11m_gkj9vs?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-600 hover:text-[#0069D1] transition-colors"
            >
              Schachenfeldstrasse 19
              <br />
              8967 Widen
            </a>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">Kontakt</h3>
            <div className="space-y-2">
              <a
                href="tel:+41784019290"
                className="block text-lg text-gray-600 hover:text-[#0069D1] transition-colors"
              >
                Telefon: +41 78 401 92 90
              </a>
              <a
                href="mailto:info@invinicus.com"
                className="block text-lg text-gray-600 hover:text-[#0069D1] transition-colors"
              >
                E-Mail: info@invinicus.com
              </a>
              <a
                href="https://www.invinicus.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg text-gray-600 hover:text-[#0069D1] transition-colors"
              >
                Web: www.invinicus.ch
              </a>
            </div>
          </div>

          {/* Representative */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              Vertreten durch
            </h3>
            <p className="text-lg text-gray-600">Aymen Zoulafi</p>
          </div>

          {/* Commercial Register */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              Handelsregister
            </h3>
            <p className="text-lg text-gray-600">
              Kanton Aargau
              <br />
              CHE-156.366.784
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

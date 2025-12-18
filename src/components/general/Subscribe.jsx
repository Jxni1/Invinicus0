import Image from "next/image";
import lule from "../../../public/images/lule.png";

const Subscribe = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div className="w-full h-auto min-h-[500px] relative">
        <Image src={lule} alt="flower" className="object-cover" fill priority />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-[#121921] text-4xl md:text-[64px] font-medium leading-tight mb-6">
          Jetzt Versicherung abschliessen
        </h2>

        <p className="text-[#121921] text-lg md:text-xl mb-10 max-w-2xl opacity-80">
          Invinicus-Unternehmen arbeiten daran, mehr Sicherheit und{" "}
          <br className="hidden md:block" />
          Frieden zu spüren, indem sie Versicherungsschutz haben.
        </p>

        {/* Input Group */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-[500px]">
          <input
            type="email"
            placeholder="Geben Sie Ihre E-Mail ein..."
            className="w-full px-6 py-4 rounded-full bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-800 placeholder-gray-400 shadow-sm"
          />
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0069D1] text-white font-medium hover:bg-gray-800 transition-colors shadow-lg whitespace-nowrap">
            Gratis Angebot
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

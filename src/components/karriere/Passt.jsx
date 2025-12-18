import Image from "next/image";
import tag8 from "../../../public/images/tag8.svg";
import vector from "../../../public/images/vector.svg";
import photo11 from "../../../public/images/photo11.png";
import photo22 from "../../../public/images/photo22.png";
import photo33 from "../../../public/images/photo33.png";
import photo44 from "../../../public/images/photo44.png";
import icon1000 from "../../../public/images/icon1000.svg";
import icon1001 from "../../../public/images/icon1001.svg";
import icon2000 from "../../../public/images/icon2000.svg";
import icon2001 from "../../../public/images/icon2001.svg";
import icon3000 from "../../../public/images/icon3000.svg";
import icon3001 from "../../../public/images/icon3001.svg";
import icon4000 from "../../../public/images/icon4000.svg";
import icon4001 from "../../../public/images/icon4001.svg";
import Link from "next/link";
import vector2 from "../../../public/images/Vector2.svg";

const cardData = [
  {
    id: 1,
    image: photo11,
    icon: icon1000,
    icon2: icon1001,
    title: "Kundenberater mit VBV - Zertifizierung (100%)",
    description:
      "Für erfahrene Berater, die in einem digitalen Umfeld arbeiten, langfristige Kundenbeziehungen aufbauen und ihr eigenes Portfolio mit starker Markenunterstützung erweitern möchten.",
  },
  {
    id: 2,
    image: photo22,
    icon: icon2000,
    icon2: icon2001,
    title: "Kundenberater mit VBV - Zertifizierung (100%)",
    description:
      "Für erfahrene Berater, die in einem digitalen Umfeld arbeiten, langfristige Kundenbeziehungen aufbauen und ihr eigenes Portfolio mit starker Markenunterstützung erweitern möchten.",
  },
  {
    id: 3,
    image: photo33,
    icon: icon3000,
    icon2: icon3001,

    title: "Kundenberater mit VBV - Zertifizierung (100%)",
    description:
      "Für erfahrene Berater, die in einem digitalen Umfeld arbeiten, langfristige Kundenbeziehungen aufbauen und ihr eigenes Portfolio mit starker Markenunterstützung erweitern möchten.",
  },
  {
    id: 4,
    image: photo44,
    icon: icon4000,
    icon2: icon4001,
    title: "Kundenberater mit VBV - Zertifizierung (100%)",
    description:
      "Für erfahrene Berater, die in einem digitalen Umfeld arbeiten, langfristige Kundenbeziehungen aufbauen und ihr eigenes Portfolio mit starker Markenunterstützung erweitern möchten.",
  },
];

const Passt = () => {
  return (
    <div className="container mx-auto py-20 px-3 md:px-0">
      <div className="flex flex-col items-center justify-between gap-5 mb-10">
        <Image src={tag8} alt="tag8" />
        <h2 className="text-[#011222] text-[40px] md:text-[64px] text-center ">
          Was passt zu dir?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="group bg-white hover:bg-[#07133B] transition-colors duration-300 rounded-[40px] flex flex-col h-full overflow-hidden"
          >
            <div className="w-full relative">
              <Image
                src={card.image}
                alt={card.title}
                className="w-full h-120 object-cover"
              />
            </div>

            <div className="p-8 flex flex-col flex-1 items-start justify-between gap-10 relative">
              <div className="absolute -top-5 right-10">
                <Image
                  src={card.icon}
                  alt="image"
                  className="block group-hover:hidden transition-all duration-300"
                />

                <Image
                  src={card.icon2}
                  alt="image"
                  className="hidden group-hover:block transition-all duration-300"
                />
              </div>

              <div>
                <h1 className="text-[#5B6B7A] group-hover:text-[#33E47A] font-bold text-xl mb-2 transition-colors duration-300">
                  {card.title}
                </h1>
                <p className="text-[#5B6B7A] group-hover:text-white transition-colors duration-300">
                  {card.description}
                </p>
              </div>

              <div className="flex flex-row items-center justify-start gap-2 mt-4">
                <Link href="/bewerbungsformular">
                  <button className="text-[#B4C4D2] uppercase font-medium hover:text-[#5B6B7A] group-hover:text-[#33E47A] transition-colors duration-300">
                    Jetzt bewerben
                  </button>
                </Link>
                <Image
                  src={vector}
                  alt="arrow icon"
                  className="block group-hover:hidden"
                />
                <Image
                  src={vector2}
                  alt="arrow icon"
                  className="hidden group-hover:block"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Passt;

import scrollGif from "public/image/scroll.gif";
import Image from "next/image";
import Cards from "./Cards";

const ListCards = ({ data }) => {
  return (
    <div
      className="bg-color2 mt-20 relative flex flex-col items-center justify-center shadow-xl z-10 h-auto w-screen"
    >
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 z-30 md:hidden">
        <Image src={scrollGif} width={80} alt="scroll" />
      </div>
      <div className="absolute w-96 h-96 bg-gradient-to-tr from-color6 to-color7 rotate-45 -z-10 -top-44 -right-48 hidden sm:block"></div>
      <div className="w-full flex flex-col items-center justify-between bg-white">
        <h1 className="pt-6 pb-6 text-2xl md:text-3xl font-thin italic p-4">{data.text}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-5">
          {data.teams &&
            data.teams.map((items, index) => (
              <Cards key={index} data={items} />
            ))}
          {data.league &&
            data.league.map((items, index) => (
              <Cards key={index} data={items} />
            ))}
        </div>
      </div>
      <div className="absolute w-96 h-96 bg-gradient-to-tr from-color6 to-color7 rotate-45 -z-10 -bottom-44 -left-48 hidden sm:block"></div>
    </div>
  );
};

export default ListCards;

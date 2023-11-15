import scrollGif from "public/image/scroll.gif"
import Image from "next/image";
import Cards from "./Cards";
const ListCards = ({data}) => {
        
    return (
        <div className=" bg-color2  mt-20 relative flex items-center justify-center flex-col shadow-xl w-screen">
            <h1 className="pt-6 pb-6 text-white text-4xl font-thin italic">{data.text}</h1>
            <div className=" absolute -top-20 left-1/2 -translate-x-1/2 z-30">
                <Image src={scrollGif} width={80} alt="scroll"/>
            </div>
            <div className=" absolute w-96 h-96 bg-gradient-to-tr from-color1 to-zinc-700 rotate-45 -z-10 -top-44 -right-48"></div>
            <div className="w-full flex items-center justify-evenly h-200">
                { 
                data.teams &&
                data.teams.map((items , index) => <Cards key={index} data={items}/>) 
                }
                {
                data.league &&
                data.league.map((items , index) => <Cards key={index} data={items}/>)
                }
            </div> 
            <div className=" absolute w-96 h-96 bg-gradient-to-tr from-color1 to-zinc-700 rotate-45 -z-10 -bottom-44 -left-48"></div>
        </div>
    )
};

export default ListCards;
import scrollGif from "public/image/scroll.gif"
import Image from "next/image";
import Cards from "./Cards";
const ListCards = ({data}) => {
    if(data.type === "league"){ 
        const England = data.league.filter(item => item.league.name === "Premier League" && item.country.name === "England"); 
        const Spain = data.league.filter(item => item.league.name === "La Liga" && item.country.name === "Spain"); 
        const Italy = data.league.filter(item => item.league.name === "Serie A" && item.country.name === "Italy");        
        return (
        <div className=" bg-color2  mt-20 relative flex items-center justify-center flex-col shadow-xl w-screen">
            <h1 className="pt-6 pb-6 text-white text-4xl font-thin italic">{data.text}</h1>
            <div className=" absolute -top-20 left-1/2 -translate-x-1/2 z-30">
                <Image src={scrollGif} width={80} alt="scroll"/>
            </div>
            <div className=" absolute w-96 h-96 bg-gradient-to-tr from-color1 to-zinc-700 rotate-45 -z-10 -top-44 -right-48"></div>
            <div className="w-full flex items-center justify-evenly h-200">
                <Cards league={England}></Cards>
                <Cards league={Spain}></Cards>
                <Cards league={Italy}></Cards>
            </div>
            <div className=" absolute w-96 h-96 bg-gradient-to-tr from-color1 to-zinc-700 rotate-45 -z-10 -bottom-44 -left-48"></div>
        </div>
    );}else{
        const Barca = data.teams[0][0];
        const ManchesterUnited = data.teams[1][0];
        const RealMadrid = data.teams[2][0];
        console.log(Barca , ManchesterUnited , RealMadrid);
        return(
            <>
                <h1>i miss my self too</h1>
            </>
        )
    }
};

export default ListCards;
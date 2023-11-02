import scrollGif from "public/image/scroll.gif"
import Image from "next/image";
import Cards from "./Cards";
const ListCards = ({league , text}) => {
    console.log(league);
    return (
        <div className=" bg-color2 h-96 mt-20 relative">
            <h1 calssName=""></h1>
            <div className=" absolute -top-20 left-1/2 -translate-x-1/2 z-30">
                <Image src={scrollGif} width={80} alt="scroll"/>
            </div>
            <div className=" absolute w-56 h-56 bg-color1 rotate-45 -z-10 -top-28 -right-32"></div>

            <Cards league={league}></Cards>
            <div></div>
            <div></div>
        </div>
    );
};

export default ListCards;
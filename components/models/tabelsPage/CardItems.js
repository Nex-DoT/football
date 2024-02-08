import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const CardItems = ({data}) => {
    return (
        <div className=" w-96 bg-white rounded-md shadow-md mb-3 flex items-center justify-around mt-3 ">
            <div className="flex items-center justify-start m-5">
                <Image className=" aspect-square object-contain mr-2" src={data.league.logo} height={60} width={60}/>
                <div className=" w-32">
                    <h2 className=" font-Anton">{data.league.name}</h2>
                    <p className="text-sm text-gray-400 font-Roberto">{data.country.name}</p>
                </div>
            </div>
            <div  className="flex items-center justify-around m-5 flex-col">
                <button className="text-whitemt-5 bg-gradient-to-tr from-color6 to-color7 p-2 w-20 rounded-md shadow-md font-Rubic z-10 text-xs" size="sm" color="success"><Link href={`/league/${data.league.id}`}>Tabel</Link></button>
                <button className="mt-5 bg-gradient-to-tr from-color6 to-color7 p-2 w-20 rounded-md shadow-md font-Rubic z-10 text-xs" size="sm" color="success"><Link href={`/team/${data.league.id}`}>Teams</Link></button>
                <button className="mt-5 bg-gradient-to-tr from-color6 to-color7 p-2 w-20 rounded-md shadow-md font-Rubic z-10 text-xs" size="sm" color="success"><Link href={`/games/${data.league.id}`}>Games</Link></button>
            </div>
        </div>
    );
};

export default CardItems;
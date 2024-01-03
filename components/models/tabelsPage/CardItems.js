import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const CardItems = ({data}) => {
    return (
        <div className=" w-80 bg-color1 bg-opacity-5 rounded-md shadow-md mb-3 flex items-center justify-around mt-3 flex-col ">
            <div className="flex items-center justify-start m-5">
                <Image className=" aspect-square object-contain mr-2" src={data.league.logo} height={60} width={60}/>
                <div className=" w-32">
                    <p>{data.league.name}</p>
                    <p className="text-sm font-thin">{data.country.name}</p>
                </div>
            </div>
            <div  className="w-full flex items-center justify-around m-5">
                <Button className="text-white" size="sm" color="success"><Link href={`/league/${data.league.id}`}>Tabel</Link></Button>
                <Button className="text-white" size="sm" color="success"><Link href={`/team/${data.league.id}`}>Teams</Link></Button>
                <Button className="text-white" size="sm" color="success"><Link href={`/games/${data.league.id}`}>Games</Link></Button>
            </div>
        </div>
    );
};

export default CardItems;
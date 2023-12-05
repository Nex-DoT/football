import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const CardItems = ({data}) => {
    return (
        <div className=" w-80 h-32 bg-slate-100 rounded-md shadow-small mb-3 flex items-center justify-around mt-3">
            <div className="flex items-center justify-start ml-3">
                <Image className=" aspect-square object-contain mr-2" src={data.league.logo} height={60} width={60}/>
                <div className=" w-32">
                    <p>{data.league.name}</p>
                    <p className="text-sm font-thin">{data.country.name}</p>
                </div>
            </div>
            <div>
                <Button className="text-white" size="sm" color="success"><Link href={`/tabels/${data.league.id}`}>Tabel</Link></Button>
            </div>
        </div>
    );
};

export default CardItems;
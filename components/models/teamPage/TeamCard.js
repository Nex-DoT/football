import { Button } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
const TeamCard = ({data , route}) => {
    console.log(route);
    return (
        <div className=' w-96 bg-white h-40 rounded-md mt-5 mb-5 flex items-center justify-between p-4 shadow-lg hover:bg-color2 transition-colors'>
            <Image className='w-16 object-cover ml-3 mr-3' height={300} width={300} src={data.team.logo} alt="png" />
            <div className="flex flex-col items-start justify-evenly h-2/4 w-2/4">
                <div>
                    <h3 className='text-md font-Rubic'>{data.team.name}</h3>
                    <p className=' text-xs'>Founded in :{data.team.founded}</p>
                </div>
            </div>
                <button href="./details" className="mt-2 bg-gradient-to-tr from-color6 to-color7 p-2 w-20 rounded-md shadow-md font-Rubic z-10 text-xs"><Link href={`/team/details/${route}/${data.team.id}`}className="w-full h-full text-black text-sm">Details</Link></button>
        </div>
    );
};

export default TeamCard;
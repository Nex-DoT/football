import { Button } from "@nextui-org/react";
import Link from "next/link";
const TeamCard = ({data , route}) => {
    console.log(route);
    return (
        <div className='w-64 bg-color1 h-44 rounded-md mt-5 mb-5 flex items-center justify-start text-white shadow-lg hover:bg-color2 transition-colors'>
            <img className='w-20 object-cover ml-3 mr-3' src={data.team.logo} alt="" />
            <div className="flex flex-col items-start justify-evenly h-2/4">
                <div>
                    <h3 className='text-md'>{data.team.name}</h3>
                    <p className='text-sm'>Founded in :{data.team.founded}</p>
                </div>
                <div>
                    <Button href="./details" size="sm"><Link href={`/team/details/${route}/${data.team.id}`}className="w-full h-full text-black text-sm">Details</Link></Button>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
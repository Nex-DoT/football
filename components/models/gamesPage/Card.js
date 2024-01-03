import Image from "next/image";
import { Button } from '@nextui-org/react';
import Link from "next/link";
const Card = ({data}) => {
    return (
        <div className='flex flex-col justify-center items-center w-44 bg-gray-400 h-36 m-5 rounded-md shadow-md'>
            <div>
                <Image width={50} src={data.url} alt={data.name} />
                <h3>{data.name}</h3>
            </div>
            <Button size='sm'><Link href={`/games/${data.id}`}>Games</Link></Button>
        </div>
    );
};

export default Card;
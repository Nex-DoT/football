import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const IndexCard = ({data}) => {
    console.log(data);
    return (
        <div className='bg-white w-80  h-40 rounded-md flex items-center justify-between mt-10 m-2 p-3 shadow-md'>
            <div className='flex items-center'>
                <Image alt='png' src={data.url} width={90} className=' aspect-square object-contain mr-2'/>
                <h2 className=' font-Anton'>{data.name}</h2>
            </div>
            <Link href={`/team/${data.id}`}> <button className='w-24 h-10 rounded-md bg-gradient-to-tr from-color6 to-color7 font-ProtestG shadow-md'>Teams</button></Link>
        </div>
    );
};

export default IndexCard;
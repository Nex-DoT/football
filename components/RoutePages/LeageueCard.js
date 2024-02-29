import React from 'react';
import IndexCard from '../models/teamPage/IndexCard';
import { topleague } from '../../function/staticData';
import Link from 'next/link';
const LeageueCard = () => {
    const data = topleague();
    return (
        <div>
            <div className='flex items-center justify-center flex-wrap w-full sm:w-3/5 m-auto mt-10'>
                {data.map(item => <IndexCard key={item.id} data={item}/>)}

            </div>

                <div className='text-black flex items-center flex-col bg-white w-full mt-10 pb-10'>
                    <h2 className='text-xl p-3'>If you're looking for games that aren't in these leagues, you can click this button. </h2>
                    <Link href="/league">
                    <button className=' w-24 h-10 bg-gradient-to-tr font-ProtestG from-color6 to-color7 rounded-md text-black'>Leagues</button>
                    </Link>
                </div>
        </div>
    );
};

export default LeageueCard;
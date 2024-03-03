import React from 'react';
import IndexCard from '../models/teamPage/IndexCard';
import { topleague } from '../../function/staticData';
import { Link } from '@nextui-org/react';
const LeageueCard = () => {
    const data = topleague();
    return (
        <div>
            <div className='flex items-center justify-center flex-wrap w-full sm:w-3/5 m-auto mt-10'>
                {data.map(item => <IndexCard key={item.id} data={item}/>)}

            </div>

                <div className='text-black flex items-center flex-col bg-white w-full mt-10 pb-10'>
                    <h2 className='text-xl p-3'>If youre looking for games that arent in these leagues, you can click this button. </h2>
                    {/* <Link href={``}>
                         <button className=' w-24 h-10 bg-gradient-to-tr font-ProtestG from-color6 to-color7 rounded-md text-black'>Leagues</button>
                    </Link> */}
                    <button className=' w-24 h-10 bg-gradient-to-tr font-ProtestG from-color6 to-color7 rounded-md text-black'>
                      <Link className='text-black' href={"/league"}>League</Link>
                    </button>
                </div>
        </div>
    );
};

export default LeageueCard;
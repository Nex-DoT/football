import React from 'react';
import Image from 'next/image';
import scrollGif from "public/image/scroll.gif"
import pitch from '/public/image/halfPitch.png';
const LineUp = ({data , color}) => {
    function createSpan(number) {
        const divs = []
        for (let i = 0; i < number; i++) {
          
            divs.push(<div className='w-7 h-7 rounded-full border-2 shadow-lg' style={{ background:`${color}` }}></div>)
        }
        return divs
      }
    const formation = data.formation.split("-").reverse();
    console.log(formation);
    return (
        <div className='flex items-center justify-center flex-col h-96 m-16 rounded-md bg-white shadow-lg'>
            <h1 className=' text-xl font-thin font-Anton'>{data.played} Times played</h1>
            <p className='text-gray-400'>{data.formation}</p>
            <div className='relative w-64 rounded-lg overflow-hidden h-72 m-3'>
                <Image className='top-0 rounded-xl absolute' src={pitch} height={550} width={550}/>
                <div className=' absolute bg-gray-50 bg-opacity-5 z-40 w-full h-full flex items-center justify-around flex-col'>
                    {formation.map( items => <div key={items.index} className='flex items-center justify-around w-3/4'>{createSpan(+items)}</div> )}
                    <div>
                         <div className='w-7 h-7 rounded-full border-2 ' style={{background:`${color}`}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LineUp;
import React from 'react';

const DeatailsForThisSeoson = ({data}) => {
    return (
        <div className=' pt-40 p-16 text-white relative'>
            <h1 className='font-bold text-2xl absolute top-48'>Here are the stats for {data.team.name} so far this season:</h1>
            <ul className='flex items-center justify-around mt-16 flex-wrap '>
                <li className='flex flex-col items-center justify-around w-64  h-32 bg-color5 bg-opacity-25 p-3 rounded-lg backdrop-blur-sm shadow-lg  mt-5'>
                    <h3 className=" text-lg font-semibold">Fixtures :</h3>
                    <div className='flex items-center justify-around w-full flex-wrap'>
                        <p className='w-1/2 flex justify-center '>Played : {data.fixtures.played.total}</p>
                        <p className='w-1/2 flex justify-center '>Wins : {data.fixtures.wins.total} </p>
                        <p className='w-1/2 flex justify-center '>Draws : {data.fixtures.draws.total}</p>
                        <p className='w-1/2 flex justify-center '>Loses : {data.fixtures.loses.total}</p>
                    </div>
                </li>
                <li className='flex items-center flex-col justify-around w-64 h-32 bg-green-500 bg-opacity-25 p-3 rounded-lg backdrop-blur-sm shadow-lg mt-5'>
                    <h3 className=" text-lg font-semibold">Biggest wins :</h3>
                        <div className='flex items-center justify-around w-full'>
                            <p>Home : {data.biggest.wins.home}</p>
                            <p>Away : {data.biggest.wins.away}</p>
                        </div>
                    </li>
                <li className='flex flex-col items-center justify-around w-64 h-32 bg-red-300 bg-opacity-25 p-3 rounded-lg backdrop-blur-sm shadow-lg mt-5'>
                    <h3 className=" text-lg font-semibold">Biggest Loses : </h3>
                    <div className='flex items-center justify-around w-full'>
                        <p>Home : {data.biggest.loses.home}</p>
                        <p>Away : {data.biggest.loses.away}</p>
                    </div>
                </li>
                <li className='flex flex-col items-center justify-around w-64 h-32 bg-color5 bg-opacity-25 p-3 rounded-lg backdrop-blur-sm shadow-lg mt-5'>
                    <h3 className=" text-lg font-semibold">Clean sheets :</h3>
                    <div className='flex items-center justify-around w-full'>
                        <p>Total : {data.clean_sheet.total} </p>
                        <p>Home : {data.clean_sheet.home}</p>
                        <p>Away : {data.clean_sheet.away}</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default DeatailsForThisSeoson;
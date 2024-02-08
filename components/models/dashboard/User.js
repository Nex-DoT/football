import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";


const User = ({data}) => {
    return (
        <div className=' h-210 bg-color2 w-3/4 m-2 rounded-lg text-white flex items-center justify-start'>
            <div className='flex items-center justify-between w-52'>
                <FaRegCircleUser className='h-14 w-8'/>
                <h2 className=' w-40'>{data.username}</h2>
            </div>
            <div className='flex items-center justify-between w-52'>
                <MdEmail className='h-14 w-8'/>
                <h2 className=''>{data.email}</h2>
            </div>
        </div>
    );
};

export default User;
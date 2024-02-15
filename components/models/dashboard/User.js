import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";


const User = ({data}) => {
    return (
        <div className=' h-210 bg-color2 w-full mt-2 mb-2 m-auto rounded-lg  flex items-center justify-center flex-col'>
            <div className='flex items-center justify-between w-52'>
                <div className='w-8 items-center flex justify-center mr-3'>
                     <FaRegUser className='h-14 w-5'/>
                </div>
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
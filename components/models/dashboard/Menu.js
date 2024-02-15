import React, { useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { useRouter } from 'next/router';
const Menu = ({active , setActive , onClickHandeler}) => {
    const router = useRouter()
    const logoutHandler =async()=>{
        const res = await fetch('/api/auth/logout');
        const data = await res.json();
        console.log(data);
        router.push('myAccount')
    }
    return (
        <div className=' w-40 rounded-e-md h-210 mt-1 mb-1 flex flex-col items-start justify-between pb-8 pt-2 absolute '> 
        <div className=' h-48 flex flex-col justify-around font-Rubic text-sm'>
            <button type='button' onClick={()=>onClickHandeler("User")} name='User' className={`flex items-center justify-center cursor-pointer w-16  h-14 bg-color4 sm:bg-white rounded-e-md  ${active.User&& " scale-105 bg-gradient-to-tr from-color6 to-color7 font-Rubic"} transition-all`} >
                <FaRegUser className='w-1/3 h-5 flex items-center'/>
            </button>
            <button type='button' onClick={()=>onClickHandeler("Heart")} name='User' className={`flex items-center justify-center cursor-pointer w-16  h-14 bg-color4 sm:bg-white rounded-e-md ${active.Heart && " scale-105 bg-gradient-to-tr from-color6 to-color7 font-Rubic"} transition-all`} >
                <AiOutlineHeart className='w-1/3 h-7 flex items-center'/>
            </button>
            <button type='button' onClick={()=>onClickHandeler("Bell")} name='User' className={`flex items-center justify-center cursor-pointer  w-16  h-14 bg-color4 sm:bg-white rounded-e-md  ${active.Bell&& " scale-105 bg-gradient-to-tr from-color6 to-color7 font-Rubic"} transition-all`} >
                <AiOutlineBell className='w-1/3 h-7 flex items-center'/>
            </button>
        </div>

        <button type='button' onClick={logoutHandler} name='User' className={`flex items-center justify-center cursor-pointer w-16 h-14 bg-color4 sm:bg-white  rounded-e-md transition-all `} >
                <BiLogOut className='w-1/3 h-7 flex items-center'/>
         </button>

        </div>
    );
};

export default Menu;
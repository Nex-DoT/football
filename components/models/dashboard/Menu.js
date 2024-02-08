import React, { useState } from 'react';
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";

const Menu = ({active , setActive , onClickHandeler}) => {
    return (
        <div className=' w-64 rounded-e-md h-210 mt-1 mb-1 flex flex-col items-start justify-between pb-8 pt-2'> 
        <div className=' h-48 flex flex-col justify-around'>
            <button type='button' onClick={()=>onClickHandeler("User")} name='User' className={`flex items-center justify-center cursor-pointer  w-52 h-14 bg-color2 rounded-e-md text-white ${active.User&& " scale-105"} transition-all`} >
                <AiOutlineUser className='w-1/3 h-7 flex items-center'/>
                <h3 className=' w-1/2 text-left'>User</h3>
            </button>
            <button type='button' onClick={()=>onClickHandeler("Heart")} name='User' className={`flex items-center justify-center cursor-pointer w-52 h-14 bg-color2 rounded-e-md text-white ${active.Heart&&" scale-105"} transition-all`} >
                <AiOutlineHeart className='w-1/3 h-7 flex items-center'/>
                <h3 className=' w-1/2 text-left'>Favorite Team</h3>
            </button>
            <button type='button' onClick={()=>onClickHandeler("Bell")} name='User' className={`flex items-center justify-center cursor-pointer  w-52 h-14 bg-color2 rounded-e-md text-white ${active.Bell && "scale-105"} transition-all`} >
                <AiOutlineBell className='w-1/3 h-7 flex items-center'/>
                <h3 className='w-1/2 text-left'>Notifications</h3>
            </button>
        </div>

        <button type='button' name='User' className={`flex items-center justify-center cursor-pointer w-40 h-14 bg-color2 rounded-e-md text-white transition-all  ob`} >
                <BiLogOut className='w-1/3 h-7 flex items-center'/>
                <h3 className='w-1/2 text-left'>Logout</h3>
         </button>

        </div>
    );
};

export default Menu;
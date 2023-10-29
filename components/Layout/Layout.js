import React from 'react';
import Image from 'next/image';
import logo from "/public/favicon/favicon.ico";
import style from "./Layout.module.css"
const Layout = ({children}) => {
    return (
        <div>
            <menu className='bg-color2  h-20 pl-5 flex items-center justify-between text-white shadow-2xl'>
                    <div className='flex items-center w-2/4'>
                        <div>
                            <Image src={logo} className='w-14'/>
                        </div>
                        <ul className='flex w-3/5 justify-between ml-7'>
                            <li className=' cursor-pointer'><p className={`${style.hover-4}`}>Home</p></li>
                            <li className=' cursor-pointer'><p className={style.hover-4}>Clubs</p></li>
                            <li className=' cursor-pointer'><p className={style.hover-4}>Player</p></li>
                            <li className=' cursor-pointer'><p className={style.hover-4}>Coach</p></li>
                            <li className=' cursor-pointer'><p className={style.hover-4}>League</p></li>
                            <li className=' cursor-pointer'><p className={style.hover-4}>Search</p></li>
                        </ul>
                    </div>
                    <div className='mr-5'>
                        <ul className='flex items-center'>
                            <li className='p-2 rounded-full bg-color4 transition-colors text-black hover:bg-color3 cursor-pointer m-2'>SignUp</li>
                            <li className='text-white cursor-pointer'>Login</li>
                        </ul>
                    </div>
            </menu>
            <div>
                {children}
            </div>
        </div>
    );
};

export default Layout;
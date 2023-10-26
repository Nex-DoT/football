import React from 'react';
import Image from 'next/image';
import logo from "/public/favicon/favicon.ico";
const Layout = ({children}) => {
    return (
        <div>
            <menu className='bg-color2  h-20 pl-5 flex items-center justify-between text-white'>
                    <div className='flex items-center w-2/4'>
                        <div>
                            <Image src={logo} className='w-14'/>
                        </div>
                        <ul className='flex w-3/5 justify-between ml-7'>
                            <li className=' cursor-pointer'>News</li>
                            <li className=' cursor-pointer'>Home</li>
                            <li className=' cursor-pointer'>Clubs</li>
                            <li className=' cursor-pointer'>Player</li>
                            <li className=' cursor-pointer'>Coach</li>
                            <li className=' cursor-pointer'>League</li>
                            <li className=' cursor-pointer'>Search</li>
                        </ul>
                    </div>
                    <div className='mr-5'>
                        <ul className='flex'>
                            <li className='p-2 rounded-full bg-color4 transition-colors text-black hover:bg-color3 cursor-pointer m-2'>Login</li>
                            <li className='p-2 rounded-full bg-color4 transition-colors text-black hover:bg-color3 cursor-pointer m-2'>SignUp</li>
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
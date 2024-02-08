import React, { useEffect } from 'react';
import Image from 'next/image';
import { AiFillUpCircle } from "react-icons/ai";
import logo from "/public/favicon/favicon.ico";
// const Menu = ({children}) => {
//     return (
//         <div>
//         <menu className='bg-color2  h-20 pl-5 flex items-center justify-between text-white shadow-2xl'>
//                 <div className='flex items-center w-2/4'>
//                     <div>
//                     </div>
//                     <ul className='flex w-3/5 justify-between ml-7'>
//                         <li className=' cursor-pointer'><p>Home</p></li>
//                         <li className=' cursor-pointer'><p>Clubs</p></li>
//                         <li className=' cursor-pointer'><p>Player</p></li>
//                         <li className=' cursor-pointer'><p>Coach</p></li>
//                         <li className=' cursor-pointer'><p>League</p></li>
//                         <li className=' cursor-pointer'><p>Search</p></li>
//                     </ul>
//                 </div>
//                 <div className='mr-5'>
//                     <ul className='flex items-center'>
//                         <li className='p-2 rounded-full bg-color4 transition-colors text-black hover:bg-color3 cursor-pointer m-2'>SignUp</li>
//                         <li className='text-white cursor-pointer'>Login</li>
//                     </ul>
//                 </div>
//         </menu>
//         <div>
//             {children}
//         </div>
//     </div>
//     );
// };

// export default Menu;

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function Menu({children}) {
    useEffect(()=>{
        
    },[])
  return (
    <div className=' min-h-screen'>

        <div className='bg-white flex items-center justify-between border-b-2  h-20 bg-opacity-80 w-full sticky top-0 z-50 p-8 backdrop:blur'>
        <div className="sm:flex gap-4 font-Roberto flex items-center justify-between  w-200">
            <div className='flex items-center font-ProtestG w-1/4'>
                <div className='flex items-center p-1  rounded-md justify-around w-32 bg-color3'>
                    <Image src={logo} className='w-10'/>
                    <p className=" text-color7 text-lg ">FC Goal</p>
                </div>
            </div>
            <div className='flex w-1/4 justify-between items-center font-Rubic'>
                <div>
                <Link href="#" className='text-black'>
                    Home
                </Link>
                </div>
                <div>
                <Link href="/league" className='text-black'>
                    League
                </Link>
                </div>
                <div>
                <Link href="/league" className='text-black'>
                    Teams
                </Link>
                </div>
                <div>
                <Link href="/games" className='text-black'>
                    Games
                </Link>
                </div>
            </div>
            <div className='w-1/4 flex items-center justify-end'>
                <button as={Link} className=' font-ProtestG p-2 w-24 rounded-md bg-gradient-to-br  from-color6 to-color7 hover:opacity-80 transition-all shadow-md' href="/myAccount" variant="flat">
                    Login
                </button>
            </div>
        </div>
        </div>
        <div className=' font-Roberto bg-color4'>
            {children}
        </div>
        <footer class="bg-color2 text-white text-center py-3 text-lg border-top">
            <div class="max-w-7xl mx-auto">
                <p class="text-md">NEX-DoT</p>
                <p class="text-gray-500 font-thin text-sm">© 2023 NEX-DoT. This site is a personal project for practicing Next.js development.</p>
            </div>
            <br/>
            <Button href='#' size='lg' color='primary'>
                <a href="#" className='flex items-center justify-around w-36 h-full'>
                <AiFillUpCircle className='text-3xl' />
            Scroll to top</a></Button>
        </footer>
    </div>
  );
}
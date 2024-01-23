import React from 'react';
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
  return (
    <div className=' min-h-screen'>

        <Navbar className='bg-color2 h-20 bg-opacity-95' shouldHideOnScroll>
        <NavbarContent className="sm:flex gap-4 " justify="center">
            <NavbarBrand className='flex items-center justify-center flex-col'>
                <Image src={logo} className='w-10'/>
                <p className=" text-white">FC Goal</p>
            </NavbarBrand>
            <NavbarItem>
            <Link href="#" className='text-white'>
                Home
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link href="/league" className='text-white'>
                League
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link href="/league" className='text-white'>
                Teams
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link href="/games" className='text-white'>
                Games
            </Link>
            </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
            <NavbarItem>
            <Button as={Link} color="primary" href="/myAccount" variant="flat">
                Login
            </Button>
            </NavbarItem>
        </NavbarContent>
        </Navbar>
        <div>
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
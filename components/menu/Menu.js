import React from 'react';
import Image from 'next/image';
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
    <div>

        <Navbar className='bg-color2 h-20 bg-opacity-95' shouldHideOnScroll>
        <NavbarBrand className='flex items-center justify-center flex-col'>
            <Image src={logo} className='w-10'/>
            <p className=" text-white">FC Goal</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
            <Link href="#" className='text-white'>
                Home
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link href="#" className='text-white'>
                Tabels
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link href="#" className='text-white'>
                Teams
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link href="#" className='text-white'>
                Players
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link href="news" className='text-white'>
                News
            </Link>
            </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
            </NavbarItem>
            <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
                Sign Up
            </Button>
            </NavbarItem>
        </NavbarContent>
        </Navbar>
        <div>
            {children}
        </div>
    </div>
  );
}
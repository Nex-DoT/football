import React from 'react';
import Image from 'next/image';
import logo from "/public/favicon/favicon.ico";
// const Layout = ({children}) => {
//     return (
//         <div>
//             <menu className='bg-color2  h-20 pl-5 flex items-center justify-between text-white shadow-2xl'>
//                     <div className='flex items-center w-2/4'>
//                         <div>
//                             <Image
//                                 src={logo}
//                                 className='w-14'/>
//                         </div>
//                         <ul className='flex w-3/5 justify-between ml-7'>
//                             <li className=' cursor-pointer'><p className={`${style.hover-4}`}>Home</p></li>
//                             <li className=' cursor-pointer'><p className={style.hover-4}>Clubs</p></li>
//                             <li className=' cursor-pointer'><p className={style.hover-4}>Player</p></li>
//                             <li className=' cursor-pointer'><p className={style.hover-4}>Coach</p></li>
//                             <li className=' cursor-pointer'><p className={style.hover-4}>League</p></li>
//                             <li className=' cursor-pointer'><p className={style.hover-4}>Search</p></li>
//                         </ul>
//                     </div>
//                     <div className='mr-5'>56+
//                         <ul className='flex items-center'>
//                             <li className='p-2 rounded-full bg-color4 transition-colors text-black hover:bg-color3 cursor-pointer m-2'>SignUp</li>
//                             <li className='text-white cursor-pointer'>Login</li>
//                         </ul>
//                     </div>
//             </menu>
//             <div>
//                 {children}
//             </div>
//         </div>
//     );
// };

// export default Layout;
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo.jsx";

export default function Layout({children}) {
  return (
    <div>
        <Navbar shouldHideOnScroll>
        <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
            <Link color="foreground" href="#">
                Features
            </Link>
            </NavbarItem>
            <NavbarItem isActive>
            <Link href="#" aria-current="page">
                Customers
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link color="foreground" href="#">
                Integrations
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
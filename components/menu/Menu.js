import React, { useEffect, useState } from 'react';
import logo from "/public/favicon/favicon.ico";
import Image from 'next/image';
import {Link, Button} from "@nextui-org/react";
import { AiFillUpCircle } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

export default function Menu({children}) {
    const [auth , setAuth] = useState(false)
    const [menu , setMenu] = useState(false);
    useEffect(()=>{
        fetch('/api/user')
        .then((res)=> res.json())
        .then((data)=> {if(data.status === 'success') setAuth(true)})
    },[]);
    const menuHandler =()=>{
        setMenu(!menu);

    }
  return (
    <div className=' min-h-screen'>

        <div className='bg-white flex items-center justify-between border-b-2  h-20 bg-opacity-80 w-full sticky top-0 z-50 p-8 backdrop:blur'>
            <div className={` absolute bg-white top-20 w-full left-0 pb-4 shadow-md rounded-b-lg flex items-center gap-2 pt-2 justify-start flex-col sm:hidden sm:disabled: ${menu ?'animate-appearance-in' : ' hidden'} `}>
                <div className='w-2/6 hover:bg-color4 transition-colors  p-2 h-16 flex items-center justify-center text-lg rounded'>
                <Link href="#" className='text-black'>
                    Home
                </Link>
                </div>
                <div className='w-2/6 hover:bg-color4 transition-colors  p-2 h-16 flex items-center justify-center text-lg rounded'>
                <Link href="/league" className='text-black'>
                    League
                </Link>
                </div>
                <div className='w-2/6 hover:bg-color4 transition-colors  p-2 h-16 flex items-center justify-center text-lg rounded'>
                <Link href="/league" className='text-black'>
                    Teams
                </Link>
                </div>
                <div className='w-2/6 hover:bg-color4 transition-colors  p-2 h-16 flex items-center justify-center text-lg rounded'>
                <Link href="/games" className='text-black'>
                    Games
                </Link>
                </div>
            </div>
        <div className="sm:flex gap-4 font-Roberto flex items-center justify-between  w-200">
            <div className='flex items-center font-ProtestG sm:hidden w-1/6 justify-center'>
                <button className=' font-ProtestG w-10 h-10  rounded-md bg-gradient-to-br  from-color6 to-color7 hover:opacity-80 transition-all shadow-md flex items-center justify-center' onClick={menuHandler} >
                    {menu ?<IoCloseSharp className='h-5 w-5' /> : <HiOutlineMenuAlt1 className='h-5 w-5'/> }
                </button>
            </div>
            <div className='flex items-center font-ProtestG sm:w-1/4 w-5/6 justify-center sm:justify-start'>
                <div className='flex items-center p-1 rounded-md justify-around bg-color3 flex-row w-32'>
                    <Image src={logo} className='w-10' alt='photo'/>
                    <p className=" text-color7 text-md ">FC Goal</p>
                </div>
            </div>
            <div className=' md:w-1/4 sm:w-3/6 justify-between items-center font-Rubic container hidden sm:flex'>
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
            <div className='w-1/6 flex items-center justify-center sm:justify-end'>
                { auth ? <button className=' font-ProtestG w-10 h-10  rounded-md bg-gradient-to-br  from-color6 to-color7 hover:opacity-80 transition-all shadow-md flex items-center justify-center' >
                    <Link href='/dashboard' className='text-black flex items-center justify-between'>
                    <FaRegUser className='h-5 w-5'/> 
                    </Link>
                </button> : <button className=' font-ProtestG p-2 w-24 rounded-md bg-gradient-to-br  from-color6 to-color7 hover:opacity-80 transition-all shadow-md' >
                    <Link href='/myAccount' className='text-black'>
                    Login
                    </Link>
                </button> }
                
            </div>
        </div>
        </div>
        <div className=' font-Roberto bg-color4'>
            {children}
        </div>
        <footer className="bg-color2 text-white text-center py-3 text-lg border-top">
            <div className="max-w-7xl mx-auto">
                <p className="text-md">NEX-DoT</p>
                <p className="text-gray-500 font-thin text-sm">© 2023 NEX-DoT. This site is a personal project for practicing Next.js development.</p>
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
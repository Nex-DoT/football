import React from 'react';
import { Input } from '@nextui-org/react';
import { CgSearch } from "react-icons/cg";
import { useState } from 'react';
const LeagueListPage = () => {
    const [data , setData] = useState({
        name: "",
        country : ""
    })
   const onChangeHandeler = (e) =>{
        setData({...data , [e.target.name] : e.target.value})
        console.log(data);
   }
   const onClearHandeler = (e) =>{
        console.log(e);
   }
    return (
        <div>
            <div className='flex items-center justify-center'>
                <Input
                    onClear={onClearHandeler}
                    onChange={(e)=>onChangeHandeler(e)}
                    name='name'
                    value={data.name}
                    isClearable
                    color='primary'
                    radius="lg"
                    className=' w-56 mt-6 mb-6 mr-4'
                    classNames=""
                    placeholder="Name"
                    startContent={
                    <CgSearch className="" />
                    }
                />
                 <Input
                    onClear={onClearHandeler}
                    onChange={(e)=>onChangeHandeler(e)}
                    name='country'
                    isClearable
                    value={data.country}
                    color='primary'
                    radius="lg"
                    className=' w-56 mt-6 mb-6'
                    classNames=""
                    placeholder="Country"
                    startContent={
                    <CgSearch className="w-6 h-7 cursor-pointer" onClick={(e)=> console.log(e.target)} name='country' />
                    }
                />
            </div>
        </div>
    );
};

export default LeagueListPage;
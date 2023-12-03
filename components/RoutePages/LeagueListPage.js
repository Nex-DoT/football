import React from 'react';
import { Input , Pagination } from '@nextui-org/react';
import { CgSearch } from "react-icons/cg";
import { useState } from 'react';
const LeagueListPage = ({info}) => {
    const informationData = info.response;
    const [data , setData] = useState({})
    const [text , setText] = useState({
        name: "",
        country : ""
    })
    function chunkArray(array, chunkSize) {
        let result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
          let chunk = array.slice(i, i + chunkSize);
          result.push(chunk);
        }
        return result;
    }
    const infoData = chunkArray(informationData , 35);
    const onChangeHandeler = (e) =>{
        setText({...text , [e.target.name] : e.target.value})
   }
    const OnChangeHandelerP = (e)=>{
        setData(infoData[e])
        console.log(data);
   }
    return (
        <div>
            <div className='flex items-center justify-center'>
                <Input
                    onChange={(e)=>onChangeHandeler(e)}
                    name='name'
                    value={text.name}
                    color='primary'
                    radius="lg"
                    className=' w-56 mt-6 mb-6 mr-4'
                    classNames=""
                    placeholder="Name"
                    startContent={
                        <CgSearch className=" cursor-pointer" />
                    }
                />
                 <Input
                    onChange={(e)=>onChangeHandeler(e)}
                    name='country'
                    value={text.country}
                    color='primary'
                    radius="lg"
                    className=' w-56 mt-6 mb-6'
                    classNames=""
                    placeholder="Country"
                    startContent={
                        <CgSearch className=" cursor-pointer" onClick={(e)=> console.log(e)} name='country' />
                    }
                />
            </div>
            <div className= ' max-h-screen w-full overflow-y-scroll'>
                
            </div>
            <div className='flex items-center justify-center'>
                <Pagination color='primary' isCompact showControls total={infoData.length} initialPage={1} onChange={OnChangeHandelerP} />
            </div>
        </div>
    );
};

export default LeagueListPage;
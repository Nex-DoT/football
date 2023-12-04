import React from 'react';
import { Input , Pagination } from '@nextui-org/react';
import { CgSearch } from "react-icons/cg";
import { useState , useRef } from 'react';
import CardItems from '../models/tabelsPage/CardItems';

function chunkArray(array, chunkSize) {
    let result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      let chunk = array.slice(i, i + chunkSize);
      result.push(chunk);
    }
    return result;
}


const LeagueListPage = ({info}) => {
    const contentDivRef = useRef(null);
    const informationData = info.response;
    const infoData = chunkArray(informationData , 35);
    const [data , setData] = useState(infoData[0])
    const [text , setText] = useState({
        name: "",
        country : ""
    })
    const onChangeHandeler = (e) =>{
        setText({...text , [e.target.name] : e.target.value})
   }
    const OnChangeHandelerP = (e)=>{
        setData(infoData[+e -1])
        console.log(data);
        if (contentDivRef.current) {
            // Get the current position of the div
            const divPosition = contentDivRef.current.getBoundingClientRect().top;
      
            // Calculate scroll value based on div position
            const scrollValue = divPosition ;
      
            // Perform the scroll
            window.scrollBy({ top: scrollValue, behavior: 'smooth' });
          }
   }
    return (
        <div ref={contentDivRef}>
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
            <div  className= ' flex items-center justify-around flex-wrap w-2/3 m-auto'>
                {data.map(items => <CardItems  data={items}/>)}
            </div>
            <div className='flex items-center justify-center'>
                <Pagination color='primary' isCompact showControls total={infoData.length} initialPage={1} onChange={OnChangeHandelerP} />
            </div>
        </div>
    );
};

export default LeagueListPage;
import Image from "next/image";
import { Button , Accordion , AccordionItem} from '@nextui-org/react';
import { useState , useEffect } from "react";
import { BiSolidTimer } from "react-icons/bi";
import { TiTime } from "react-icons/ti";
import Link from "next/link";

const Card = ({data}) => {
    const [date , setDate] = useState();
    function formatDate(dateStr) {
        // Extract the date and time components
        const [datePart, timePart] = dateStr.split("T");
        const [year, month, day] = datePart.split("-");
        const [hours, minutes, seconds] = timePart.split(":");
        // Compose the formatted string, ensuring leading z eros for month and day
        const string = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")} ${hours}:${minutes}`;
        setDate(string)
    }
    useEffect(()=>{
        formatDate(data.fixture.date);
    },[])
    console.log(data);
    return (
        <div className='flex flex-col items-center justify-center bg-color2 m-5 rounded-md shadow-md w-2/6'>
        <div className="w-full flex items-center justify-center flex-col">
            <h1 className="text-sm p-3 flex items-center justify-between w-42 h-12 m-2 bg-gradient-to-br from-color6 to-color7 rounded-full font-Rubic"><TiTime className="w-7 h-7"/> : {date}</h1>
            <div className="flex items-center justify-evenly w-full">
                 <div className="flex items-center  justify-evenly bg-color4 rounded-md  text-sm font-thin flex-col w-32 h-32">
                    <h2 className="text-xs">Home</h2>
                    <Image src={data.teams.home.logo} className="w-12 aspect-square" width={300} height={300} alt="png" />
                    <p className="text-md font-semibold">{data.teams.home.name}</p>
                 </div>
                 {data.fixture.status.long === "Not Started" ? <div className=" text-sm font-thin bg-red-400 bg-opacity-20 w-20 h-10 rounded-md flex items-center justify-evenly" >
                    <p className="text-small">{data.fixture.status.long}</p>
                 </div> : <div className=" text-sm font-thin bg-green-500 w-20 h-12 rounded-md flex items-center justify-evenly" >
                     <div>
                     {data.goals.home}
                     -
                     {data.goals.away}
                     </div>
                     <div className=" relative">
                     <BiSolidTimer className=" absolute top-0 right-0" />
                        {data.fixture.status.elapsed}
                     </div>
                 </div>}
                 
                 <div className="flex items-center justify-evenly  bg-color4 rounded-md text-sm font-thin flex-col w-32 h-32">
                    <h2 className="text-xs">Away</h2>
                         <Image src={data.teams.away.logo} className="w-12 aspect-square" width={80} height={80} alt="png" />
                         <p className="text-md font-semibold">{data.teams.away.name}</p>
                 </div>
            </div>
        </div>
        <Accordion>
            <AccordionItem textValue="">
                <div>
                    <p>lamo</p>
                </div>
            </AccordionItem>
        </Accordion>
        </div>
    );
};

export default Card;
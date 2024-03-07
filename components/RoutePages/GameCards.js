import React ,{useState} from 'react';
import Image from 'next/image';
import { topleague } from '../../function/staticData';
import { useEffect } from 'react';
import Link from 'next/link';
const GameCards = () => {
    const [data , setData] = useState(topleague())
    const [image, setImage] = useState(data[0]);
    const onMouseHandeler = (id) => {
      // ... کد مربوط به دریافت اطلاعات تصویر جدید
      const newData = data.filter( item => item.id === id);
      setImage(newData[0]); // به روز رسانی src تصویر
      console.log(image);
    };
    useEffect(()=>{
      
    },[])
    return (
        <div className=' md:h-230 w-full flex items-center relative justify-center md:justify-evenly flex-col-reverse md:flex-row '>
             <div className='z-20 flex flex-col justify-evenly h-3/4 md:flex-col md:flex-wrap'>
                {data.map( item => <Link key={item.id} onMouseEnter={()=> onMouseHandeler(item.id)} className='flex items-center w-72 hover:opacity-80 transition-opacity' href={`/games/${item.id}`}>
                  <button className=' w-20 h-20 transition-opacity bg-gradient-to-tr from-color6 to-color7 rounded-full m-3 flex items-center justify-center hover:bg-color3 relative'>
                  <Image className=' aspect-square object-contain'  width={50} height={50} src={item.url} alt="png" />
                  <div className=' absolute h-20 w-56 flex items-center justify-center bg-color3 -z-10 rounded-e-full left-1/2 text-white font-ProtestG text-xl'>{item.name}</div>
                  </button>
                  
                  </Link>
                  )}
            </div>
            <div className='md:flex items-center justify-around flex-col h-2/4 bg-color3 rounded-md m-5 md:mr-5 shadow-md p-5'>
              <div className=''>
                <Image className=' aspect-square m-auto object-contain hidden md:block' width={80} src={image.url} alt='png'/>
                 <h2 className='text-white font-ProtestG sm:text-xl '>See the upcoming games for the next 7 days in this leagues.</h2>
                <ul className=' list-disc text-white m-4'>
                  <li>The date and time of each game</li>
                  <li>The teams playing in each game</li>
                  <li>The location of each game</li>
                </ul>
              </div>
              <div className='text-white flex items-center flex-col'>
                <h2 className='text-xl p-3'>If youre looking for games that arent in these leagues, you can click this button. </h2>
                {/* <Link href="/league">
                   <button className=' w-24 h-10 bg-gradient-to-tr font-ProtestG from-color6 to-color7 rounded-md text-black'>Leagues</button>
                </Link> */}
                <button className=' w-24 h-10 bg-gradient-to-tr font-ProtestG from-color6 to-color7 rounded-md text-black'>
                  <Link className='text-black' href={"/league"}>League</Link>
                </button>
              </div>
            </div>
        </div>
    );
};

export default GameCards;
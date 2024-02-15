import { useState , useRef , useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { GiDuel } from "react-icons/gi";
import { GiBurningPassion } from "react-icons/gi";
import { TbCardsFilled } from "react-icons/tb";
import { IoFootballOutline } from "react-icons/io5";
import { RiCompasses2Line } from "react-icons/ri";
import { GiBurningRoundShot } from "react-icons/gi";
import { ImStatsBars } from "react-icons/im";
const PlayerCard = ({info , color}) => {
    console.log(info);
    const [open , setOpen] = useState(false);
    const contentDivRef = useRef(null);
    useEffect(() => {
      if (open) {
        contentDivRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
    }, [open]);
    const modalHandeler = ()=>{
      setOpen(!open);
    }
    return (
       <div className=" rounded-md p-2 w-56 h-40 m-4 flex flex-col items-center justify-around shadow-md" style={{
           background: `linear-gradient(to top right, #fff , #fff , #fff ,#fff,#fff ,#fff ,${color ? color : '#000000'})`,
         }}>
           <div className="flex items-center justify-center w-full">
               <img className=" object-cover w-16 rounded-full mr-3" src={info.player.photo} alt="" />
               <div>{info.player.name}<p className="text-gray-400">{info.player.nationality}</p></div>
           </div>
           <button onClick={modalHandeler} className=" bg-gradient-to-tr from-color6 to-color7 font-ProtestG rounded-md w-full h-10">More Detail</button>
           {open && <div  className=" absolute  bg-black bg-opacity-30 backdrop-blur-sm bottom-0 right-0 rounded-sm w-full h-full top-0 flex items-center justify-center md:flex">
             <div className={`p-5 relative  ${open && "animate-appearance-in"} sm:w-3/4 m-1 bg-white text-xs sm:text-base rounded-lg shadow-xl`}>
                 <AiFillCloseCircle onClick={modalHandeler} className=" w-12 h-12 absolute right-5 top-5 hover:opacity-80 transition-all cursor-pointer" />
                  <div ref={contentDivRef} className="flex items-center justify-center flex-col flex-wrap">
                     
                     <ul className="flex flex-wrap items-center justify-center p-2 bg-color4 rounded-lg sm:w-4/5">
                       <li className=" m-3 w-full"><div className="flex items-center justify-center">
                       <img src={info.player.photo} className="rounded-full w-24 border-gray-700 p-3" alt="" />
                       <p className="">{info.player.name}</p>
                     </div></li>
                       <li className=" m-3 w-2/5">Nationality: {info.player.nationality}</li>
                       <li className=" m-3 w-2/5">Height: {info.player.height}</li>
                       <li className=" m-3 w-2/5">Age: {info.player.age}</li>
                       <li className=" m-3 w-2/5">Position: {info.statistics[0].games.position}</li>
                   </ul>
                   <div className="text-sm flex items-center justify-around md:w-3/4 flex-wrap">
                     <div className="flex items-center justify-around rounded-md mr-3 flex-col w-2/5 mt-2 bg-color4 h-28">
                        <h1 className=" text-base flex items-center sm:text-lg "><ImStatsBars className="m-2"/> Goal and Assist</h1>
                          <div>
                           <p>Goal: {info.statistics[0].goals.total}</p>
                           <p>Assist: {info.statistics[0].goals.assists}</p>
                          </div>
                     </div>
                     <div className="flex items-center justify-around rounded-md mr-3 flex-col w-2/5 mt-2 bg-color4 h-28">
                     <h1 className=" text-base flex items-center sm:text-lg "><TbCardsFilled className="m-2"/> Cards</h1>
                        <div>
                          <p>Yellow Card: {info.statistics[0].cards.yellow}</p>
                          <p>Red Card: {info.statistics[0].cards.red}</p>
                        </div>
                     </div>
                     <div className="flex items-center justify-around rounded-md mr-3 flex-col w-2/5 mt-2 bg-color4 h-28">
                     <h1 className=" text-base flex items-center sm:text-lg "><GiDuel className="m-2"/> Duels stats</h1>
                        <div>
                          <p>Total Duels: {info.statistics[0].duels.total}</p>
                          <p>Win Duels: {info.statistics[0].duels.won}</p>
                        </div>
                     </div>
                     <div className="flex items-center justify-around rounded-md mr-3 flex-col w-2/5 mt-2 bg-color4 h-28">
                     <h1 className=" text-base flex items-center sm:text-lg "><GiBurningPassion className="m-2"/> Dribbles stats</h1>
                        <div>
                           <p>Total Dribbles: {info.statistics[0].dribbles.attempts}</p>
                           <p>Successfull Dribbles: {info.statistics[0].dribbles.success}</p>
                        </div>
                     </div>
                     <div className="flex items-center justify-around rounded-md mr-3 flex-col w-2/5 mt-2 bg-color4 h-28">
                     <h1 className=" text-base flex items-center sm:text-lg "><RiCompasses2Line className="m-2"/> Pass stats</h1>
                        <div>
                           <p>Total Passes: {info.statistics[0].passes.total}</p>
                           <p>Key Passes: {info.statistics[0].passes.key}</p>
                           <p>Accuracy: {info.statistics[0].passes.accuracy}%</p>
                        </div>
                     </div>
                     <div className="flex items-center justify-around rounded-md mr-3 flex-col w-2/5 mt-2 bg-color4 h-28">
                     <h1 className=" text-base flex items-center sm:text-lg "><GiBurningRoundShot className="m-2"/> Shots</h1>
                        <div>
                           <p>Total Shots: {info.statistics[0].shots.total}</p>
                           <p>On Target Shots: {info.statistics[0].shots.on}</p>
                        </div>
                     </div>
                   </div>
                 </div>
             </div>
           </div>}
       </div>
    );
};

export default PlayerCard;
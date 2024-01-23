import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
const PlayerCard = ({info , color}) => {
    console.log(info);
    const [open , setOpen] = useState(false);
    const modalHandeler = ()=>{
      setOpen(!open)
    }
    return (
       <div className=" rounded-md p-2 w-60 h-40 m-4 flex flex-col items-center justify-around" style={{
           background: `linear-gradient(to top right, #292c35 , #292c35 , #292c35 ,${color ? color : '#000000'})`,
         }}>
           <div className="flex items-center justify-center w-full">
               <img className=" object-cover w-16 rounded-full mr-3" src={info.player.photo} alt="" />
               <div>{info.player.name}<p className="text-gray-400">{info.player.nationality}</p></div>
           </div>
           <button onClick={modalHandeler} className="bg-blue-500 rounded-md w-full h-10">More Detail</button>
           {open && <div className=" absolute  bg-black bg-opacity-30 backdrop-blur-sm bottom-0 right-0 rounded-sm w-full h-full top-0 flex items-center justify-center">
             <div className={`p-5 relative h-200  ${open && "animate-appearance-in"} w-3/4 bg-black rounded-lg bg-opacity-80 shadow-xl`}>
                 <AiFillCloseCircle onClick={modalHandeler} className=" w-12 h-12 absolute right-5 top-5 hover:opacity-80 transition-all cursor-pointer" />
                  <div className="flex items-center justify-center flex-col">
                     <div className="flex items-center justify-center">
                       <img src={info.player.photo} className="rounded-full w-24 border-gray-700 p-3" alt="" />
                       <p className="">{info.player.name}</p>
                     </div>
                     <ul className="flex flex-wrap items-center justify-evenly p-8 bg-gray-600 rounded-lg w-4/5">
                       <li className=" m-3">Nationality: {info.player.nationality}</li>
                       <li className=" m-3">Height: {info.player.height}</li>
                       <li className=" m-3">Age: {info.player.age}</li>
                       <li className=" m-3">Position: {info.statistics[0].games.position}</li>
                   </ul>
                   <div className="text-sm flex items-center justify-around w-full">
                     <div>
                         <p>Goal: {info.statistics[0].goals.total}</p>
                         <p>Assist: {info.statistics[0].goals.assists}</p>
                     </div>
                     <div>
                       <p>Yellow Card: {info.statistics[0].cards.yellow}</p>
                       <p>Red Card: {info.statistics[0].cards.red}</p>
                     </div>
                     <div>
                       <p>Total Duels: {info.statistics[0].duels.total}</p>
                       <p>Win Duels: {info.statistics[0].duels.won}</p>
                     </div>
                     <div>
                       <p>Total Dribbles: {info.statistics[0].dribbles.attempts}</p>
                       <p>Successfull Dribbles: {info.statistics[0].dribbles.success}</p>
                     </div>
                     <div>
                       <p>Total Passes: {info.statistics[0].passes.total}</p>
                       <p>Key Passes: {info.statistics[0].passes.key}</p>
                       <p>Accuracy: {info.statistics[0].passes.accuracy}%</p>
                     </div>
                     <div>
                       <p>Total Shots: {info.statistics[0].shots.total}</p>
                       <p>On Target Shots: {info.statistics[0].shots.on}</p>
                     </div>
                   </div>
                 </div>
             </div>
           </div>}
       </div>
    );
};

export default PlayerCard;
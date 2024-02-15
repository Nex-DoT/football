import { useState } from "react";
import LoginPage from "../models/meAccount/LoginPage";
import SignupPage from "../models/meAccount/SignupPage";
import png from "public/image/5.png";
import Image from "next/image";
const MyAccount = () => {
    const [selected , setSelected] =useState("login");
    const onchangeHandeler = (e)=>{
        setSelected(e.target.name)
    };
    return (
        <div className="flex items-center justify-center md:justify-between w-full">
            <div className="w-2/4 flex items-center justify-around bg-white shadow-sm h-screen skew-x-12">
                <div className=" bg-color4 w-64 rounded-md flex items-center justify-between flex-col pt-10 pb-5 h-200 shadow-lg  -skew-x-12">
                    <div className="flex w-56 items-center justify-between  h-12 rounded-full bg-white text-black font-Rubic p-2 relative">
                            <div className={`w-16 h-10 rounded-full transition-all bg-gradient-to-tr from-color6 to-color7 absolute bg-opacity-100 z-0 ${selected === "login" ? "left-5" : " left-32 w-20"}`}></div>
                        <div className="flex items-center justify-between w-full z-30">
                            <input type="button" value="Login" className=" w-1/2 h-10 flex items-center justify-center rounded-full text-sm cursor-pointer" name="login" onClick={onchangeHandeler} />
                            <div className=" w-1 h-6 bg-color3 bg-opacity-40 rounded-xl m-4"></div>
                            <input type="button" value="Sign-up" className="w-1/2 h-10 flex items-center justify-center rounded-full text-sm pr-2 cursor-pointer" name="signup" onClick={onchangeHandeler} />
                        </div>
                    </div>
                { selected === "login" ? <LoginPage/> : <SignupPage/>}
                </div>
            </div>
            {/* <div className=" flex flex-col justify-evenly items-center w-2/4 bg-opacity-50 bg-gradient-to-tr from-slate-800 to-zinc-600 h-screen -skew-x-12"> */}
                <div className=" hidden items-center flex-col justify-center md:flex">
                    <div className="rounded-full overflow-hidden shadow-lg border-5 border-zinc-800 border-dashed">
                        <Image className="" src={png} width={200} height={200}/>
                    </div>
                        <h2 className="text-2xl m-5 ">Login & Sign-up to enjoye more than before...</h2>
                        <ul className="w-2/4 list-disc m-5 text-gray-500">
                            <li className="m-3">Stay updated with your favorite team’s news and scores. Get personalized notifications here!</li>
                            <li className="m-3">Engage with fellow fans during live games. Join the conversation and share your passion for the game!</li>
                            <li className="m-3">Access to different chat rooms for different games, teams, or general sports discussions.</li>
                            <li className="m-3">Step into the world of football! Join now to dive into live scores, match schedules, player stats, and breaking football news.</li>
                        </ul>
                </div>
            {/* </div> */}
        </div>
    );
};

export default MyAccount;
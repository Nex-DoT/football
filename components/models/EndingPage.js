import Image from "next/image";
import { Button } from "@nextui-org/react";
import backdrop from "public/image/Backdrop.jpeg";
const EndingPage = () => {
    return (
        <div className=" w-full h-96  overflow-hidden relative flex items-center justify-start  flex-col">
            <svg className=" absolute top-0 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,96L1440,320L1440,0L0,0Z"></path></svg>            <h1 className=" italic text-2xl font-bold text-white"> Ready to take the next step? </h1>
            <p className=" pl-96 pr-96 z-10 font-Rubic pt-3">Thank you for your interest in service! We hope you found our landing page informative and helpful. We encourage you to learn more about service by exploring our website or contacting us today. We are confident that service can help you achieve your goals.</p>
            <button className=" mt-5 bg-gradient-to-tr from-color6 to-color7 p-2 w-24 rounded-md shadow-md font-ProtestG z-10">Home</button>
        </div>
    );
};

export default EndingPage;
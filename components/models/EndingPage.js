import Image from "next/image";
import { Button } from "@nextui-org/react";
import backdrop from "public/image/Backdrop.jpeg";
const EndingPage = () => {
    return (
        <div className=" w-full h-96  overflow-hidden relative flex items-center justify-center flex-col">
            <svg className=" absolute top-0 -z-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path fill="#273036" fill-opacity="1" d="M0,128L720,288L1440,32L1440,0L720,0L0,0Z"></path>
            </svg>
            <h1 className=" italic text-2xl font-bold text-white"> Ready to take the next step? </h1>
            <p className=" pl-96 pr-96 text-white">Thank you for your interest in service! We hope you found our landing page informative and helpful. We encourage you to learn more about service by exploring our website or contacting us today. We are confident that service can help you achieve your goals.</p>
            <Button size="lg" className="mt-10 z-40"variant="ghost" color="primary" >Home</Button>
        </div>
    );
};

export default EndingPage;
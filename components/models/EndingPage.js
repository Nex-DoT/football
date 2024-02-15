import Image from "next/image";
import { Button } from "@nextui-org/react";
import backdrop from "public/image/Backdrop.jpeg";

const EndingPage = () => {
  return (
    <div className="bg-cover bg-no-repeat bg-center w-full h-96 relative flex items-center justify-end pt-3 md:justify-center lg:justify-start flex-col">

      <svg className="absolute top-0 left-0 w-full hidden lg:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,96L1440,320L1440,0L0,0Z"></path></svg>
      <div className="container z-10 px-5 md:px-20 flex flex-col items-center justify-between sm:pb-8">
        <h1 className="text-2xl font-bold  text-center md:text-3xl">
          Ready to take the next step?
        </h1>
        <p className="text-center md:text-left md:text-lg mt-5 md:w-5/6 lg:w-2/3">
          Thank you for your interest in service! We hope you found our landing page
          informative and helpful. We encourage you to learn more about service by
          exploring our website or contacting us today. We are confident that
          service can help you achieve your goals.
        </p>
        <Button
          className="mt-5 bg-gradient-to-tr from-color6 to-color7 p-2 w-full md:w-auto rounded-md shadow-md font-ProtestG"
        >
          Home
        </Button>
      </div>
    </div>
  );
};

export default EndingPage;

import scrollGif from "public/image/scroll.gif"
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";
const TextModel = ({text}) => {
    const router = useRouter()
    return (
        <div className=" bg-color2  mt-20 relative flex items-center justify-center flex-col shadow-xl w-screen h-96">
            <div className=" absolute w-96 h-96 bg-gradient-to-tr from-color1 to-zinc-700 rotate-45 -z-10 -top-44 -right-48"></div>
            <div className=" absolute -top-20 left-1/2 -translate-x-1/2 z-30">
                <Image src={scrollGif} width={80} alt="scroll"/>
            </div>
            <h1 className="pt-6 pb-6 text-white text-4xl font-thin italic">Can t locate your favorite league?</h1>
            <p className="text-white"> No problem! Simply head over to our dedicated leagues page where you will find an extensive selection to choose from. Discover all the action you been missing out on .</p>
            <div className="flex items-center justify-center w-28 h-28">
                 <Button onClick={()=>{router.push("/league")}}>League finder</Button>
            </div>
            
            <div className=" absolute w-96 h-96 bg-gradient-to-tr from-color1 to-zinc-700 rotate-45 -z-10 -bottom-44 -left-48"></div>
        </div>
    );
};

export default TextModel;
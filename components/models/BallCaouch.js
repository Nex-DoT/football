import Image from "next/image";
import png from "public/image/2.webp";
import { Button } from "@nextui-org/react";
const BallCaouch = () => {
    return (
        <div className="h-200 w-full flex items-center justify-around md:flex-row flex-col">
            <Image src={png} className=" w-72 z-20 md:w-auto" width={700} height={80} alt="png"/>
            <div className="grid items-center justify-center gap-5">
                <h1 className=" text-3xl font-thin italic ">Player/Coach Stat Tracker</h1>
                <ul className="list-disc ml-10">
                    <li>Overall Record</li>
                    <li>Winning Percentage</li>
                    <li>Passing Yards</li>
                    <li>Passing Touchdowns</li>
                    <li>Receiving Touchdowns</li>
                </ul>
                <Button className="mt-5" color="success" variant="ghost">Search</Button>
            </div> 
        </div>
    );
};
export default BallCaouch;
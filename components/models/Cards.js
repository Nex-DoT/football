import Image from "next/image";
import { Button } from "@nextui-org/react";
const Card = ({ data }) => {
 

    return (
      <div className="card w-72 flex items-center justify-center flex-col h-150 rounded-md bg-gradient-to-tr from-color1 to-zinc-800 backdrop:blur-md shadow-lg transition-all hover:scale-105">
        <div className="flex flex-col items-center justify-center">
          <Image
              src={data.logo}
              height={90}
              alt={"fdsf"}
              width={90} />
              <h2 className="text-white m-auto mt-3 text-xl mb-8 font-bold">{data.name}</h2>
              
              <ul className=" list-disc text-white  text-sm  ml-7 pr-2 font-thin">
                {data.text.map(( items , index) => <li className=" text-xs" key={index}>{items}</li>)}
              </ul> 
             
              <Button className="mt-5" color="success" variant="ghost">Details</Button>
        </div>
      </div>
    );

};

export default Card;
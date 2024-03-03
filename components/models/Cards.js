import Image from "next/image";
import Link from "next/link";
const Card = ({ data }) => {
 
console.log(data);
    return (
      <div className="card w-72 flex items-center justify-center flex-col h-150 rounded-md  bg-color4 backdrop:blur-md shadow-lg transition-all hover:scale-105">
        <div className="flex flex-col items-center justify-center">
          <Image
              src={data.logo}
              height={90}
              alt={"fdsf"}
              width={90} />
              <h2 className=" m-auto mt-3 text-xl mb-8 font-bold">{data.name}</h2>
              
              <ul className=" list-disc  text-sm  ml-7 pr-2 font-thin">
                {data.text.map(( items , index) => <li className=" text-xs" key={index}>{items}</li>)}
              </ul> 
             
              <button className=" mt-5 bg-gradient-to-tr from-color6 to-color7 p-2 w-24 rounded-md shadow-md font-ProtestG"><Link href={data.id}>Details</Link></button>
        </div>
      </div>
    );

};

export default Card;
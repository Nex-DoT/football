import Image from "next/image";

const CardItems = ({data}) => {
    console.log(data);
    return (
        <div className=" w-80 h-32 bg-slate-100 rounded-md shadow-small mb-3 flex items-center mt-3">
            <div className="flex items-center justify-start ml-3">
                <Image className=" aspect-square object-contain mr-2" src={data.league.logo} height={60} width={60}/>
                {data.league.name}
            </div>
        </div>
    );
};

export default CardItems;
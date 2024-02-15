import Image from "next/image";

const HeaderOfTeam = ({data}) => {
    console.log(data);
    return (
        <div className=" relative z-0">
            <div className="z-70 absolute m-14 shadow-sm p-2 rounded-lg bg-color4 bg-opacity-80 sm:w-auto">
                <div className=" flex items-center justify-start">
                    <Image className="w-24" width={300} ref={data.team.logo} alt="logo" />
                    <div className="flex flex-col items-start justify-center ml-4">
                        <div className=" flex items-center justify-around bg-color1 bg-opacity-25 rounded-md w-24 h-10">
                            <Image className="w-8 aspect-square" width={300} ref={data.league.logo} alt="png" /> 
                            <Image className="w-8" width={300} ref={data.league.flag} alt="png" /> 
                        </div>
                        <p className="text-sm font-bold pl-1 sm:text-xl">{data.team.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderOfTeam;

const HeaderOfTeam = ({data}) => {
    console.log(data);
    return (
        <div className=" relative z-0">
            <div className="z-70 absolute m-14 shadow-sm p-2 rounded-lg bg-color4 bg-opacity-80 sm:w-auto">
                <div className=" flex items-center justify-start">
                    <img className="w-24" src={data.team.logo} alt="logo" />
                    <div className="flex flex-col items-start justify-center ml-4">
                        <div className=" flex items-center justify-around bg-color1 bg-opacity-25 rounded-md w-24 h-10">
                            <img className="w-8 aspect-square" src={data.league.logo} alt="" /> 
                            <img className="w-8" src={data.league.flag} alt="" /> 
                        </div>
                        <p className="text-sm font-bold pl-1 sm:text-xl">{data.team.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderOfTeam;
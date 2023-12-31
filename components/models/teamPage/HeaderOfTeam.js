
const HeaderOfTeam = ({data}) => {
    console.log(data);
    return (
        <div className=" relative z-0">
            <svg className=" absolute top-0 -z-0 opacity-60"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#273036" fill-opacity="1" d="M0,160L288,288L576,32L864,96L1152,64L1440,192L1440,0L1152,0L864,0L576,0L288,0L0,0Z"></path>
            </svg>
            <div className="z-70 absolute m-14">
                <div className=" flex items-center justify-start">
                    <img className="w-24" src={data.team.logo} alt="logo" />
                    <div className="flex flex-col items-start justify-center ml-4">
                        <div className=" flex items-center justify-around bg-color4 bg-opacity-25 rounded-md w-24 h-10">
                            <img className="w-8" src={data.league.logo} alt="" /> 
                            <img className="w-8" src={data.league.flag} alt="" /> 
                        </div>
                        <p className="text-white text-xl pl-1">{data.team.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderOfTeam;

const GoalDetail = ({data}) => {
    const goals = data.goals
    return (
        <div className="flex items-center justify-center flex-col flex-wrap">
                <h1 className=" flex items-center justify-around text-white font-semibold text-2xl mt-8 "> <img className=" w-8 mr-2" src={data.team.logo} alt="" /> {data.team.name} Goals Stats</h1>
                <div className="flex items-center justify-center flex-col mt-5">
                    <div className="bg-green-500 flex items-center justify-center m-5 bg-opacity-50 rounded-md shadow-md p-5">
                         <div className="flex items-center justify-center flex-col m-3 ">
                            <h2 className="text-xl">Total :</h2>
                            <div>
                              <p> per total games : {goals.for.total.total} each game</p>
                              <p> per Home games : {goals.for.total.home} each game</p>
                              <p> per Away games : {goals.for.total.away} each game</p>
                            </div>
                         </div>
                         <div className="flex items-center justify-center flex-col m-3 ">
                            <h2 className="text-xl">Avrage :</h2>
                            <div>
                              <p> Total : {goals.for.average.total} each game</p>
                              <p> Home : {goals.for.average.home} each game</p>
                              <p> Away : {goals.for.average.away} each game</p>
                            </div>
                         </div>
                    </div>
                </div>
               
                <div className="flex items-center justify-center flex-col mt-5">
                    <h1 className="text-2xl font-thin">Received Goals :</h1>
                    <div className="bg-red-300 flex items-center justify-center m-5 bg-opacity-30 rounded-md shadow-md p-5">
                         <div className="flex items-center justify-center flex-col m-3 ">
                            <h2 className="text-xl">Total :</h2>
                            <div>
                              <p> per total games : {goals.against.total.total} each game</p>
                              <p> per Home games : {goals.against.total.home} each game</p>
                              <p> per Away games : {goals.against.total.away} each game</p>
                            </div>
                         </div>
                         <div className="flex items-center justify-center flex-col m-3 ">
                            <h2 className="text-xl">Avrage :</h2>
                            <div>
                              <p> Total : {goals.against.average.total} each game</p>
                              <p> Home : {goals.against.average.home} each game</p>
                              <p> Away : {goals.against.average.away} each game</p>
                            </div>
                         </div>
                    </div>
                </div>
        </div>
    );
};

export default GoalDetail;
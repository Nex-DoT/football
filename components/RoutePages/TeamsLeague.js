import TeamCard from "../models/teamPage/TeamCard";
const TeamsLeague = ({data , route}) => {
    console.log(data);
    return (
        <div className=" w-3/4 m-auto flex items-center justify-around flex-wrap">
            {data.map( item => <TeamCard key={item.team.id} data={item} route={route}/>)}
        </div>
    );
};

export default TeamsLeague;
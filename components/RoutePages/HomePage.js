import WelcomingComponent from "../models/WelcomingComponent";
import ListCards from "../models/ListCards";
import BallCaouch from "../models/BallCaouch";
const HomePage = ({league , teams}) => {
    const LeagueData = {
        type: "league",
        league: league ,
        text: "The World's Best Football Leagues: A Comparison "
    }
    const TeamData = {
        type: "team",
        teams: teams ,
        text: "The three most popular football teams in the world"
    }
    console.log(TeamData);
    return (
        <div>
            <WelcomingComponent ></WelcomingComponent>
            <ListCards data={LeagueData}></ListCards>
            <BallCaouch></BallCaouch>
            <ListCards data={TeamData}></ListCards>
        </div>
    );
};

export default HomePage;
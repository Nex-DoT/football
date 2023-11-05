import WelcomingComponent from "../models/WelcomingComponent";
import ListCards from "../models/ListCards";
import BallCaouch from "../models/BallCaouch";
const HomePage = ({league}) => {
    const LeagueData = {
        league: league ,
        text: "The World's Best Football Leagues: A Comparison "
    }
    const TeamData = {
        league: league ,
        text: ""
    }
    return (
        <div>
            <WelcomingComponent ></WelcomingComponent>
            <ListCards league={league}></ListCards>
            <BallCaouch></BallCaouch>
            <ListCards league={league}></ListCards>
        </div>
    );
};

export default HomePage;
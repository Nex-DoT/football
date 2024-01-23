import WelcomingComponent from "../models/WelcomingComponent";
import ListCards from "../models/ListCards";
import BallCaouch from "../models/BallCaouch";
import EndingPage from "../models/EndingPage";
import { data } from "../../function/staticData";
const HomePage = () => {
    const information = data()
    return (
        <div>
            <WelcomingComponent ></WelcomingComponent>
            <ListCards data={information.league}></ListCards>
            <BallCaouch></BallCaouch>
            <ListCards data={information.team}></ListCards>
            <EndingPage/>
        </div>
    );
};

export default HomePage;
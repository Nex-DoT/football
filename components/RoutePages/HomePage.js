import WelcomingComponent from "../models/WelcomingComponent";
import ListCards from "../models/ListCards";
import BallCaouch from "../models/BallCaouch";
const HomePage = ({league}) => {
    return (
        <div>
            <WelcomingComponent ></WelcomingComponent>
            <ListCards league={league}></ListCards>
            <BallCaouch></BallCaouch>
        </div>
    );
};

export default HomePage;
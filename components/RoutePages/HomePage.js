import WelcomingComponent from "../models/WelcomingComponent";
import ListCards from "../models/ListCards";
const HomePage = ({league}) => {
    return (
        <div>
            <WelcomingComponent ></WelcomingComponent>
            <ListCards league={league}></ListCards>
        </div>
    );
};

export default HomePage;
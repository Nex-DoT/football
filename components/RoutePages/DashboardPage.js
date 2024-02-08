import Menu from "../models/dashboard/Menu";
import { useState } from "react";
import User from "../models/dashboard/User";
import FavoriteTeam from "../models/dashboard/FavoriteTeam";
import Notification from "../models/dashboard/Notification";
const DashboardPage = ({data}) => {
    const [active , setActive] = useState({
        User: true,
        Heart: false,
        Bell: false
    })
    const onClickHandeler = ( name) => {
        setActive( {User: false,
                    Heart: false,
                    Bell: false , [name]: true} )
    };
    return (
        <div className="flex">
           <Menu active={active} setActive={active} onClickHandeler={onClickHandeler}/> 
           {active.User && <User data={data}/>}
           {active.Heart && <FavoriteTeam/>}
           {active.Bell && <Notification/>}
        </div>
    );
};

export default DashboardPage;
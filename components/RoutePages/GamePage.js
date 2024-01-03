import { useState } from "react";
import { topleague } from "../../function/staticData";
import Card from "../models/gamesPage/Card";
const GamePage = () => {
    const data = topleague();
    return (
        <div>
            {data.map(item => <Card data={item}/>)}
        </div>
    );
};

export default GamePage;
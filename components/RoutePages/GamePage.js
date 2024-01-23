import { useState } from "react";
import { topleague } from "../../function/staticData";
import Card from "../models/gamesPage/Card";
const GamePage = ({data}) => {
    const newdata = data.response  ;
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-full m-7 p-5 flex items-center justify-center">
                <h3 className="text-3xl">{newdata[0].league.name} Fixtures for the Next 7 Days :</h3>
            </div>
            <div className="w-3/4 flex items-center justify-center flex-wrap">
                {newdata.map(item => <Card data={item}/>)}
            </div>
        </div>
    );
};

export default GamePage;
import {Select, SelectItem} from "@nextui-org/react";
import {leageuValue} from "./dataOption.js";
import { useState } from "react";

const LeagueSelect = () => {
    const [league , setLeague] = useState({value: "premierleague" , label: "Premier League"});
    console.log(league);
    const onChangeHandeler = (e) => {
        console.log(e);
        const text = e.target.value.split(" ") ;
        const nText = `${text[0]} ${text[1]}`
        setLeague({value: nText.toLowerCase() , label: nText})
    };
    return (
        <div className=" flex items-center justify-around mt-10">
            <div>
                <h1 className=" text-3xl font-semibold">Latest news for {league.label}</h1>
                <hr className=" border-2 rounded-md border-blue-100 mt-1"/>
            </div>
            <Select 
                label="Select Your Favorite League" 
                className="max-w-xs"
                // color="primary"
                value={league.value}
                onChange={e => onChangeHandeler(e)}
                >
                {leageuValue.map((animal) => (
                <SelectItem key={animal.value[0]} value={animal.value}>
                    {animal.value[0]}
                </SelectItem>
                ))}
            </Select>
        </div>
    );
};

export default LeagueSelect;
import {Select, SelectItem} from "@nextui-org/react";
import {leageuValue} from "./dataOption.js";
import { useState } from "react";
import { useRouter } from "next/router.js";
const LiveSelect = ({league , data}) => {
    const router = useRouter()
    console.log(league);
    console.log(data);
    const onChangeHandeler = (e) => {
        console.log(e);
        router.push(`/tabels/${e.target.value}`)
    };
    return (
        <div className=" flex items-center justify-around mt-10">
            <div>
                <h1 className=" text-3xl font-semibold">Latest Tabel in {data[0].league.name}</h1>
                <hr className=" border-2 rounded-md border-blue-100 mt-1"/>
            </div>
            <Select 
                label="Select Your Favorite League" 
                className="max-w-xs"
                // color="primary"
                value={league}
                onChange={e => onChangeHandeler(e)}
                >
                {leageuValue.map((animal) => (
                <SelectItem key={animal.value} value={[animal.label , animal.value]}>
                    {animal.label}
                    {console.log(animal)}
                </SelectItem>
                ))}
            </Select>
        </div>
    );
};

export default LiveSelect;
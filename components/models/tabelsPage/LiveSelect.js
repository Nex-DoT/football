import {Select, SelectItem} from "@nextui-org/react";
import {leageuValue} from "./dataOption.js";
import { useState } from "react";
import { useRouter } from "next/router.js";
const LiveSelect = ({league , data}) => {
    const router = useRouter()
    const onChangeHandeler = (e) => {
        router.push(`/tabels/${e.target.value}`)
    };
    return (
        <div className=" flex items-center justify-around mt-10">
            <div>
                <h1 className=" text-3xl font-semibold flex items-center justify-center"><img src={data[0].league.logo} className=" w-12 object-cover mr-2" alt="" /> {data[0].league.name} Tabel </h1>
                <hr className=" border-2 rounded-md border-color2 border-opacity-50 mt-1"/>
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
                </SelectItem>
                ))}
            </Select>
        </div>
    );
};

export default LiveSelect;
import {Select, SelectItem} from "@nextui-org/react";
import {leageuValue} from "./dataOption.js";
import Image from "next/image.js";
import { useState } from "react";
import { useRouter } from "next/router.js";
const LiveSelect = ({league , data}) => {
    const router = useRouter()
    const onChangeHandeler = (e) => {
        router.push(`/tabels/${e.target.value}`)
    };
    return (
        <div className=" flex items-center justify-around mt-10 flex-wrap">
            <div>
                <h1 className=" text-2xl sm:text-3xl font-semibold flex items-center justify-center"><Image src={data[0].league.logo} className=" w-12 mr-2 aspect-square object-contain" width={300} alt="png" /> {data[0].league.name} Tabel </h1>
                <hr className=" border-2 rounded-md border-color3  mt-1"/>
            </div>
            <Select 
                label="Select Your Favorite League" 
                className=" w-60 mt-4 bg-white"
                size="sm"
                color="danger"
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
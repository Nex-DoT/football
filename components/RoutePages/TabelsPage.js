import TextModel from "../models/TextModel";
import LiveSelect from "../models/tabelsPage/LiveSelect";
import { Button } from "@nextui-org/react";
import TabelNew from "../models/tabelsPage/TabelNew";
import { useRef , useState } from "react";
const TabelsPage = ({league , setLeague , data}) => {
    const handleScroll = () => {
       
      };
    
    return (
        <div className="w-full">
            <LiveSelect league={league} setLeague={setLeague} data={data}/>
            <TabelNew data={data}/>
        </div>
    );
};

export default TabelsPage;
import TextModel from "../models/TextModel";
import LiveSelect from "../models/tabelsPage/LiveSelect";
import TabelNew from "../models/tabelsPage/TabelNew";
import { useRef , useState } from "react";
const TabelsPage = ({league , setLeague , data}) => {
    const handleScroll = () => {
       
      };
    
    return (
        <div>
            <LiveSelect league={league} setLeague={setLeague} data={data}/>
            <TabelNew data={data}/>
            <div  className=" h-200" >
              <TextModel></TextModel>
            </div>
        </div>
    );
};

export default TabelsPage;
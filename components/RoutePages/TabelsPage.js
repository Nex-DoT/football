import TextModel from "../models/TextModel";
import LiveSelect from "../models/tabelsPage/LiveSelect";
import TabelNew from "../models/tabelsPage/TabelNew";
import { useRef , useState } from "react";
const TabelsPage = ({league , setLeague , data}) => {
    const contentDivRef = useRef(null);
    const handleScroll = () => {
        if (contentDivRef.current) {
          // Get the current position of the div
          const divPosition = contentDivRef.current.getBoundingClientRect().top;
    
          // Calculate scroll value based on div position
          const scrollValue = divPosition ;
    
          // Perform the scroll
          window.scrollBy({ top: scrollValue, behavior: 'smooth' });
        }
      };
    
    return (
        <div>
            <button onClick={handleScroll}>اسکرول</button>
            <LiveSelect league={league} setLeague={setLeague} data={data}/>
            <TabelNew data={data}/>
            <div ref={contentDivRef} className=" h-200" >
              <TextModel></TextModel>
            </div>
        </div>
    );
};

export default TabelsPage;
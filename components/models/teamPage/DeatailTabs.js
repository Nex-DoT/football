import React from "react";
import LineUp from "./LineUp.js";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import GoalDetail from "./GoalDetail.js";

export default function DeatailTabs({data , color}) {
  return (
    <div className="flex w-full flex-col relative z-0">
    <Tabs 
      aria-label="Options" 
      color="primary" 
      variant="underlined"
      classNames={{
        tabList: "gap-6 w-3/4  m-auto  rounded-none p-0 border-b border-divider",
        cursor: "w-full bg-[#22d3ee]",
        tab: "max-w-fit px-0 h-12",
        tabContent: "group-data-[selected=true]:text-[#06b6d4]"
      }}
    >
       <Tab key="LineUP" title="Line Up">
        <div  className=" m-auto flex  items-center justify-between flex-col bg-color4 bg-opacity-10 backdrop-blur-md shadow-md rounded-md w-5/6">
            <h1 className=" flex items-center justify-around text-white font-semibold text-2xl mt-8"> <img className=" w-8 mr-2" src={data.team.logo} alt="" /> {data.team.name} Line Up</h1>
            <div className=" flex items-center justify-around mt-16 flex-wrap">
              {data.lineups.map(items => <LineUp color={color} data={items} key={items.formation}/>)}
            </div>

        </div>
        </Tab>
        <Tab key="Goals" title="Goals Stats">
            <div className=" text-white m-auto flex  items-center justify-between flex-col bg-color4 bg-opacity-10 backdrop-blur-md shadow-md rounded-md w-5/6">
                  <GoalDetail data={data}/>
            </div> 
        </Tab>

    </Tabs>
  </div>  
  );
}

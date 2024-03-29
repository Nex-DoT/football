import React from "react";
import LineUp from "./LineUp.js";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import GoalDetail from "./GoalDetail.js";
import PlayerCard from "./PlayerCard.js";
import { useState } from "react";
import Image from "next/image.js";
export default function DeatailTabs({data , color , players}) {

  return (
    <div className="flex w-full flex-col relative z-0">
    <Tabs 
      className=" font-Anton"
      aria-label="Options" 
      color="danger" 
      variant="underlined"
      classNames={{
        tabList: "gap-6   m-auto  rounded-none p-0 border-b border-divider",
        cursor: "w-full bg-[#22d3ee]",
        tab: "max-w-fit px-0 h-12 text-black ",
        tabContent: "group-data-[selected=true]:text-[#000]"
      }}
    >
       <Tab key="LineUP" title="Line Up">
        <div  className=" m-auto flex  items-center justify-between flex-col bg-white shadow-md rounded-md sm:w-5/6">
            <h1 className=" flex items-center justify-around font-ProtestG text-2xl mt-8"> <Image className=" w-8 mr-2" src={data.team.logo} width={300} height={300} alt="png" /> {data.team.name} Line Up</h1>
            <div className=" flex items-center justify-around mt-16 flex-wrap">
              {data.lineups.map(items => <LineUp color={color} data={items} key={items.formation}/>)}
            </div>

        </div>
        </Tab>
        <Tab key="Goals" title="Goals Stats">
            <div className="m-auto flex  items-center justify-between flex-col bg-white shadow-md rounded-md sm:w-5/6">
                  <GoalDetail data={data}/>
            </div> 
        </Tab>
        <Tab key="Players" title="Players">
            <div className="m-auto flex  items-center justify-center sm:justify-between flex-wrap bg-white shadow-md rounded-md md:w-5/6">
                  {players.map((items , index) => <PlayerCard key={index} info={items} color={color}/>)}
            </div> 
        </Tab>
    </Tabs>
  </div>  
  );
}

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@nextui-org/react";
const Card = ({ league }) => {
  if (league[0].league){
    const Url = league[0].league.logo;
    return (
      <div className="card w-72 flex items-center justify-center flex-col h-150 rounded-md bg-gradient-to-tr from-color1 to-zinc-800 backdrop:blur-md shadow-lg transition-all hover:scale-105">
        <div className="flex flex-col items-center justify-center">
          <Image
              className={league[0].league.name === "Serie A" && "h-16 w-10"}
              src={Url}
              height={90}
              alt={"fdsf"}
              width={90} />
              <h2 className="text-white m-auto mt-3 text-xl mb-8 font-bold">{league[0].league.name}</h2>
              { league[0].league.name === "Premier League" 
              && 
              <ul className=" list-disc text-white  text-sm  ml-7 pr-2 font-thin">
                <li>Average Opta Power Ranking: 87.1</li>
                <li>Most popular football league in the world</li>
                <li>Home to some of the biggest clubs in the world, including Manchester City, Liverpool, Arsenal, and Manchester United</li>
                <li>Very competitive league with close matches throughout the season</li>
                <li>Exciting and attacking style of play</li>
              </ul> }
              { league[0].league.name === "La Liga" 
              && 
              <ul className=" list-disc text-white  text-sm  ml-7 pr-2">
                <li>Average Opta Power Ranking: 83.43</li>
                <li>Second most popular football league in the world</li>
                <li>Home to two of the biggest clubs in the world, Real Madrid and Barcelona</li>
                <li>Very competitive league with close matches throughout the season</li>
                <li>Technical and tactical style of play</li>
              </ul> }
              { league[0].league.name === "Serie A" 
              && 
              <ul className=" list-disc text-white  text-sm  ml-7 pr-2">
                <li>Average Opta Power Ranking: 83.46</li>
                <li>Third most popular football league in the world</li>
                <li>Home to some of the biggest clubs in the world, including Juventus, Inter Milan, and AC Milan</li>
                <li>Very competitive league with close matches throughout the season</li>
                <li>Defensive and tactical style of play</li>
              </ul> }
              <Button className="mt-5" color="success" variant="ghost">Details</Button>
        </div>
      </div>
    );
  }else{
    const Url = league.team.logo;
    return (
      <div className="card w-72 flex items-center justify-center flex-col h-150 rounded-md bg-gradient-to-tr from-color1 to-zinc-800 backdrop:blur-md shadow-lg transition-all hover:scale-105">
        <div className="flex flex-col items-center justify-center">
          <Image
              className={league[0].league.name === "Serie A" && "h-16 w-10"}
              src={Url}
              height={90}
              alt={"fdsf"}
              width={90} />
              <h2 className="text-white m-auto mt-3 text-xl mb-8 font-bold">{league.team.name}</h2>
              { league.team.name === "Barclona" 
              && 
              <ul className=" list-disc text-white  text-sm  ml-7 pr-2 font-thin">
                <li>Spanish La Liga</li>
                <li>Home to some of the biggest names in football, including Lionel Messi, Pedri, and Robert Lewandowski</li>
                <li>Known for their attractive and attacking style of play, which has been dubbed "tiki-taka"</li>
                <li>One of the most successful clubs in Spanish football, with 26 La Liga titles and five Champions League titles</li>
              </ul> }
              { league.team.name === "Real Madrid" 
              && 
              <ul className=" list-disc text-white  text-sm  ml-7 pr-2">
                <li>Spanish La Liga</li>
                <li>Winners of the 2022-23 Champions League</li>
                <li>Home to some of the best players in the world, including Karim Benzema, Luka Modric, and Vinícius Júnior</li>
                <li>One of the most successful clubs in football history, with 14 Champions League titles</li>
              </ul> }
              { league.team.name === "Manchester United" 
              && 
              <ul className=" list-disc text-white  text-sm  ml-7 pr-2">
                <li>English Premier League</li>
                <li>2021-22 Premier League runners-up</li>
                <li>Known for their passionate fan base and their tradition of playing attacking football</li>
                <li>One of the most successful clubs in English football, with 20 Premier League titles and three Champions League titles</li>
              </ul> }
              <Button className="mt-5" color="success" variant="ghost">Details</Button>
        </div>
      </div>
    )
}

};

export default Card;
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import CardItems from "./CardItems";
import Image from "next/image";
const TabelNew = ({data}) => {
    const standings = data[0].league.standings[0];
    const columns = [
      {
        key: "rank",
        label: "Rank",
      },
      {
        key: "team",
        label: "Team",
      },
      {
        key: "pts",
        label: "PTS",
      },
      {
        key: "w",
        label: "W",
      },
      {
        key: "d",
        label: "D",
      },
      {
        key: "l",
        label: "L",
      },
      {
        key: "form",
        label: "Form",
      },
      {
        key: "gd",
        label: "GD",
      },
    ];
    return (
         <div className="w-full felx items-center justify-center m-auto mt-5 mb-5 pt-5 pb-5">
            <Table className="w-full sm:w-3/4 m-auto" isHeaderSticky aria-label="Example table with dynamic content">
              <TableHeader>
                {columns.map(column => <TableColumn className=" text-start" key={column.key}>{column.label}</TableColumn>)}
              </TableHeader>
              <TableBody items={standings}>
                {(items)=>(
                    <TableRow className="text-xs" key={items.rank}>
                    <TableCell>{items.rank}</TableCell>
                    <TableCell className="flex items-center justify-start"><Image className="aspect-square object-contain mr-2" src={items.team.logo} width={30} alt="logo" height={30} />{items.team.name}</TableCell>
                    <TableCell>{items.points}</TableCell>
                    <TableCell>{items.all.win}</TableCell>
                    <TableCell>{items.all.draw}</TableCell>
                    <TableCell>{items.all.lose}</TableCell>
                    <TableCell className="">{items.form}</TableCell>
                    <TableCell>{items.goalsDiff}</TableCell>
                </TableRow>
                )}
              </TableBody>
          </Table>
        </div>
    );
};

export default TabelNew;


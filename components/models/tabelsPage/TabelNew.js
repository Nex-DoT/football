import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";import Card from "./Card";
const TabelNew = ({data}) => {
    const standings = data[0].league.standings[0];
    console.log(standings);
    return (
         <div className=" w-3/4 m-auto">
            <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Rank</TableColumn>
        <TableColumn>Team</TableColumn>
        <TableColumn>PTS</TableColumn>
        <TableColumn>W</TableColumn>
        <TableColumn>D</TableColumn>
        <TableColumn>L</TableColumn>
        <TableColumn>Form</TableColumn>
        <TableColumn>GD</TableColumn>
      </TableHeader>
      <TableBody items={standings}>
        {(items)=>(
            <TableRow key={items.rank}>

            </TableRow>
        )}
      </TableBody>
    </Table>
        </div>
    );
};

export default TabelNew;


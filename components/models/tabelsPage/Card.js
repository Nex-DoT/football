import { TableRow , TableCell } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';

const Card = ({data}) => {
    console.log(data);
    const {rank , points , goalsDiff ,form } = data;
    console.log(rank , points);
    return (
         <TableRow key={rank}>
             <TableCell>{rank}</TableCell>
             <TableCell className="flex items-center justify-center"> {data.team.name}</TableCell>
             <TableCell>{points}</TableCell>
             <TableCell>{data.all.win}</TableCell>
             <TableCell>{data.all.draw}</TableCell>
             <TableCell>{data.all.lose}</TableCell>
             <TableCell>{form}</TableCell>
             <TableCell>{goalsDiff}</TableCell>
         </TableRow>
    );
};

export default Card;
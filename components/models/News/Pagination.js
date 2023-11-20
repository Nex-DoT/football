import React from 'react';
import {Pagination} from "@nextui-org/react";
const Pagination1 = () => {
    return (
        <div className=' flex items-center justify-center w-full'>
             <Pagination isCompact showControls total={40} initialPage={1} />
        </div>
    );
};

export default Pagination1;
import {Button} from "@nextui-org/react";
import { useState } from "react";
import MyAccount from "../../components/RoutePages/MyAccount";
const index = () => {
    return (
        <div className=" h-screen flex items-center justify-center w-full">
            <MyAccount/>
        </div>
    );
};

export default index;
import { useState } from "react";
import LeagueSelect from "../models/News/LeagueSelect";
import Pagination1 from "../models/News/Pagination";
const NewsPage = () => {
    return (
        <div className="m-auto w-3/4">
            <LeagueSelect></LeagueSelect>
            <Pagination1></Pagination1>
        </div>
    );
};

export default NewsPage;
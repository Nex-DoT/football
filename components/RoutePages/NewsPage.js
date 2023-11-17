import { useState } from "react";

const NewsPage = () => {
    const [name , setName] = useState("La Liga");
    return (
        <div className="m-auto w-3/4">
            <h2 className=" text-3xl">{name} News</h2>
        </div>
    );
};

export default NewsPage;
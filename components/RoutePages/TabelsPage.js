import LiveSelect from "../models/tabelsPage/LiveSelect";
import TabelNew from "../models/tabelsPage/TabelNew";

const TabelsPage = ({league , setLeague , data}) => {
    return (
        <div>
            <LiveSelect league={league} setLeague={setLeague} data={data}/>
            <TabelNew data={data}/>
        </div>
    );
};

export default TabelsPage;
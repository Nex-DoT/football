import Image from "next/image";

const CardItems = ({data}) => {
    return (
        <div>
            <div>
                <Image src={data.laegue.logo} height={60} width={60}/>
            </div>
        </div>
    );
};

export default CardItems;
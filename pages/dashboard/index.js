const index = () => {
    return (
        <div>
            Dashbord is here
        </div>
    );
};

export default index;

export async function getServerSideProps(){
    const text = "fs.readFile   lfkjs ljlkfsnlk";
    return {
        props: {text}
    }
}
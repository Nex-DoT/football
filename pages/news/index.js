import NewsPage from "../../components/RoutePages/NewsPage";

const index = ({result}) => {
    console.log(result);
    return (
        <NewsPage/>
    );
};

export default index;

export async function getServerSideProps(){
    const url = 'https://football98.p.rapidapi.com/premierleague/news';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a3a01bad39msh01b2c3fc1dbc3bbp1ad82ejsnc6df2f8db0ea',
            'X-RapidAPI-Host': 'football98.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return {
            props:{result}
        }
    } catch (error) {
        console.error(error);
    }
};
import NewsPage from "../../components/RoutePages/GamePage";

const index = () => {
    return (
        <NewsPage/>
    );
};

export default index;

export async function getServerSideProps(){
    const url = 'https://api-football-beta.p.rapidapi.com/sidelined?player=276';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c3cb3e2fa7msh47f7d429567cb11p13af7bjsnf69b82aefbb8',
		'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    return {
        props: {result}
    }
} catch (error) {
	console.error(error);
}
};
import HomePage from '/components/RoutePages/HomePage'
export default function Home({result}) {
  console.log(result.response);
  const England = result.response.filter(item => item.league.name === "Premier League" && item.country.name === "England"); 
  console.log(England);
  return (
    <>
      <HomePage league={England}/>
    </>
  )
}
export async function getServerSideProps(){
  const url = 'https://api-football-beta.p.rapidapi.com/leagues';
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
}
import HomePage from '/components/RoutePages/HomePage'
export default function Home() {
  // console.log(leagues);
  // const teams = [ data[1].response, data[2].response , data[3].response ];
  return (
    <>
      <HomePage/>
    </>
  )
}
// export async function getServerSideProps() {
//     const urls = [
//       'https://api-football-beta.p.rapidapi.com/leagues?type=league',
//       'https://api-football-beta.p.rapidapi.com/teams?name=Barcelona',
//       'https://api-football-beta.p.rapidapi.com/teams?name=Manchester%20United',
//       'https://api-football-beta.p.rapidapi.com/teams?name=Real%20Madrid',
//     ];
  
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': 'c3cb3e2fa7msh47f7d429567cb11p13af7bjsnf69b82aefbb8',
//         'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com',
//       },
//     };
  
//     try {
//       const responses = await Promise.all(urls.map(async (url) => await fetch(url, options)));
//       const data = await Promise.all(responses.map(async (response) => await response.json()));
//       console.log(data);
//       return {
//         props: { data },
//       };
//     } catch (error) {
//       console.error(error);
//       // Handle the error here
//     }
  
// }
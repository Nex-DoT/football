import Image from 'next/image'
import HomePage from '@/components/RoutePages/HomePage'
export default function Home({result}) {
  console.log(result);
  return (
    <>
      <HomePage/>
    </>
  )
}
// 4c1bfdd674c9406cbf36c1541631c29b API TOKEN
export async function getServerSideProps(){
  const url = 'https://api-football-beta.p.rapidapi.com/players/topscorers?season=2023&league=39';
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
    return{
      props: {result}
    }
  } catch (error) {
    console.error(error);
  }
}
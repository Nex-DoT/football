import React, { useState } from 'react';
import { useRouter } from 'next/router';
import TabelsPage from '../../components/RoutePages/TabelsPage';
const league = ({result}) => {
    const router = useRouter();
    const {league , setLeague } = useState(router.query.leagueName);
    console.log(router.query);
    console.log(result);
    return (
        <div>
            {router.query.leagueName}
            <TabelsPage league={league} setLeague={setLeague}/>
        </div>
    );
};

export default league;
export async function getServerSideProps({params}){
    const data = params.leageuName
    console.log(data);
    const url = `https://api-football-beta.p.rapidapi.com/leagues?id=${data}`;
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
            props:{
                result
            }
        }
    } catch (error) {
        console.error(error);
    }
}
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import TabelsPage from '../../components/RoutePages/TabelsPage';
const league = ({result}) => {
    const router = useRouter();
    const {league , setLeague } = useState(router.query.leagueName);

    return (
        <div>
            <TabelsPage data={result} league={league} setLeague={setLeague}/>
        </div>
    );
};

export default league;
export async function getServerSideProps({params}){
    const data = params.leageuName
    const url = `https://api-football-beta.p.rapidapi.com/standings?season=2023&league=${data}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c3cb3e2fa7msh47f7d429567cb11p13af7bjsnf69b82aefbb8',
            'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        const result = data.response
        return{
            props:{
                result
            }
        }
    } catch (error) {
        console.error(error);
    }
}
import TeamsLeague from "../../components/RoutePages/TeamsLeague";
const leagueID = ({result , route}) => {
    return (
        <div>
            <TeamsLeague data={result.response} route={route}/>
        </div>
    );
};

export default leagueID;

export async function getServerSideProps({params}){
    // console.log(params);
    const url = `https://api-football-beta.p.rapidapi.com/teams?league=${params.leagueID}&season=2024`;
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
        return {
            props: {
                result,
                route : params.leagueID

            }
        }
    } catch (error) {
        console.error(error);
    }
}

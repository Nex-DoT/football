import TeamPage from "../../../components/RoutePages/TeamPage";
const teamID= ({teamStatisticsResponse , playerResponse}) => {
    console.log(playerResponse);
    return (
        <>
            <TeamPage newdata={teamStatisticsResponse.response} players={playerResponse.response}/>
        </>
    );
};

export default teamID;

export async function getServerSideProps(context){
    // const id = context.query.teamID;
    // const url = `https://api-football-beta.p.rapidapi.com/teams/statistics?team=${id[1]}&season=2023&league=${id[0]}`;
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'c3cb3e2fa7msh47f7d429567cb11p13af7bjsnf69b82aefbb8',
    //         'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
    //     }
    // };

    // try {
    //     const response = await fetch(url, options);
    //     const result = await response.json();
    //     console.log(result);
    //     return {
    //         props: {result}
    //     }
    // } catch (error) {
    //     console.error(error);
    // }
    const id = context.query.teamID;
    const playerUrl = `https://api-football-beta.p.rapidapi.com/players?season=2023&team=${id[1]}`;
    const teamStatisticsUrl = `https://api-football-beta.p.rapidapi.com/teams/statistics?team=${id[1]}&season=2023&league=${id[0]}`;
    const options = {
        headers: {
            'X-RapidAPI-Key': 'c3cb3e2fa7msh47f7d429567cb11p13af7bjsnf69b82aefbb8',
            'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
        }
    };

    try {
        const [playerResponse, teamStatisticsResponse] = await Promise.all([
            fetch(playerUrl, options).then(response => response.json()),
            fetch(teamStatisticsUrl, options).then(response => response.json())
        ]);
        console.log('Player Response:', playerResponse);
        console.log('Team Statistics Response:', teamStatisticsResponse);
        return {
            props: { playerResponse, teamStatisticsResponse }
        };
    } catch (error) {
        console.error(error);
    }
}
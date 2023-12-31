import TeamPage from "../../../components/RoutePages/TeamPage";
const teamID= ({result}) => {
    console.log(result);
    return (
        <>
            <TeamPage newdata={result.response}/>
        </>
    );
};

export default teamID;

export async function getServerSideProps(context){
    const id = context.query.teamID;
    const url = `https://api-football-beta.p.rapidapi.com/teams/statistics?team=${id[1]}&season=2023&league=${id[0]}`;
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
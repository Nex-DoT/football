import GamePage from "../../components/RoutePages/GamePage";
import { data } from "../../function/staticData";
function getFutureDateString(startDate, daysAhead = 7) {
    // Create a new Date object from the startDate
    const currentDate = new Date(startDate);
  
    // Add the specified number of days to the date
    const futureDate = new Date(startDate);
    futureDate.setDate(futureDate.getDate() + daysAhead);
  
    // Format the year, month, and day with leading zeros
    const currentYear = currentDate.getFullYear();
    const currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
    const currentDay = String(currentDate.getDate()).padStart(2, "0");
  
    const futureYear = futureDate.getFullYear();
    const futureMonth = String(futureDate.getMonth() + 1).padStart(2, "0");
    const futureDay = String(futureDate.getDate()).padStart(2, "0");
  
    // Return the formatted strings
    return {
      currentDateString: `${currentYear}-${currentMonth}-${currentDay}`,
      futureDateString: `${futureYear}-${futureMonth}-${futureDay}`,
    };
  }
  
  // Example usage:
  const today = new Date();
  const dateStrings = getFutureDateString(today);
  console.log(`Today's date is: ${dateStrings.currentDateString}`);
  console.log(`7 days from today is: ${dateStrings.futureDateString}`);
  
const index = ({result , year}) => {
    console.log(result);
    return (
        <div>
            <GamePage/>
        </div>
    );
};

export default index;
export async function getServerSideProps({params}){
    const id = params.leagueID ;
    const url = `https://api-football-beta.p.rapidapi.com/fixtures?to=${dateStrings.futureDateString}&league=${id}&from=${dateStrings.currentDateString}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c3cb3e2fa7msh47f7d429567cb11p13af7bjsnf69b82aefbb8',
            'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        return {
            props: {result}
        }
    } catch (error) {
        console.error(error);
    }
}
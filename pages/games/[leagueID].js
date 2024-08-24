import GamePage from "../../components/RoutePages/GamePage";
import { tokenValidation } from "../../function/auth";
import { connectToDB } from "../../function/connectDB";
import { data } from "../../function/staticData";
import Message from "../../models/Message";
import User from "../../models/User";
  
const index = ({result , auth , username , message}) => {
    console.log(result , auth , username);
    return (
        <div>
            <GamePage data={result} auth={auth} username={username} message={message} />
        </div>
    );
};

export default index;
export async function getServerSideProps(context){
    let auth = false;
    const {req , params} = context
    console.log(req , params);
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
    const id = params.leagueID ;
    const url = `https://api-football-beta.p.rapidapi.com/fixtures?timezone=${today.getTimezoneOffset}&season=2024&to=${dateStrings.futureDateString}&league=${id}&from=${dateStrings.currentDateString}`;
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
        const {token} = req.cookies;
        if(token){
            console.log(token);
            const validate = await tokenValidation(token , process.env.SECRECT_KEY);
            await connectToDB();
            const message = await Message.find({}).sort({ createdAt: -1 }); // Sort by creation date descending
            const {username} = await User.findOne({email: validate.email})
            if(validate){
                auth = true
                return {
                    props: {result , auth , username , message : JSON.parse(JSON.stringify(message))}
                }
            } 
        }else{
            return {
                props: {result , auth}
            }
        }
    } catch (error) {
        console.error(error);
    }
}

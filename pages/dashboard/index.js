import DashboardPage from "../../components/RoutePages/DashboardPage";
import User from "../../models/User";
import { connectToDB } from "../../function/connectDB";
import { tokenValidation } from "../../function/auth";
const index = ({validData}) => {
    return (
        <div>
            <DashboardPage data={validData}/>
        </div>
    );
};

export default index;

export async function getServerSideProps(context){
    const {token} = context.req.cookies
    const validate = await tokenValidation(token , process.env.SECRECT_KEY);
    if(!validate){
        return {
            redirect: { destination : "/myAccount" , permanent: false },
        }
    }
    try{
         await connectToDB();
    }catch(err){
        console.log("error in connectToDB");
    };
    const user = await User.findOne({email: validate.email})
    const validData = {
        username: user.username,
        email: user.email
    };

    return {
        props: {validData}
    }
}
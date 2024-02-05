import { serialize } from "cookie";
import { comparePassword } from "../../../function/auth";
import { connectToDB } from "../../../function/connectDB";
import User from "../../../models/User";
import { sign } from "jsonwebtoken";
export default async function handeler(req , res){
    if(req.method !== 'POST') return ;
    
    try {
        await connectToDB();
    }catch(err){
        res.status(500).json({status: 'fail', message: "Error connecting to DB"});
        console.log("error connect to DB");
    }

    const {email , password} = req.body.data;
    const expiretion = 24 * 60 * 60 ;
    console.log( email , password);

    if(!email || !password){
        res.status(422).json({status: 'failed' , message: 'The input our empty'});
    }
    
    const user = await User.findOne({email : email.toLowerCase()})
    if( !user ){
        res.status(422).json({status: 'failed' , message: "you dont have account with this inforamtion please sign up."})
    } 
    const isValid = await comparePassword(password , user.password ) ;

    if(! isValid){
        res.status(422).json({status: 'failed' , message:"Wrong username or password"});
    }
    
    const token = sign({email} , process.env.SECRECT_KEY , {expiresIn:expiretion})


    res.status(200).setHeader("Set-Cookie", serialize("toekn" , token , {httpOnly:true , maxAge:expiretion , path:"/"})).json({status:"success" , message:"you login successfuly"})
}
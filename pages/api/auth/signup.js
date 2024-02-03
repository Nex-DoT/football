import { hashPassword } from "../../../function/auth";
import { connectToDB } from "../../../function/connectDB";
import User from "../../../models/User";

export default async function handeler (req , res) {
    
    if (req.method !== "POST") return ;

    try{
        await connectToDB();
        console.log("connected to DB");
    }catch(err){
        res.status(500).json({message: "Error connection to DB" , status: "failed"});
        console.log("error connect to DB");
    }
    
    const {email , password , passwordConfirm , userName } = req.body.data ;
    console.log(email, password, passwordConfirm , userName);

    if (!email|| !password || !passwordConfirm || !userName) {
        res.status(422).json({status: "failed" , message: "the data is invalid"});
    }

    const existing = await User.findOne({email: email});
    if(existing){
        res.status(422).json({status: "failed" , message: "you already have a account with this email"});
    }

    const hashedPassword = await hashPassword(password);
    console.log(hashedPassword);

    const createdUser = await User.create({email: email , password: hashedPassword , username: userName})
    res.status(200).json({status: "success" , message: "user Created successfully" , data: createdUser});

    
}
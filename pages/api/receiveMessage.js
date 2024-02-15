import { tokenValidation } from "../../function/auth";
import { connectToDB } from "../../function/connectDB";
import Message from "../../models/Message";
export default async function handeler(req , res){
    if(req.method !== "GET") return;
    
    try{
        await connectToDB();
    }catch(e){
        console.log('Error connecting to DB in message handler');
    }
    const {token} = req.cookies
    const allMessages = await Message.find({}).sort({ createdAt: -1 }); // Sort by creation date descending
    console.log(allMessages);
    const validationToken = await tokenValidation(token , process.env.SECRECT_KEY)
    if(validationToken){
        res.status(200).json({status: 'success' , allMessages})
    }else{
        res.status(400).json({status: 'falied' , message: allMessages})
    }
}
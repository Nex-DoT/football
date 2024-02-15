import User from "../../models/User";
import { connectToDB } from "../../function/connectDB";
import Message from "../../models/Message";
export default async function handler(req , res) {
    if(req.method !== "POST") return ;
    try {
        await connectToDB();
        console.log('connection was successful');
    }catch(err){
        console.log('error in connect to DB');
        res.status(500).json({status: 'failed' , message:'Error in connect to DB Please make sure your VPN connection is correct.'});
    }
    const {username , text} = req.body;

    const usernameExists = await User.findOne({username: username});
    if(!usernameExists){
        res.status(422).json({status: 'failed' , message:'you are not a member of this organization'})
    }

    const message = await Message.create({username: username , message: text});
    res.status(200).json({stutus:'success' , message: message})
}
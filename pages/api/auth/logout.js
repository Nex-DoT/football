import { serialize } from "cookie";

async function handeler(req , res){
    if(req.method !== "GET") return;
    const serialized = serialize("token" , "" ,{path:"/" , maxAge:0});
    res.status(200).setHeader("Set-Cookie", serialized).json({stauts:'success' , message: 'Loged Out!'});
}

export default handeler;
import { tokenValidation } from "../../function/auth";
async function handeler(req , res){
    if(req.method !== 'GET') return;

    const {token} = req.cookies ;
    if(!token) {
       return  res.status(404).json({status: "failed" , message:"you are not logged in."})
    }

    const validate = tokenValidation(token , process.env.SECRET_KEY)
    if(validate){
        res.status(200).json({status: "success" , validate })
    }else{
        res.status(401).json({status: "failed" , message:"you are not unathorized."})
    }
}

export default handeler;
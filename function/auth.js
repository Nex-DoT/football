import { hash, compare } from "bcryptjs";
import { verify } from "jsonwebtoken";
export async function hashPassword(password){
    const hashedPass = await hash(password , 13);
    return hashedPass; 
}

export async function comparePassword(password , hashedPassword){
    const trueOrFalse = await compare(password , hashedPassword);
    return trueOrFalse;
}

export async function tokenValidation(token , secretKey){
    try{
        const validate = verify(token , secretKey);
        const userEmail = validate.email.toLowerCase();
        return {email: userEmail};
    }catch(err){
        console.log("token validation failed");
        return false;
    }
}
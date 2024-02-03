import { hash, compare } from "bcryptjs";
export async function hashPassword(password){
    const hashedPass = await hash(password , 13);
    return hashedPass; 
}

export async function comparePassword(password , hashedPassword){
    const trueOrFalse = await compare(password , hashedPassword);
    return trueOrFalse;
}
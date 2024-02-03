// import mongoose from "mongoose";
import {mongoose , mongo} from "mongoose";

async function connectToDB(){
    if(mongoose.connect[0]) return ; 
    mongoose.set('strictQuery' , false);
    await mongoose.connect(process.env.BASE_URL);
    console.log("Connected to DB");
}
export { connectToDB} ; 
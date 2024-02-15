import { Schema , model , models } from "mongoose";

const messageSchema = new Schema({
    username:{ type: String , required: true},
    message:{type:String , required:true},
    createdAt:{ type:Date , default: ()=> Date.now() , immutable: true}
})

const Message = models.message || model("message" , messageSchema );

export default Message

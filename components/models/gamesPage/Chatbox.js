import { useState } from "react";
import { IoSend } from "react-icons/io5";
import MessageCard from "./MessageCard";
import chatboxPng from "public/image/chatbox.png"
import Image from "next/image";
import Link from "next/link";
export default function Chatbox({auth , username , message}) {
  const [text , setText] = useState("");
  const [alltext , setAlltext] = useState(message);
  const messageHandeler = async()=>{
    const data = await fetch('/api/message' , {
      method: 'POST',
      body: JSON.stringify({username:username , text:text}),
      headers: {'Content-Type': 'application/json'}
    })
    const res = await data.json();
    console.log(res);
     const update = await fetch('/api/receiveMessage' , {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    const updateData = await update.json();
    console.log(updateData);
    setText("")
    setAlltext(updateData.allMessages);
  }
  const enterHandeler = (e)=>{
    if (e.keyCode === 13) {
      // Enter key was pressed
      // Your code here
      console.log("Enter key pressed");
      messageHandeler();
    }
  }
  const changeHandeler = (e)=>{
    setText(e.target.value);
  }
  if(!auth){
    return (
      <div className=" h-96  w-80  rounded-md absolute top-10 left-5 flex items-center flex-col justify-between">
        <Image className=" blur-sm" src={chatboxPng} />
        <div className=" absolute top-1/2 -translate-y-1/2 p-5 text-sm flex items-center justify-around flex-col">
            <h2>We love to have you in the chat Just a quick sign up and you will be ready to chat with everyone</h2>
            <button className="p-2 text-base font-ProtestG bg-gradient-to-tr from-color6 to-color7 rounded-md"><Link href={'/myAccount'}>Login</Link></button>
        </div>
      </div>
    )
  }else{
    return (
      <div className=" h-96 shadow-md w-80 bg-white rounded-md absolute top-10 left-5 flex items-center flex-col justify-between p-2">
        <div className="bg-color4 w-full rounded-md p-2 overflow-y-scroll">
          {alltext.map( item =><MessageCard key={item.index} item={item}/>)}
        </div>
        <div className="flex items-center justify-around  w-full h-10 mt-2">
          <input className="w-3/4 h-12 rounded-full bg-color4 outline-none text-md p-4" type="text" value={text} maxLength={100} onChange={changeHandeler} onKeyUp={enterHandeler}/>
          <button onClick={messageHandeler} className="p-3 rounded-full bg-gradient-to-tr from-color6 to-color7 hover:opacity-80 transition-all"><IoSend/></button>
        </div>
      </div>
    )
  }
  
}
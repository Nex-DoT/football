import { Input, Radio , Checkbox , EyeSlash } from "@nextui-org/react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { test } from "../../../function/regex";
const SignupPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [data , setData] = useState({
      email: "",
      userName: "",
      password: "",
      passwordConfirm: "",
    });
    const [error, setError] = useState({});
    const toggleVisibility = () => setIsVisible(!isVisible);
    const submitHandeler = async (e)=>{
      e.preventDefault();

      setError(test(data , "signup"));
      if (!error.email && !error.userName && !error.password && !error.passwordConfirm) {
        console.log("success");
      }
      
     const res = await fetch("api/auth/signup" , {
      method: "POST" , 
      body: JSON.stringify({data}) , 
      headers: {"Content-Type" : "application/json"}
     })
     const resdata = await res.json();
     console.log(resdata);
    }
    const onchangeHandeler= (e)=>{
      setData({...data , [e.target.name] : e.target.value});
      setError(test(data , "signup"));
    }
    return (
        <div className="text-black h-full">
        <form className="flex items-center justify-between h-full flex-col " onSubmit={submitHandeler}>
          <div className="h-full flex flex-col items-center justify-around">
            <h1 className="text-2xl font-ProtestG m-1">Sign-Up</h1>
            <div className="text-center h-56">
            <Input
                onChange={onchangeHandeler}
                value={data.email}
                name="email"
                size="sm"
                label="Email"
                radius="lg"
                classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                    "bg-transparent",
                    "text-black/90 dark:text-white/90",
                    "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                    "shadow-xl",
                    "bg-white",
                    "dark:bg-default/60",
                    "backdrop-blur-xl",
                    "backdrop-saturate-200",
                    "hover:bg-default-200/70",
                    "dark:hover:bg-default/70",
                    "group-data-[focused=true]:bg-default-200/50",
                    "dark:group-data-[focused=true]:bg-default/60",
                    "!cursor-text",
                ],
                }}
                /> 
                <p className="text-xs font-thin text-red-400 h-4">{error.email}</p>
            <Input
                onChange={onchangeHandeler}
                value={data.userName}
                name="userName"
                size="sm"
                label="User Name"
                radius="lg"
                classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                    "bg-transparent",
                    "text-black/90 dark:text-white/90",
                    "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                    "shadow-xl",
                    "bg-white",
                    "dark:bg-default/60",
                    "backdrop-blur-xl",
                    "backdrop-saturate-200",
                    "hover:bg-default-200/70",
                    "dark:hover:bg-default/70",
                    "group-data-[focused=true]:bg-default-200/50",
                    "dark:group-data-[focused=true]:bg-default/60",
                    "!cursor-text",
                ],
                }}
            />
             <p className="text-xs font-thin text-red-400 h-4">{error.userName}</p>
            <Input
                onChange={onchangeHandeler}
                value={data.password}
                size="sm"
                label="Password"
                radius="lg"
                name="password"
                endContent={
                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                      {isVisible ? (
                        <AiOutlineEyeInvisible className="text-2xl pointer-events-none" />
                      ) : (
                        <AiOutlineEye className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                type={isVisible ? "text" : "password"}
                classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                    "bg-transparent",
                    "text-black/90 dark:text-white/90",
                    "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                    "shadow-xl",
                    "bg-white",
                    "dark:bg-default/60",
                    "backdrop-blur-xl",
                    "backdrop-saturate-200",
                    "hover:bg-default-200/70",
                    "dark:hover:bg-default/70",
                    "group-data-[focused=true]:bg-default-200/50",
                    "dark:group-data-[focused=true]:bg-default/60",
                    "!cursor-text",
                ],
                }}
            />
            <p className="text-xs font-thin text-red-400 h-4">{error.password}</p>
            <Input
                onChange={onchangeHandeler}
                value={data.passwordConfirm}
                name="passwordConfirm"
                size="sm"
                label="Password confirmation"
                radius="lg"
                endContent={
                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                      {isVisible ? (
                        <AiOutlineEyeInvisible className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <AiOutlineEye className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                type={isVisible ? "text" : "password"}
                classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                    "bg-transparent",
                    "text-black/90 dark:text-white/90",
                    "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                    "shadow-xl",
                    "bg-white",
                    "dark:bg-default/60",
                    "backdrop-blur-xl",
                    "backdrop-saturate-200",
                    "hover:bg-default-200/70",
                    "dark:hover:bg-default/70",
                    "group-data-[focused=true]:bg-default-200/50",
                    "dark:group-data-[focused=true]:bg-default/60",
                    "!cursor-text",
                ],
                }}
            />
                <p className="text-xs h-1 font-thin text-red-400">{error.passwordConfirm}</p>
            </div>

          </div>
            
            <button className=" w-full h-14 rounded-md bg-gradient-to-tr from-color7 to-color6 shadow-lg font-ProtestG hover:opacity-80 transition-all mt-8" type="submit">Sign-Up</button>

        </form>
    </div>
    );
};

export default SignupPage;
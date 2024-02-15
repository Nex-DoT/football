import { useState } from "react";
import { Input, Radio , Checkbox } from "@nextui-org/react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { test } from "../../../function/regex";
import { useRouter } from "next/router";
const LoginPage = () => {
  const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const [data , setData] = useState({
      email: "",
      password: "",
    });
    const [error, setError] = useState({});
    const toggleVisibility = () => setIsVisible(!isVisible);
    const submitHandeler = async(e)=>{
      e.preventDefault();

      setError(test(data , "login"));
      if (!error.email && !error.password) {
        console.log("success");
      }
      const res = await fetch("api/auth/login" , {
        method: "POST" , 
        body: JSON.stringify({data}) , 
        headers: {"Content-Type" : "application/json"}});
      const resData = await res.json();
      console.log(resData);
      if(resData.status === "success") {
        router.push("/dashboard")
      }

    }
    const onchangeHandeler= (e)=>{
      setData({...data , [e.target.name] : e.target.value});
      setError(test(data));
    }
    return (
        <div className="text-black h-full flex flex-col justify-around items-center">
        <form className="flex items-center justify-between h-full flex-col" onSubmit={submitHandeler}>
          <div className="h-full flex items-center justify-evenly flex-col">
              <h1 className="text-2xl font-ProtestG">Login</h1>
              <div className="flex flex-col w-full justify-around items-center gap-2">
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
                  <p className="text-sm font-thin text-red-400">{error.email}</p>
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
              <p className="text-sm font-thin text-red-400">{error.password}</p>
              </div>
          </div>
            <button className=" w-full h-14 rounded-md bg-gradient-to-tr from-color7 to-color6 shadow-lg font-ProtestG hover:opacity-80 transition-all mt-8" type="submit">Login</button>
        </form>
    </div>
    );
};

export default LoginPage;
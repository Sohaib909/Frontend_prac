import React, { useState } from "react";



const ResetPassword = () =>{
    
const [email,setEmail] = useState(""); 
const [password,setPassword] = useState("")


return(
    <>
    <div className="min-h-screen w-full flex items-center justify-center ">

        <div className=" w-[1589px] h-[869px] rounded-lg flex  ">

           <div className="w-[692px]  items-center justify-center">
            <form className="bg-gray-200 items-center justify-center p-72 space-y-4">

                <div className="text-blue-900 text-xl font-semibold  ">Reset Password</div>

                <div>
                    <input
                    type="emial"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400"
                    
                    />
                </div>

                <div className="text-black text-xl  ">Please enter your email address above</div>
                <button className="bg-blue-500 text-md font-semibold text-white w-full  rounded-xl text-center p-4">
                    Send
                </button>
                
            </form>
           </div>

           <div className="w-[897px] items-center justify-center bg-green-200">
             <div className="text-center text-blue-800 items-center justify-center p-72">
                  <span className="text-6xl font-extrabold">MEX</span><span className="text-6xl font-normal">VISA</span>
             </div>
            </div>
        </div>
    </div>
    </>
)
}

export default ResetPassword;

import React, { useState } from "react";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
<div className="min-h-screen w-full overflow-hidden relative flex items-center justify-center px-4 md:px-6 lg:px-0">
{/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/src/assets/image.jpg')" }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className=" rounded-xl overflow-hidden bg-white/80 w-[95%] max-w-[1589px] h-auto md:h-[869px] flex flex-col md:flex-row z-10"
                  style={{ backgroundColor: "rgba(255,255,255,0.77)" }}

      >
        {/* Form Section */}
        <div className="w-full md:w-[50%] items-center justify-center flex p-8 md:px-20">
          <form
            className="w-full max-w-md space-y-4 backdrop-blur-[17.1px] bg-white/80  p-6 md:py-72 md:px-42 rounded-xl"
          >
            <div className="text-blue-900 text-2xl md:text-xl font-semibold ">
              Reset Password
            </div>

            <div>
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400"
              />
            </div>

            <div className="text-black text-sm md:text-sm ">
              Please enter your email address above
            </div>

            <button className="bg-blue-500 text-md font-semibold text-white w-full rounded-xl text-center p-4">
              Send
            </button>
          </form>
        </div>

        {/* Right Section (MexVisa Info) */}
        <div className="w-full md:w-[50%] bg-blue-600 flex items-center justify-center py-12 md:py-0">
          <div className="text-center space-y-4 px-6 md:px-36 text-white">
            <div className="text-4xl md:text-6xl font-extrabold">MEX<span className="font-normal">VISA</span></div>
            <div className="text-xl md:text-3xl font-normal">Welcome To</div>
            <div className="text-xl md:text-3xl font-bold">MexVisa</div>
            <div className=" max-w-[450px] md:max-w-lg lg:max-w-xl xl:max-w-4xl mx-auto mt-16 md:mt-8">
              <img src="src/assets/loginbg2.png" className="w-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

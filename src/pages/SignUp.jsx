import React from "react";
import googleicon from "../assets/googleicon.png"
import fbicon from "../assets/fbicon.png"
import bgImage from "../assets/image.jpg"
import cardImage from "../assets/loginbg2.png"
const SignUp = () => {
  return (
   <div className="relative min-h-screen">
  {/* Background */}
  <img
    src={bgImage}
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay Content */}
  <div className="relative z-10 flex items-center justify-center min-h-screen">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row px-6">
      {/* Left - Form */}
      <div className="bg-white/80 backdrop-blur-[17px] rounded-xl shadow-2xl w-full md:w-1/2 p-10 md:p-20">
        <h2 className="text-3xl font-bold mb-6 text-blue-800 text-center">Create Your Account</h2>
        <form className="space-y-6">
          <input type="text" placeholder="First Name" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="text" placeholder="Last Name" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="password" placeholder="Enter New Password" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="password" placeholder="Confirm Password" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">Sign Up</button>
          <input type="checkbox" className="rounded-lg h-6 w-6 "/><span className="text-white text-xl pl-4">Sign Up as an agency</span>


        </form>
        <div className="text-white text-center text-xl font-semibold">I have an account?

            <span className="text-blue-800 font-bold pl-2 cursor-pointer">SignIn</span>
            
            </div>
           <div className="relative flex items-center justify-center my-8">
          <hr className="w-full border-t border-gray-300" />
      <div className="absolute bg-blue-700 text-white border border-blue-600 rounded-full px-4 py-3 text-md font-semibold shadow-md">
          Or
        </div>
        
   
</div>
 <div className="flex space-x-6 items-center justify-center pt-8">
  <div className="bg-white border border-blue-600 rounded-full p-3 cursor-pointer hover:shadow-md transition duration-200">
    <img src={googleicon} alt="Google" className="w-[66px] h-[66px]" />
  </div>
  <div className="bg-white border border-blue-600 rounded-full p-3 cursor-pointer hover:shadow-md transition duration-200">
    <img src={fbicon} alt="Facebook" className="w-[66px] h-[66px]" />
  </div>
</div>
      </div>

      {/* Right - Visual */}
      <div className="text-center justify-cener md:flex flex-col items-center justify-center w-full md:w-1/2 bg-blue-600 rounded-xl text-white p-10">
        <h1 className="text-6xl font-extrabold mb-2 mt-12">MEX<span className="font-normal">VISA</span></h1>
        <p className="text-2xl mt-2">Welcome To</p>
        <p className="text-xl font-bold mt-2">MexVisa</p>
        <img src={cardImage} alt="Visual" className="mt-8 w-[300px]" />
      </div>
    </div>
  </div>
</div>


  );
};

export default SignUp;

import React from "react";
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
  <div className="relative z-10 flex items-center justify-center py-20 min-h-[110vh]">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row w-full px-6">
      {/* Left - Form */}
      <div className="bg-white/80 backdrop-blur-[17px] rounded-xl shadow-2xl w-full md:w-1/2 p-6 md:p-16">
        <h2 className="text-3xl font-bold mb-6 text-blue-800 text-center">Create Your Account</h2>
        <form className="space-y-6">
          <input type="text" placeholder="First Name" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="text" placeholder="Last Name" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="password" placeholder="Enter New Password" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="password" placeholder="Confirm Password" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">Sign Up</button>
        </form>
      </div>

      {/* Right - Visual */}
      <div className="hidden md:flex flex-col items-center justify-center w-full md:w-1/2 bg-blue-600 rounded-xl text-white p-10">
        <h1 className="text-5xl font-extrabold mb-2">MEX<span className="font-normal">VISA</span></h1>
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

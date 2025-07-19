import React from "react";

const Footer = () =>{
    return(
     <div className="mx-auto bg-yellow-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-red-200 p-6 rounded-lg">
          <div className="bg-green-200 text-3xl font-bold p-6">
           Flowbite
          </div>
          <div className="bg-yellow-200 p-6">
           <p className="text-2xl">Contact</p>
           <p>+92 3041768709</p>
          </div>
          <div className="bg-green-200 p-6 justify-around">
           <p className="text-2xl">Address</p>
           <p>Lohore Pakistan johar town lahore sadat avanue</p>
          </div>
        </div>
     </div>
    )
}
export default Footer;
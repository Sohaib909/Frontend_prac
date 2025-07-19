import React from "react";

const Features = () =>{
return(
<section className="bg-gray-300 py-16 px-4">
  {/* Heading and Text */}
  <div className="max-w-4xl mx-auto text-center space-y-6">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">All Features</h2>
    <p className="text-sm md:text-base text-gray-700 font-normal">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, dolores at? 
      Ab quo nulla dolores quae sunt aperiam sit itaque impedit, incidunt facilis 
      libero debitis a iure soluta eos ipsam?
    </p>
  </div>

  {/* Cards Section */}
  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
    <div className="bg-yellow-500 p-8 rounded-lg text-white font-semibold text-center">
      Card 1
    </div>
    <div className="bg-red-500 p-8 rounded-lg text-white font-semibold text-center">
      Card 2
    </div>
    <div className="bg-green-500 p-8 rounded-lg text-white font-semibold text-center">
      Card 3
    </div>
    <div className="bg-blue-500 p-8 rounded-lg text-white font-semibold text-center">
      Card 4
    </div>
    <div className="bg-purple-500 p-8 rounded-lg text-white font-semibold text-center">
      Card 5
    </div>
    <div className="bg-purple-500 p-8 rounded-lg text-white font-semibold text-center">
      Card 6
    </div>
  </div>
</section>


)

}

export default Features
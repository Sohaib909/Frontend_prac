import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-800 pt-32 pb-16 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6 md:space-y-8 mb-10 md:mb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Welcome to <span className="text-blue-500">My Website</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300">
            Build responsive and modern UIs with React and Tailwind CSS.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out shadow-lg">
            Get Started
          </button>
        </div>

        <div className='w-full md:w-1/2 flex justify-center'>
          <img src="/banner1.png" alt="banner" className='max-w-full h-auto object-contain' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
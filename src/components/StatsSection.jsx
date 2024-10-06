import React from 'react';

const StatsSection = () => {
  return (
    <div className="bg-white text-center py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Meet the rising demand
      </h2>
      <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
        With improved personalization, it’s now easier than ever for people to find and buy tickets to events they’ll love through Eventbrite’s marketplace
      </p>
      
      <div className="mt-10 flex flex-col items-center justify-center sm:flex-row sm:gap-16">
        <div className="text-center mb-10 sm:mb-0">
          <span className="text-6xl font-extrabold text-black">93M</span>
          <p className="mt-3 text-lg text-gray-500">unique ticket buyers on Eventbrite in 2023</p>
        </div>
        
        <div className="text-center">
          <span className="text-6xl font-extrabold text-black">2x</span>
          <p className="mt-3 text-lg text-gray-500">the consumer reach of our closest competitor</p>
        </div>
      </div>

      <button className="mt-10 px-6 py-3 text-lg font-semibold text-black bg-white border-2 border-black rounded-full hover:bg-gray-400 hover:text-white hover:border-white transition duration-300">
        Launch your next event
      </button>
    </div>
  );
}

export default StatsSection;

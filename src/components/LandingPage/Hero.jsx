import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [first, setfirst] = useState('')
  console.log(first);
  return (
    <div>
      <main className="overflow-hidden mt-24 sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24 flex flex-col justify-center">
          <div className="mx-auto max-w-xl text-center sm:text-left">
            <h2 className="text-3xl font-bold text-gray-900 md:text-3xl">
              Rent, Buy os Sell your next real estate property with  
              <span className=" mx-2 text-5xl text-indigo-600">Phil Dunphy</span>
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
            Real estate is one of the most in secure and fast growing investment, and our phil dunphy is one of the best trustable and hard working realtor(not a real estate agent because there is a diffrance somehow). 
            </p>

            <div className="mt-4 md:mt-8 ">
            <button className="btn btn-primary mr-4"> <Link to={'/rent'}> Rent Property </Link></button>
            <button className="btn btn-outline btn-primary"><Link to={'/buy'}>Buy Property </Link> </button>
            </div>
          </div>
        </div>

        <img
          alt="Student"
          src="https://iili.io/LDVDP4.png" 
          className=" "
        />
      </main>
    </div>
  );
};

export default Hero;

import React, { useState } from "react";
import PropertyGrid from "../components/PropertyGrid";
import { db } from "../db";

const RentProperty = () => {
  const [properties, setproperties] = useState(db)

  return (
    <div className="md:px-44">
      <div>
        <h2 className=" my-16 text-5xl">Search Proprty to rent</h2>
      </div>

      <div className="flex justify-between">
        <select className="select select-primary w-full max-w-xs mx-2">
          <option disabled defaultValue>
            What is the best TV show?
          </option>
          <option>Game of Thrones</option>
          <option>Lost</option>
          <option>Breaking Bad</option>
          <option>Walking Dead</option>
        </select>

        <select className="select select-primary w-full max-w-xs mx-2">
          <option disabled defaultValue>
            What is the best TV show?
          </option>
          <option>Game of Thrones</option>
          <option>Lost</option>
          <option>Breaking Bad</option>
          <option>Walking Dead</option>
        </select>

        <select className="select select-primary w-full max-w-xs mx-2">
          <option disabled defaultValue>
            What is the best TV show?
          </option>
          <option>Game of Thrones</option>
          <option>Lost</option>
          <option>Breaking Bad</option>
          <option>Walking Dead</option>
        </select>

        <select className="select select-primary w-full max-w-xs mx-2">
          <option disabled defaultValue>
            What is the best TV show?
          </option>
          <option>Game of Thrones</option>
          <option>Lost</option>
          <option>Breaking Bad</option>
          <option>Walking Dead</option>
        </select>
      </div>
      <PropertyGrid data ={properties.hits}/>
     
    </div>
  );
};

export default RentProperty;

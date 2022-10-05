import React from "react";
import Filters from "../components/Filters";
import PropertyGrid from "../components/PropertyGrid";


const BuyProperty = () => {
  return (
    <>
      <div className="">
        <div>
          <h2 className=" my-16 text-5xl">Search Proprty to buy</h2>
        </div>

        <Filters purpose={"for-sale"} />
      </div>
    </>
  );
};

export default BuyProperty;

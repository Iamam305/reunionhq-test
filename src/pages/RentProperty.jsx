import React, { useEffect, useState } from "react";
import Filters from "../components/Filters";
import PropertyGrid from "../components/PropertyGrid";

import { fetchProperties } from "../services/propertiesServices";

const RentProperty = () => {
  return (
    <div className="">
      <div>
        <h2 className=" my-16 text-5xl">Search Proprty to rent</h2>
      </div>
      <Filters purpose={"for-rent"} />
    </div>
  );
};

export default RentProperty;

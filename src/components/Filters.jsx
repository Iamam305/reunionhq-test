import React, { useEffect, useState } from "react";
import { fetchProperties } from "../services/propertiesServices";
import PropertyGrid from "./PropertyGrid";

import { AiFillFilter, AiOutlineFilter, AiOutlineLoading3Quarters } from "react-icons/ai";


const Filters = ({ purpose }) => {
  const [pricingRange, setPricingRange] = useState(
    purpose == "for-rent" ? 10000 : 1000000
  );
  const [propertyType, setPropertyType] = useState(4);
  const [minArea, setMinArea] = useState(70);
  const [sortByFilter, setSortByFilter] = useState("city-level-score");
  const [showFilter, setShowFilter] = useState(false)

  const [properties, setProperties] = useState(null);

  useEffect(() => {
    setFIlter();
  }, []);

  const params = {
    locationExternalIDs: "5002,6020",
    purpose: `${purpose}`,
    hitsPerPage: "25",
    page: "0",
    lang: "en",
    sort: `${sortByFilter}`,
    rentFrequency: "monthly",
    categoryExternalID: `${propertyType}`,
    priceMax: `${pricingRange}`,
    areaMin: `${minArea}`,
  };

  const setFIlter = () => {
    setProperties(null);
    fetchProperties(params).then((res) => {
      setProperties(res.data.hits);
      console.log(res);
    });
  };
  return (
    <div className="">
      <button onClick={() => setShowFilter(!showFilter)} className=" md:hidden -mt-12 mx-8 btn btn-primary"> <AiOutlineFilter className="text-3xl mr-2"/> Filter</button>
      <div className={`${showFilter?"flex":"hidden"} md:flex flex-col md:flex-row items-end justify-between my-8 shadow-lg  p-8 font-semibold rounded-md`}>
        <div className="w-full md:w-1/5">
          <label className="my-2 block" htmlFor="">
            Sort By
          </label>
          <select
            className="select  select-primary w-full text-lg "
            placeholder="Proprty Type"
            defaultValue={sortByFilter}
            onChange={(e) => setSortByFilter(e.target.value)}
          >
            <option value={"price-desc"}>Price high to low</option>
            <option value={"price-asc"}>Price low to high</option>
            <option defaultValue value={"city-level-score"}>
              City level score
            </option>
            <option value={"verified-score"}>Varified Score</option>
            <option value={"date-desc"}>Newest First</option>
            <option value={"date-asc"}>Oldest First</option>
          </select>
        </div>

        <div className=" w-full md:w-1/5">
          <label className="my-2 block" htmlFor="">
            Property Type
          </label>
          <select
            className="select select-primary w-full px-4  text-lg"
            placeholder="Proprty Type"
            defaultValue={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value={4} defaultValue>
              Apartment{" "}
            </option>
            <option value={16}>Townhouses</option>
            <option value={3}>Villas</option>
            <option value={21}>Hotel Apartments</option>
            <option value={15}>Commercial Plot</option>
          </select>
        </div>

        <div className=" w-full md:w-1/5 ">
          <label className="my-2 block" htmlFor="">
            Pricing Range
          </label>

          <div className="font-semibold text-lg dropdown flex flex-col h-12 px-4 justify-center w-full border-indigo-700 bg-white rounded-md border">
            <div tabIndex={0} className="block ">
              Under ${pricingRange}
            </div>

            <input
              type="range"
              tabIndex={0}
              min="0"
              defaultValue={pricingRange}
              max={purpose == "for-rent" ? 10000 : 1000000}
              className="range mt-20 left-1 bg-white right-1 px-4 dropdown-content range-xs range-primary  "
              onChange={(e) => setPricingRange(e.target.value)}
            />
          </div>
        </div>

        <div className=" w-full md:w-1/5">
          <label className="my-2 block" htmlFor="">
            Minimum Area
          </label>
          <div className="font-semibold text-lg dropdown flex flex-col h-12 px-4 justify-center w-full border-indigo-700 rounded-md border bg-white">
            <div tabIndex={0}> {minArea} square ft</div>
            <input
              type="range"
              defaultValue={minArea}
              min="0"
              max={purpose == "for-rent" ? 1000 : 10000}
              tabIndex={0}
              className="range mt-20 left-1 bg-white right-1 px-4 dropdown-content range-xs range-primary"
              onChange={(e) => setMinArea(e.target.value)}
            />
          </div>
        </div>

        <button onClick={() => setFIlter()} className=" my-4 md:my-0 btn btn-primary">
          Apply Filter
        </button>
      </div>
      {properties == null ? (
        <span className="flex justify-center">
          <AiOutlineLoading3Quarters className="animate-spin text-5xl" />{" "}
        </span>
      ) : (
        <PropertyGrid data={properties} />
      )}
    </div>
  );
};

export default Filters;

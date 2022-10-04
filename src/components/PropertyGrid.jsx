import React from "react";
import { BiBath, BiBed } from "react-icons/bi";
import { AiOutlineColumnWidth } from "react-icons/ai";

const PropertyGrid = ({ data }) => {
  return (
    <div>
      <div className="flex flex-wrap justify-between items-center px-12">
        {data?.map((proprty) => (
          <div
            key={proprty.id}
            className="card w-96 bg-base-100 shadow-xl  my-6 "
          >
            <figure>
              <img src={proprty.coverPhoto.url} alt="Shoes" className="object-cover h-60 w-full"  />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-indigo-600 font-bold">
                $ {proprty.price} {proprty.rentFrequency}
                <div className="badge badge-secondary">{proprty.product}</div>
              </h2>
              <p className=" ">{proprty.title.slice(0, 30)}...</p>

              <div className="card-actions justify-between text-indigo-700 ">
                <div className="badge badge-outline  p-3">
                  <BiBed className="mr-1"/> {proprty.rooms} Beds
                </div>
                <div className="badge badge-outline  p-3">
                  <BiBath className="mr-1"/> {proprty.baths} Bathrooms
                </div>
                <div className="badge badge-outline  p-3">
                  <AiOutlineColumnWidth className="mr-1"/> {proprty.area.toString().slice(0, 5)}{" "}
                  ft
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyGrid;
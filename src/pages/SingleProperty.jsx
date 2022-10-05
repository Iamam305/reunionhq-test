import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { useParams } from "react-router-dom";
import { getSingleProperty } from "../services/propertiesServices";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const SingleProperty = () => {
  const [data, setData] = useState(null);
  console.log(data);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    getSingleProperty(id).then(res => setData(res.data))
  }, []);

  
  return (
    <>
      {data == null ? (
        <span className="flex my-16 justify-center">
          <AiOutlineLoading3Quarters  className="animate-spin text-5xl" />{" "}
        </span>
      ) : (
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            
            <div className="lg:w-4/5 h-full mx-auto flex flex-wrap">
            <h1 className="text-gray-900 text-3xl mb-8 title-font font-medium ">
                  {data.title}
                </h1>
              <Carousel className=" w-full  mx-auto">
                {data.photos?.map((photo) => (
                  <img
                    alt="ecommerce"
                    className="  max-h-96  object-contain object-center rounded"
                    src={photo.url}
                    key={photo.id}
                  />
                ))}
              </Carousel>

              <div className=" w-full lg:pl-10  mt-6 lg:mt-0">
                

                <p className="leading-relaxed my-6">{data.description}</p>

                <div className="flex justify-between">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    $ {data.price} {data.rentFrequency}
                  </span>
                  <button
                    onClick={() => setFIlter()}
                    className="btn btn-primary"
                  >
                    Contact Seller
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SingleProperty;

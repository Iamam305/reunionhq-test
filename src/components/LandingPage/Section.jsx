import React from "react";
import { Link } from "react-router-dom";

const Section = ({img, heading, direction, btnLink}) => {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className={`flex ${direction} items-center justify-center`}>
            <div className="relative md:w-1/2 w-full">
              <img
                alt="Party"
                src={img}
                className="inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="md:w-1/2 w-full">
              <h2 className="text-3xl font-bold sm:text-4xl">{heading}</h2>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                qui hic atque tenetur quis eius quos ea neque sunt, accusantium
                soluta minus veniam tempora deserunt? Molestiae eius quidem quam
                repellat.
              </p>

              <Link to={btnLink} className="mt-8 btn btn-outline btn-primary">Get Started</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;

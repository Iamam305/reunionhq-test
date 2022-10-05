import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";

import { Outlet } from "react-router";
import Footer from "./components/Footer";

function App() {
  // const [properties, setProperties] = useState([]);
  // console.log(properties);
  const params = {
    locationExternalIDs: '5002,6020',
    purpose: 'for-rent',
    hitsPerPage: '25',
    page: '0',
    lang: 'en',
    sort: 'city-level-score',
    rentFrequency: 'monthly',
    categoryExternalID: '4',
    priceMax: '1000',
    areaMax: '100'
  };

  useEffect(() => {
    console.log(import.meta.env.KEY)
    console.log(import.meta.env.VITE_API_KEY);
  }, []);
  return (
    <div className="">
      <Navbar/>
      <div className="md:px-40 max-w-screen-2xl mx-auto">

      <Outlet />
      </div>
    <Footer/>

    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { fetchProperty } from "./services/propertiesServices";
import { Outlet } from "react-router";
import Footer from "./components/Footer";

function App() {
  // const [properties, setProperties] = useState([]);
  // console.log(properties);
  const params = {
    locationExternalIDs: "5002,6020",
    purpose: "for-rent",
    hitsPerPage: "25",
    page: "0",
    lang: "en",
    sort: "city-level-score",
    rentFrequency: "monthly",
  };

  // useEffect(() => {
  //   fetchProperty(params).then((res) => setProperties(res.data.hits));

  //   return () => {};
  // }, []);

  return (
    <>
      <Navbar/>
      <Outlet />
    <Footer/>

    </>
  );
}

export default App;

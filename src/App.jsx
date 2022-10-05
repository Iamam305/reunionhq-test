import { useEffect, useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";

import { Outlet } from "react-router";
import Footer from "./components/Footer";

function App() {



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

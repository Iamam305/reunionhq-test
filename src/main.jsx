import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RentProperty from "./pages/RentProperty";
import BuyProperty from "./pages/BuyProperty";
import Home from "./pages/Home";
import SingleProperty from "./pages/SingleProperty";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/:id" element={<SingleProperty />} />
          <Route path="/rent" element={<RentProperty />} />
          <Route path="/buy" element={<BuyProperty />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

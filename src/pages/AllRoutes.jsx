import React from "react";
import Home from "./Home";
import Products from "./Products";
import Pricing from "./Pricing";
import Login from "./LoginDesktop";
import Resources from "./Resources";
import Solutions from "./Solutions";
import { Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import LoginMobile from "./LoginMobile";
import LoginDesktop from "./LoginDesktop";

const AllRoutes = ({ screenWidth }) => {
  return (
    <Routes>
      <Route path="/" element={<Home screenWidth={screenWidth} />} />
      <Route path="Product" element={<Products screenWidth={screenWidth} />} />
      <Route path="Pricing" element={<Pricing screenWidth={screenWidth} />} />
      <Route path="Contact" element={<Contact screenWidth={screenWidth} />} />
      <Route path="Login" element={<Login screenWidth={screenWidth} />} />
       <Route path="loginmobile" element={<LoginMobile screenWidth={screenWidth} />} ></Route>
       <Route path="logindesktop" element={<LoginDesktop screenWidth={screenWidth} />} ></Route>

      <Route
        path="Resources"
        element={<Resources screenWidth={screenWidth} />}
      />
      <Route
        path="Solutions"
        element={<Solutions screenWidth={screenWidth} />}
      />
    </Routes>
  );
};

export default AllRoutes;
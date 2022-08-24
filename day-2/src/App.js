import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./pages/AllRoutes";

function App() {
  
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const handleWidth = () => {
    setScreenWidth(window.innerWidth);
  };


  window.addEventListener("resize", handleWidth);
  return (
    <div className="App">
      <Navbar screenWidth={screenWidth} />
     
      <Footer screenWidth={screenWidth} />
    </div>
  );
}

export default App
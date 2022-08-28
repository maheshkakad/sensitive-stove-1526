import React, { useState } from "react";
// import "./Navbar.css";
import NavbarDestop from "./NavbarDestop";
import NavbarMobile from "./NavbarMobile";
import "../css/Navbar.css"
const Navbar = ({ screenWidth }) => {
  const [scrollVisible, setScrollVisible] = useState(false);
  const [navbarBackground, setNavbarBckground] = useState("#0c3245");
  window.onscroll = function () {
    handleScroll();
  };

  function handleScroll() {
    setScrollVisible(document.documentElement.scrollTop > 60 ? true : false);

    setNavbarBckground(
      document.documentElement.scrollTop > 700 ? "#181f39" : "#0c3245"
    );
  }

  const handleVisibility = () => {
    setScrollVisible(true);
  };
  return (
    <nav
      style={{
        width: "100vw",
        backgroundColor: navbarBackground,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        position: "fixed",
        zIndex: "999",
        height: "80px",
        color: "snow",
      }}
    >
      {screenWidth >= 1280 ? (
        <NavbarDestop
          handleVisibility={handleVisibility}
          scrollVisible={scrollVisible}
        />
      ) : (
        <NavbarMobile
          scrollVisible={scrollVisible}
          navbarBackground={navbarBackground}
          screenWidth={screenWidth}
        />
      )}
    </nav>
  );
};

export default Navbar;

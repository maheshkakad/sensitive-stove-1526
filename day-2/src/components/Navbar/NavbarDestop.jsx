import React, { useState } from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";
import {
  AiOutlinePlayCircle,
  AiFillCaretDown,
  AiOutlineArrowRight,
} from "react-icons/ai";
import "../css/NavbarDesktop.css";



const NavbarDestop = ({ scrollVisible, handleVisibility }) => {
  const [hoverProduct, setHoverProduct] = useState(false);
  const [hoverSolution, setHoverSolution] = useState(false);
  const [hoverResources, setHoverResources] = useState(false);
  const [hoverLanguage, setHoverLanguage] = useState(false);
  return (
    <div
      style={{
        width: "1440px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <ul className="nav-links-1">
        <NavLink className="logo" to="/">
          <Logo color={"#fff"} />
        </NavLink>
        <NavLink
          onMouseLeave={() => setHoverProduct(false)}
          onMouseEnter={() => setHoverProduct(true)}
          className="products hover"
          to="Product"
        >
          <div>
            Product{" "}
            <AiFillCaretDown style={{ fontSize: "10px", marginLeft: "5px" }} />
          </div>
          <ul
            style={{
              display: `${hoverProduct ? "block" : "none"}`,
              position: "absolute",
              top: "115%",
              listStyle: "none",
              lineHeight: "2.5rem",
              border: "2px solid white",
              padding: "2rem",
              marginLeft: "-3rem",
              color: "#2c2c2c",
              backgroundColor: "snow",
              borderRadius: "10px",
              fontSize: "16px",
              animationName: "hover-menu",
              animationDuration: "0.5s",
              fontWeight: "normal",
            }}
          >
            <li>Take a Tour</li>
            <li>Features</li>
            <li>Project Templates</li>
            <li>Apps & Integration</li>
            <li>Security</li>
            <li>
              <span>
                <AiOutlinePlayCircle />
              </span>
              <span> Watch live demo</span>
            </li>
          </ul>
        </NavLink>
        <NavLink
          onMouseLeave={() => setHoverSolution(false)}
          onMouseEnter={() => setHoverSolution(true)}
          className="solutions hover"
          to="Solutions"
        >
          <div>
            Solutions{" "}
            <AiFillCaretDown style={{ fontSize: "10px", marginLeft: "5px" }} />
            <div
              style={{
                display: `${hoverSolution ? "block" : "none"}`,
                position: "absolute",
                top: "115%",
                lineHeight: "2.5rem",
                border: "2px solid white",
                padding: "2rem",
                marginLeft: "-3rem",
                color: "#2c2c2c",
                backgroundColor: "snow",
                borderRadius: "10px",
                fontSize: "16px",
                animationName: "hover-menu",
                animationDuration: "0.5s",
                fontWeight: "normal",
              }}
            >
              <div style={{ display: "flex", gap: "2rem" }}>
                <div>
                  <h4 style={{ color: "#777" }}>Teams</h4>
                  <ul style={{ listStyle: "none" }}>
                    <li>Project Managers</li>
                    <li>Marketing</li>
                    <li>Creative</li>
                    <li>Professional Services</li>
                    <li>Product Development</li>
                    <li>Company-Wide</li>
                    <li style={{ color: "green" }}>
                      All Teams <AiOutlineArrowRight />
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: "#777" }}>Use Cases</h4>
                  <ul style={{ listStyle: "none" }}>
                    <li>Enterprise Project Management</li>
                    <li>Agency Project Management</li>
                    <li>Agile Project Management</li>
                    <li>Project Portfolio Management</li>
                    <li>Resource Management</li>
                    <li>Working From Anywhere</li>
                    <li style={{ color: "green" }}>
                      All Use Cases <AiOutlineArrowRight />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
        <NavLink className="pricing hover" to="Pricing">
          Pricing
        </NavLink>
        <NavLink
          onMouseLeave={() => setHoverResources(false)}
          onMouseEnter={() => setHoverResources(true)}
          className="resources hover"
          to="Resources"
        >
          <div>
            Resources{" "}
            <AiFillCaretDown style={{ fontSize: "10px", marginLeft: "5px" }} />
            <div
              style={{
                display: `${hoverResources ? "block" : "none"}`,
                position: "absolute",
                top: "115%",
                lineHeight: "2.5rem",
                border: "2px solid white",
                padding: "2rem",
                marginLeft: "-3rem",
                color: "#2c2c2c",
                backgroundColor: "snow",
                borderRadius: "10px",
                fontSize: "16px",
                animationName: "hover-menu",
                animationDuration: "0.5s",
                fontWeight: "normal",
              }}
            >
              <div style={{ display: "flex", gap: "2rem" }}>
                <div>
                  <h4 style={{ color: "#777" }}>Learn more</h4>
                  <ul style={{ listStyle: "none" }}>
                    <li>Resources</li>
                    <li>Blog</li>
                    <li>Webinars</li>
                    <li>Case studies</li>
                    <li>Educational Guides</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: "#777" }}>About</h4>
                  <ul style={{ listStyle: "none" }}>
                    <li>Partners</li>
                    <li>Company</li>
                    <li>Careers</li>
                    <li>Newsroom</li>
                    <li>Events</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: "#777" }}>Support</h4>
                  <ul style={{ listStyle: "none" }}>
                    <li>Professional Services</li>
                    <li>Help Center</li>
                    <li>Community</li>
                    <li>Interactive Training</li>
                    <li>Support Packages</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
      </ul>
      <ul className="nav-links-2">
        {!scrollVisible ? (
          <>
            <NavLink className="contact hover" to="Contact">
              Contact us
            </NavLink>
            <li
              onMouseEnter={() => setHoverLanguage(true)}
              onMouseLeave={() => setHoverLanguage(false)}
              className="Language hover"
            >
              <span style={{ display: "flex" }}>
                <span>
                  <FaGlobe fontSize="14px" />
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "5px",
                  }}
                >
                  {" "}
                  En{" "}
                </span>
              </span>
              <div
                style={{
                  display: `${hoverLanguage ? "block" : "none"}`,
                  position: "absolute",
                  top: "115%",
                  lineHeight: "2.5rem",
                  border: "2px solid white",
                  padding: "2rem",
                  marginLeft: "-15rem",
                  color: "#2c2c2c",
                  backgroundColor: "snow",
                  borderRadius: "10px",
                  fontSize: "16px",
                  animationName: "hover-menu",
                  animationDuration: "0.5s",
                  fontWeight: "normal",
                }}
              >
                <div style={{ display: "flex", gap: "2rem" }}>
                  <div>
                    <ul style={{ listStyle: "none" }}>
                      <li>English</li>
                      <li>Dansk</li>
                      <li>Deutsch</li>
                      <li>Español</li>
                      <li>Français</li>
                      <li>Bahasa Indonesia</li>
                      <li>Italiano</li>
                      <li>Bahasa Melayu</li>
                      <li>Nederlands</li>
                    </ul>
                  </div>
                  <div>
                    <ul style={{ listStyle: "none" }}>
                      <li>Norsk</li>
                      <li>Polski</li>
                      <li>Português (BR)</li>
                      <li>Svenska</li>
                      <li>Русский</li>
                      <li>日本語</li>
                      <li>한국어</li>
                      <li>中文(简体)</li>
                      <li>繁體中文</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <NavLink className="login hover" to="Login">
              Log in
            </NavLink>
          </>
        ) : (
          <>
            <li
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <input
                style={{
                  padding: "10px",
                  color: "#1e1e1e",
                  backgroundColor: "snow",
                  border: "none",
                  borderRadius: "5px",
                  width: "250px",
                }}
                type="text"
                placeholder="Business Email"
              />
            </li>
          </>
        )}
        <li className="sign-up">
          <button onClick={handleVisibility} className="navbar-button">
            Start for free
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavbarDestop;

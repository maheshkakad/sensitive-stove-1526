import React, { useState } from "react";
import Logo from "./Logo";
import "../css/NavbarMobile.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { FaGlobe } from "react-icons/fa";
import {
  AiOutlinePlayCircle,
  AiFillCaretDown,
  AiFillCaretUp,
} from "react-icons/ai";

const NavbarMobile = ({ navbarBackground, scrollVisible, screenWidth }) => {
  const [hamburgerView, setHamburgerView] = useState(true);
  const [productAccordion, setProductAccordion] = useState(false);
  const [priceAccordion, setPriceAccordion] = useState(false);
  const [solutionsAccordion, setSolutionsAccordion] = useState(false);
  const [resourcesAccordion, setResourcesAccordion] = useState(false);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: "0 2rem",
          position: "relative",
          backgroundColor: !hamburgerView ? "#fff" : navbarBackground,
        }}
      >
        <Logo color={!hamburgerView ? "#000" : "#fff"} />
        {scrollVisible && screenWidth >= 1024 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "2rem",
              alignItems: "center",
              gap: "5px",
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
            <button className="navbar-button">Start for free</button>
          </div>
        ) : null}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <button
            style={{
              padding: "0.5rem",
              backgroundColor: !hamburgerView ? "#fff" : navbarBackground,
              border: "none",
            }}
            onClick={() => setHamburgerView(!hamburgerView)}
          >
            {hamburgerView ? (
              <GiHamburgerMenu
                style={{ color: "snow", fontSize: "20px", cursor: "pointer" }}
              />
            ) : (
              <GrClose
                style={{ color: "snow", fontSize: "20px", cursor: "pointer" }}
              />
            )}
          </button>
        </div>
      </div>
      {!hamburgerView && (
        <div
          style={{
            position: "absolute",
            top: "80px",
            backgroundColor: "white",
            color: "black",
            width: "100%",
            padding: "2rem",
            lineHeight: "4rem",
          }}
        >
          <div>
            <div
              onClick={() => {
                setProductAccordion(!productAccordion);
                setResourcesAccordion(false);
                setSolutionsAccordion(false);
                setPriceAccordion(false);
              }}
              className="mobile-navbar-accordion"
            >
              <span
                style={{
                  color: productAccordion ? "green" : "black",
                  fontWeight: "bold",
                }}
              >
                Product
              </span>
              <span>
                {productAccordion ? <AiFillCaretUp /> : <AiFillCaretDown />}
              </span>
            </div>
            {productAccordion && (
              <ul className="navbar-dropdown-accordion">
                <li>Take a Tour</li>
                <li>Features</li>
                <li>Project Templates</li>
                <li>Apps & Integrations</li>
                <li>Security</li>
                <li style={{ color: "green" }}>
                  <span>
                    <AiOutlinePlayCircle />
                  </span>
                  <span> Watch live demo</span>
                </li>
              </ul>
            )}
          </div>
          <hr />
          <div>
            <div
              className="mobile-navbar-accordion"
              style={{
                color: solutionsAccordion ? "green" : "black",
                fontWeight: "bold",
              }}
              onClick={() => {
                setProductAccordion(false);
                setResourcesAccordion(false);
                setSolutionsAccordion(!solutionsAccordion);
                setPriceAccordion(false);
              }}
            >
              <span>Solutions</span>
              <span>
                {solutionsAccordion ? <AiFillCaretUp /> : <AiFillCaretDown />}
              </span>
            </div>
            {solutionsAccordion && (
              <div>
                <h4 className="navbar-dropdown-accordion-h4">TEAMS</h4>
                <ul className="navbar-dropdown-accordion">
                  <li>Project Managers</li>
                  <li>Marketing</li>
                  <li>Creative</li>
                  <li>Professional Services</li>
                  <li>Product Development</li>
                  <li>Company-Wide</li>
                  <li>All Teams</li>
                </ul>
                <h4 className="navbar-dropdown-accordion-h4">USE CASES</h4>{" "}
                <ul className="navbar-dropdown-accordion">
                  <li>Enterprise Project Management</li>
                  <li>Agency Project Management</li>
                  <li>Agile Project Management</li>
                  <li>Project Portfolio Management</li>
                  <li>Resource Management</li>
                  <li>Working From Anywhere</li>
                  <li>All Use Cases</li>
                </ul>
              </div>
            )}
          </div>
          <hr />
          <div>
            <div
              style={{
                textAlign: "left",
                color: priceAccordion ? "green" : "black",
                fontWeight: "bold",
              }}
              onClick={() => {
                setProductAccordion(false);
                setResourcesAccordion(false);
                setSolutionsAccordion(false);
                setPriceAccordion(!priceAccordion);
              }}
            >
              Pricing
            </div>
          </div>
          <hr />
          <div>
            <div
              onClick={() => {
                setProductAccordion(false);
                setResourcesAccordion(!resourcesAccordion);
                setSolutionsAccordion(false);
                setPriceAccordion(false);
              }}
              style={{
                color: resourcesAccordion ? "green" : "black",
                fontWeight: "bold",
              }}
              className="mobile-navbar-accordion"
            >
              <span>Resources</span>
              <span>
                {resourcesAccordion ? <AiFillCaretUp /> : <AiFillCaretDown />}
              </span>
            </div>
            {resourcesAccordion && (
              <div>
                <h4 className="navbar-dropdown-accordion-h4">Learn more</h4>
                <ul className="navbar-dropdown-accordion">
                  <li>Resources</li>
                  <li>Blog</li>
                  <li>Webinars</li>
                  <li>Case studies</li>
                  <li>Educational Guides</li>
                </ul>
                <h4 className="navbar-dropdown-accordion-h4">About</h4>
                <ul className="navbar-dropdown-accordion">
                  <li>Partners</li>
                  <li>Company</li>
                  <li>Careers</li>
                  <li>Newsroom</li>
                  <li>Events</li>
                </ul>
                <h4 className="navbar-dropdown-accordion-h4">Support</h4>
                <ul className="navbar-dropdown-accordion">
                  <li>Professional Services</li>
                  <li>Help Center</li>
                  <li>Community</li>
                  <li>Interactive Training</li>
                  <li>Support Packages</li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <div>
              <input
                type="email"
                style={{
                  padding: "0.75rem 1.5rem",
                  fontSize: "16px",
                  width: `${screenWidth < 768 ? "100%" : "auto"}`,
                }}
                placeholder="Enter business email"
              />
              <br />
              <button
                style={{
                  padding: "0.85rem 1.5rem",
                  fontSize: "16px",
                  border: "none",
                  color: "white",
                  fontWeight: "bold",
                  backgroundColor: "#07cf65",
                  width: `${screenWidth < 768 ? "100%" : "auto"}`,
                }}
              >
                Start for free
              </button>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex", gap: "2rem" }}>
                <h5 style={{ color: "green" }}>Log in</h5>
                <h5>Contact Sales</h5>
              </div>
              <div>
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
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarMobile;

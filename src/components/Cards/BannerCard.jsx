import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

export const BannerImageCard = ({ image, screenWidth }) => {
  return (
    <div>
      <img
        src={image}
        alt="img"
        style={
          screenWidth >= 1280 ? { minWidth: "100%" } : { maxWidth: "100%" }
        }
      />
    </div>
  );
};

export const BannerTextCard = ({ link, description, heading, title }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        lineHeight: "2rem",
      }}
    >
      <div>
        <h5 style={{ color: "#666", marginBottom: "2rem" }}>{title}</h5>
        <h1 style={{ margin: "1rem 0" }}>{heading}</h1>
        <p
          style={{ margin: "1rem 0", lineHeight: "1.5rem", fontSize: "1.2rem" }}
        >
          {description}
        </p>
        <p style={{ color: "#08ba70", fontWeight: "bold" }}>
          <span style={{ fontSize: "1.2rem" }}>{link}</span>
          <span>
            <BiRightArrowAlt style={{ fontSize: "1rem", marginLeft: "10px" }} />
          </span>
        </p>
      </div>
    </div>
  );
};
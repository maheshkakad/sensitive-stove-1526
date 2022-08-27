import React from "react";
import { BsTwitter, BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
const SocialAndDownload = ({ screenWidth }) => {
  return (
    <div
      style={{
        paddingTop: "2rem",
        borderTop: screenWidth >= 1024 ? "1px solid #555" : "none",
      }}
    >
      <div
        style={
          screenWidth >= 1440
            ? { display: "grid", gridTemplateColumns: "3fr 2fr" }
            : { display: "flex", flexDirection: "column" }
        }
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: screenWidth <= 680 ? "wrap" : "nowrap",
          }}
        >
          <div style={{ display: "flex", columnGap: "2rem" }}>
            <img
              src="https://d1c5qktmphn2d.cloudfront.net/web-grid/v3/3.16.3/components/footer/img/apple_en.svg"
              alt="download"
              width="150px"
            />
            <img
              src="https://d1c5qktmphn2d.cloudfront.net/web-grid/v3/3.16.3/components/footer/img/google_play_en.svg"
              alt="download"
              width="150px"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              margin: "1rem auto",
            }}
          >
            <BsTwitter style={{ margin: "0 1rem" }} />
            <BsFacebook style={{ margin: "0 1rem" }} />
            <FaLinkedinIn style={{ margin: "0 1rem" }} />
            <BsYoutube style={{ margin: "0 1rem" }} />
            <BsInstagram style={{ margin: "0 1rem" }} />
          </div>
        </div>
        <div>
          <p
            style={{
              textAlign: screenWidth >= 1440 ? "end" : "center",
              lineHeight: "1rem",
              marginTop: screenWidth >= 1440 ? "0" : "2rem",
            }}
          >
            ©2006-2022 Wrike, Inc. All rights reserved. Patented.{" "}
            <a style={{ color: "white" }} href="/">
              Privacy Policy.
            </a>
            <br />
            <a style={{ color: "white" }} href="/">
              Terms of Service
            </a>
            .
            <a style={{ color: "white" }} href="/">
              Cookie Preferences
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialAndDownload;

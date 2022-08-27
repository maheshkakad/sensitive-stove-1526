import React from "react";

const QuoteCard = ({ quotesLogo, quote }) => {
  return (
    <div style={{ padding: "3rem 0" }}>
      <div style={{ border: "2px solid #1fc878" }}>
        <div style={{ position: "relative", top: "-20px", left: "30px" }}>
          <img src={quotesLogo} alt="quotes" />
        </div>
        <div
          style={{
            position: "relative",
            padding: "1rem 4rem",
          }}
        >
          <div>
            <h1>{quote.description}</h1>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "2rem",
              alignItems: "center",
            }}
          >
            <div>{quote.department}</div>
            <div>
              <img src={quote.logo} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;

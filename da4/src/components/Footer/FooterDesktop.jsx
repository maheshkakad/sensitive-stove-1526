import React, { useState } from "react";

const FooterDesktop = ({ screenWidth }) => {
  const [showMore, setShowMore] = useState(false);

  const listFullDisplay = { display: showMore ? "block" : "none" };

  const listShrinkDisplay = { display: "block" };
  return (
    <div
      className="footer-desktop"
      style={{
        display: "flex",
        flexWrap: screenWidth >= 1440 ? "nowrap" : "wrap",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent:
            screenWidth >= 1440 ? "space-evenly" : "space-between",
          width: "100%",
          columnGap: "4rem",
          whiteSpace: screenWidth >= 1440 ? "nowrap" : "normal",
        }}
      >
        <div>
          <h4>Product</h4>
          <ul>
            <li>
              <span>Product tour</span>
            </li>
            <li>
              <span>Pricing</span>
            </li>
            <li>
              <span>Templates</span>
            </li>
            <li>
              <span>Apps & integrations</span>
            </li>
            <li>
              <span>Task management</span>
            </li>
            <li>
              <span>Gantt charts</span>
            </li>
            <li>
              <span>Wrike status</span>
            </li>
            <li>
              <span>Security</span>
            </li>
            <li>
              <span>CA notice at collection</span>
            </li>
            <li>
              <span>API</span>
            </li>
          </ul>
        </div>
        <div>
          <h4>Solutions</h4>
          <ul>
            <li>
              <span>All teams</span>
            </li>
            <li>
              <span>Marketing</span>
            </li>
            <li>
              <span>Creative</span>
            </li>
            <li>
              <span>Project management</span>
            </li>
            <li>
              <span>Product development</span>
            </li>
            <li>
              <span>Business operations</span>
            </li>
            <li>
              <span>Professional services</span>
            </li>
            <li>
              <span>Students</span>
            </li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li>
              <span>Help Center</span>
            </li>
            <li>
              <span>Community</span>
            </li>
            <li>
              <span>Webinars</span>
            </li>
            <li>
              <span>Interactive training</span>
            </li>
            <li>
              <span>Support</span>
            </li>
            <li>
              <span>Google project management tools</span>
            </li>
            <li>
              <span>Remote Work Guide</span>
            </li>
            <li>
              <span>Project management software</span>
            </li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li>
              <span>About us</span>
            </li>
            <li>
              <span>Careers</span>
            </li>
            <li>
              <span>Our customers</span>
            </li>
            <li>
              <span>Blog</span>
            </li>
            <li>
              <span>Events</span>
            </li>
            <li>
              <span>Newsroom</span>
            </li>
            <li>
              <span>Partner program</span>
            </li>
            <li>
              <span>User conference</span>
            </li>
            <li>
              <span>Contact us</span>
            </li>
          </ul>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: screenWidth >= 1440 ? "wrap" : "nowrap",
          width: "100%",
          columnGap: "4rem",
        }}
      >
        <div>
          <h4>Guides</h4>
          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "50% 50%",
              columnGap: "2rem",
            }}
          >
            <li>
              <span>Project Management Guide</span>
            </li>
            <li>
              <span>Professional Services Guide</span>
            </li>
            <li>
              <span>Kanban Guide</span>
            </li>
            <li>
              <span>Agile Guide</span>
            </li>
            <li
              style={screenWidth >= 1440 ? listFullDisplay : listShrinkDisplay}
            >
              <span>Remote Work Guide</span>
            </li>
            <li
              style={screenWidth >= 1440 ? listFullDisplay : listShrinkDisplay}
            >
              <span>Return To Work Guide</span>
            </li>
            <li
              style={screenWidth >= 1440 ? listFullDisplay : listShrinkDisplay}
            >
              <span>Marketing Guide</span>
            </li>
            <li
              style={screenWidth >= 1440 ? listFullDisplay : listShrinkDisplay}
            >
              <span>Scrum Guide</span>
            </li>
            <li
              style={screenWidth >= 1440 ? listFullDisplay : listShrinkDisplay}
            >
              <span>Product Management Guide</span>
            </li>
            <li
              style={screenWidth >= 1440 ? listFullDisplay : listShrinkDisplay}
            >
              <span>Digital Marketing Guide</span>
            </li>
            <li
              style={screenWidth >= 1440 ? listFullDisplay : listShrinkDisplay}
            >
              <span>Go-to-Market Guide</span>
            </li>
            <li
              style={screenWidth >= 1440 ? listFullDisplay : listShrinkDisplay}
            >
              <span>Collaborative Work Management Guide</span>
            </li>
          </ul>
          {screenWidth >= 1440 && (
            <p onClick={() => setShowMore(!showMore)}>
              <span className="footer-show-more">Show more</span>
            </p>
          )}
        </div>
        <div>
          <h4>Latest in Wrike Blog</h4>
          <ul
            style={{
              // whiteSpace: screenWidth >= 1440 ? "nowrap" : "normal",
              overflow: "hidden",
            }}
          >
            <li>Why Your Team Needs Social Media Automation in 2022</li>
            <li>RFQs Explained: How to Write a Request for Quote</li>
            <li>Lessons We Can Learn From the Great Resignation</li>
            <li>Do Remote Marketing Jobs Offer Higher Salaries?</li>
            <li>Marketing to Gen Z: The Complete Marketing Strategy Guide</li>
            <li>How To Enhance Design Operations for Creative Teams</li>
            <li>
              The State of IT in 2022: Why IT Teams Need Flexible Project
              Management
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterDesktop;
